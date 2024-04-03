"use client"
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { login } from '../../../lib/helper';
import { toast } from 'react-toastify';

export default function UserLogin() {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [submited, setSubmited] = useState("")
    const router = useRouter()

    const [showPassword, setShowPassword] = useState(false);

    const handlePassword = () => {
        setShowPassword(!showPassword);
    };
    const submit = (e) => {
        e.preventDefault()
        setSubmited(true)
        if (!email == "" && !pass == "") {
            const fomt = new FormData()
            fomt.append("email", email)
            fomt.append("password", pass)
            login(fomt).then(response => {
                router.push("/profile")
                console.log(response)
                toast.success("Login SuccessFuly!")
            })
        }
    }
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
                        <h3 className="panel-title">Login</h3>
                        <form>
                            <div className="input-group mb-30">
                                <span className="input-group-text"><i className="fa-regular fa-user"></i></span>
                                <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            {submited && !email && <span className="text-danger">User Name is required</span>}
                            <div className="input-group mb-20">
                                <span className="input-group-text"><i className="fa-light fa-lock"></i></span>
                                <input type={showPassword ? 'text' : 'password'} className="form-control rounded-end" placeholder="Password" value={pass} onChange={(e) => setPass(e.target.value)} />
                                <a
                                    role="button"
                                    className="password-show"
                                    onClick={handlePassword}
                                >
                                    <i className={`fa-duotone ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                                </a>
                            </div>
                            {submited && !pass && <span className="text-danger">Password is required</span>}
                            <div className="d-flex justify-content-between mb-30">
                                <div className="form-check d-flex">
                                    <input className="form-check-input" type="checkbox" value="" id="loginCheckbox" />
                                    <label className="form-check-label text-white ms-3" htmlFor="loginCheckbox">
                                        Remember Me
                                    </label>
                                </div>
                                <a className="text-primary fs-14" type="button" onClick={frogetpassword}>Forgot Password?</a>
                            </div>
                            <button className="btn btn-primary w-100 login-btn " onClick={submit}>Sign in</button>
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