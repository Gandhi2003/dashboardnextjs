"use client"
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { useRouter } from "next/navigation";
import { register } from '../../../lib/helper';
import { toast } from 'react-toastify';
export default function Register() {
    const router = useRouter()
    const [user, setUser] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [pass, setPass] = useState("")
    const [cit, setCit] = useState("")
    const [submited, setSubmited] = useState(false)

    const [showPassword, setShowPassword] = useState(false);

    const handlePassword = () => {
        setShowPassword(!showPassword);
    };

    const submit = (e) => {
        e.preventDefault()
        setSubmited(true)
        if (!user == "" && !email == "" && !mobile == "" && !pass == "") {
            const fomt = new FormData()
            fomt.append("username", user)
            fomt.append("email", email)
            fomt.append("mobile", mobile)
            fomt.append("password", pass)
            register(fomt).then(response => {
                router.push("/dashboard/Login")
                console.log(response)
                toast.success("Registration SuccessFuly!")
            })
        }
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
                        <h3 className="panel-title">Registration</h3>
                        <form>
                            <div className="input-group mb-30">
                                <span className="input-group-text"><i className="fa-regular fa-user"></i></span>
                                <input type="text" className="form-control" placeholder="User Name" value={user} onChange={(e) => setUser(e.target.value)} />
                                {submited && !user && <span className="text-danger">User Name is required</span>}
                            </div>
                            <div className="input-group mb-30">
                                <span className="input-group-text"><i className="fa-regular fa-envelope"></i></span>
                                <input type="email" className="form-control" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                {submited && !email && <span className="text-danger">User Name is required</span>}
                            </div>
                            <div className="input-group mb-30">
                                <span className="input-group-text"><i className="fa-light fa-mobile"></i></span>
                                <input type="mobile" className="form-control" placeholder="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
                                {submited && !mobile && <span className="text-danger">mobile is required</span>}
                            </div>
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
                                {/* <a role="button" className="password-show"><i className="fa-duotone fa-eye"></i></a> */}
                                {submited && !pass && <span className="text-danger">Password is required</span>}
                            </div>
                            <button className="btn btn-primary w-100 login-btn" onClick={submit}>Sign up</button>
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
                {/* <!-- footer start --> */}
                <div className="footer">
                    <p>Copyright© <script>document.write</script> All Rights Reserved By <span className="text-primary">Revel</span></p>
                </div>
                {/* <!-- footer end --> */}
            </div>
        </div>
    )
}