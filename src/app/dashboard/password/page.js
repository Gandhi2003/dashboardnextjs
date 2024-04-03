"use client"
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { otpsendmail } from "../../../lib/helper";
import { toast } from 'react-toastify';
export default function Password() {
    const [email, setEmail] = useState("")
    const [submited, setSubmited] = useState("")
    const router = useRouter()
    function Otpsend(e) {
        e.preventDefault()
        setSubmited(true)
        if (!email == "") {
            console.log(email)
            const fomt = new FormData()
            fomt.append("email", email)
            otpsendmail(fomt).then((res) => {
                router.push("/dashboard/otpverification")
                toast.success("OTP Sent Successfully!")
            })
        }
    }
    function signup() {
        router.push("/dashboard/Login")
    }
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
                        <h3 className="panel-title">Reset Password</h3>
                        <form>
                            <div className="input-group mb-30">
                                <span className="input-group-text"><i className="fa-regular fa-envelope"></i></span>
                                <input type="text" className="form-control" placeholder="Username or email address" value={email} onChange={(e) => setEmail(e.target.value)} />
                                
                            </div>
                            {submited && !email && <span className="text-danger">Email is required</span>}
                            <button className="btn btn-primary w-100 login-btn" onClick={Otpsend}>Get Link</button>
                        </form>
                        <div className="other-option">
                            <p className="mb-0">Remember the password? <a href="#" onClick={signup}>Login</a></p>
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