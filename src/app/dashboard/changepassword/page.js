"use client"
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { toast } from 'react-toastify';
import { changepassword, otpgetmail } from "../../../lib/helper";

export default function UserLogin() {
    const [copass, setConpass] = useState("");
    const [pass, setPass] = useState("");
    const [submited, setSubmited] = useState("")
    const [email, setEmail] = useState([])
    const [err, setErr] = useState("")
    const router = useRouter()

    const submit = (e) => {
        e.preventDefault();
        setSubmited(true)
        setErr("");
        let arr2 = "";
        if (!pass == "") {
            if (!copass == "") {
                if (pass == copass) {
                    for (let i = 0; i < email.length; i++) {
                        arr2 = email[i].email
                    }
                    const fomt = new FormData()
                    fomt.append("email", arr2)
                    fomt.append("password", copass)
                    console.log("newpassword", copass, arr2)

                    changepassword(fomt).then(response => {
                        router.push("/dashboard/Login")
                        console.log(response)
                        toast.success("Login SuccessFuly!")
                    })
                }
            } else {
                setErr("Please Enter Confirm Password!")
            }
        } else {
            setErr("Please Enter Password!")
        }
    }
    let arr = [];
    useEffect(() => {
        otpgetmail().then((res) => {
            if (res.length > 0) {
                for (let i = 0; i < res.length; i++) {
                    arr.push({
                        // id: res[i]._id,
                        email: res[i].email,
                        // otp: res[i].otp
                    })
                    setEmail(arr)
                    console.log(arr)
                }
            }
        })
    })
    function frogetpassword() {
        router.push("/dashboard/password")
    }
    return (
        <div className="light-theme">
            <div className="main-content login-pane" >
                <div className="login-body">
                    <div className="top d-flex justify-content-between align-items-center">
                        <div className="logo">
                            <Image src={require('../../../../public/assets/images/Login/run.png')} alt="Logo" width={200} height={70} />
                        </div>
                        <a href="#"><i className="fa-duotone fa-house-chimney"></i></a>
                    </div>
                    <div className="bottom">
                        <h3 className="panel-title">Change Password</h3>
                        <form>
                            <div className="input-group mb-30">
                                <span className="input-group-text"><i className="fa-light fa-lock"></i></span>
                                <input type="email" className="form-control" placeholder="New Password" value={pass} onChange={(e) => setPass(e.target.value)} />
                            </div>
                            {submited && !pass && <span className="text-danger">New Password is required!</span>}
                            <div className="input-group mb-20">
                                <span className="input-group-text"><i className="fa-light fa-lock"></i></span>
                                <input type="password" className="form-control rounded-end" placeholder="Confirm Password" value={copass} onChange={(e) => setConpass(e.target.value)} />
                                <a role="button" className="password-show"><i className="fa-duotone fa-eye"></i></a>
                            </div>
                            {err && <span className="text-danger">{err}</span>}
                            {submited && !copass && <span className="text-danger">Confirm Password is required!</span>}
                            <div className="d-flex justify-content-between mb-30">
                                <div className="form-check d-flex">
                                    <input className="form-check-input" type="checkbox" value="" id="loginCheckbox" />
                                    <label className="form-check-label text-white ms-3" htmlFor="loginCheckbox">
                                        I accept the Terms and Conditions
                                    </label>
                                </div>
                                <a className="text-primary fs-14" onClick={frogetpassword}>Forgot Password?</a>
                            </div>
                            <button className="btn btn-primary w-100 login-btn " onClick={submit}>Reset Password</button>
                        </form>
                        <div className="other-option">
                            <p>Or continue with</p>
                            <div className="social-box d-flex justify-content-center gap-20">
                                <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="#"><i className="fa-brands fa-twitter"></i></a>
                                <a href="#"><i className="fa-brands fa-google"></i></a>
                                <a href="#"><i className="fa-brands fa-instagram"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- footer start --> */}
            <div className="footer" >
                <p >Copyright© <script>document.write</script> All Rights Reserved By <span className="text-primary">Revel</span></p>
            </div>
            {/* <!-- footer end --> */}
        </div>
    )
}