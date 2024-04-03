"use client"
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import OtpInput from 'react-otp-input';
import { otpgetmail, otpsendmail } from "../../../lib/helper";
import { toast } from 'react-toastify';
export default function Otpverification() {
    const router = useRouter()
    const [otp, setOtp] = useState("")
    const [otplist, setOtplist] = useState([])
    const [err, setErr] = useState("");
    const [countdown, setCountdown] = useState(60);
    function Verify(e) {
        e.preventDefault();
        setErr("");
        if (!otp == "") {
            if (!countdown == 0) {
                for (let i = 0; i < otplist.length; i++) {
                    if (otplist[i].otp == otp) {
                        toast.success("OTP Verified Successfully!")
                        router.push("/dashboard/changepassword")
                    } else {
                        toast.error("OTP Verified Failed!")
                    }
                }
            } else {
                toast.error("OTP is Expired!")
            }
        } else {
            setErr("Please Enter OTP!")
        }
    }
   
    function Resend() {
        for (let i = 0; i < otplist.length; i++) {
            const fomt = new FormData()
            fomt.append("email", otplist[i].email)
            otpsendmail(fomt).then((res) => {
                router.push("/dashboard/otpverification")
                toast.success("OTP Sent Successfully!")
            })
        }
    }

    let arr = [];
    useEffect(() => {
        otpgetmail().then((res) => {
            if (res.length > 0) {
                for (let i = 0; i < res.length; i++) {
                    arr.push({
                        id: res[i]._id,
                        email: res[i].email,
                        otp: res[i].otp
                    })
                    setOtplist(arr)
                }
            }
        })
        const interval = setInterval(() => {
            setCountdown((prevCount) => {
                if (prevCount <= 1) {
                    clearInterval(interval);
                    return 0;
                } else {
                    return prevCount - 1;
                }
            });
        }, 1000);
        return () => clearInterval(interval);

    }, [])
    return (
        <div className="light-theme">
            <div className="main-content login-panel">
                <div className="login-body">
                    <div className="top d-flex justify-content-between align-items-center">
                        <div className="logo">
                            <Image src={require('../../../../public/assets/images/Login/run.png')} alt="Logo" width={200} height={70} />
                        </div>
                        <a href="dashboard-index.html"><i className="fa-duotone fa-house-chimney"></i></a>
                    </div>
                    <div className="bottom">
                        <h3 className="panel-title">Email Verification</h3>
                        <form>
                            <div className="input-group mb-30 ms-30">
                                {/* <span className="input-group-text"><i className="fa-regular fa-envelope"></i></span> */}
                                <OtpInput
                                    value={otp}
                                    onChange={setOtp}
                                    numInputs={4}
                                    renderSeparator={<span> </span>}
                                    inputType="tel"
                                    containerStyle={{ display: 'unset', margin: "0px 118px" }}
                                    inputStyle={{ width: "3rem", height: "3.5rem" }}
                                    renderInput={(props) => <input {...props} className='otp-input' />}
                                />
                            </div>
                            {err && <p className="text-danger">{err}</p>}
                            <button className="btn btn-primary w-100 login-btn" onClick={Verify}>Verif Account</button>
                        </form>
                        <div className="other-option">
                            <p className="mb-0">Didn't receive the code?{" "} {countdown === 0 ? (
                                <a className="text-primary" onClick={Resend}>Resend OTP</a>
                            ) : (
                                <span className="text-danger">{countdown}</span>
                            )}</p>
                        </div>
                    </div>
                </div>

                {/* <!-- footer start --> */}
                <div className="footer">
                    <p>Copyright© <script>document.write</script> All Rights Reserved By <span className="text-primary">Revel</span></p>
                </div>
                {/* <!-- footer end --> */}
            </div>
        </div>
    )
}