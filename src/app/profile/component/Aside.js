"use client"

import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from 'react-toastify';
import { logout } from "../../../lib/helper";
export default function Aside() {

    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    const router = useRouter()
    const logoutsub = (e) => {
        e.preventDefault();
        logout().then((res) => {
            console.log(res)
            toast.success("Logout successfully")
            router.push('/dashboard/Login')
        })
    }

    useEffect(() => {
       
    })
    return (
        <>
          
            {/* <!-- ======= Sidebar ======= --> */}
            <aside id="sidebar" className= "sidebar">
                <ul className="sidebar-nav" id="sidebar-nav">
                    <li className="nav-item">
                        <Link className="nav-link " href="/profile">
                            <i className="bi bi-grid"></i>
                            <span>Dashboard</span>
                        </Link>
                    </li>

                    {/* <!-- End Dashboard Nav --> */}
                    <li className="nav-item">
                        <a className={open ? "nav-link open" : "nav-link collapsed"} data-bs-target="#components-nav" data-bs-toggle="collapse" href="#" onClick={() => setOpen(!open)}>
                            <i className="bi bi-menu-button-wide"></i><span>Components</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="components-nav" className={open ? "nav-content open " : "nav-content collapse "} data-bs-parent="#sidebar-nav">
                            <li>
                                <Link href="/profile/Alert">

                                    <i className="bi bi-circle"></i><span>Alert</span>

                                </Link>
                            </li>
                            <li>
                                <Link href="/profile/Accord">

                                    <i className="bi bi-circle"></i><span>Accordion</span>

                                </Link>
                            </li>

                        </ul>
                    </li>
                    {/* <!-- End Tables Nav --> */}


                    <li className="nav-item">
                        <a className={open2 ? "nav-link open" : "nav-link collapsed"} data-bs-target="#forms-nav" data-bs-toggle="collapse" href="#" onClick={() => setOpen2(!open2)}>
                            <i className="bi bi-journal-text"></i><span>jury</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="forms-nav" className={open2 ? "nav-content open " : "nav-content collapse "} data-bs-parent="#sidebar-nav">
                            <li>
                                <Link href="/profile/Formele">
                                    <i className="bi bi-circle"></i><span>Form Elements</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/profile/addjury">
                                    <i className="bi bi-circle"></i><span>Add jury</span>
                                </Link>
                            </li>

                        </ul>
                    </li>
                    {/* <!-- End Forms Nav --> */}


                    <li className="nav-item">
                        <a className={open1 ? "nav-link open" : "nav-link collapsed"} data-bs-target="#charts-nav" data-bs-toggle="collapse" href="#" onClick={() => setOpen1(!open1)}>
                            <i className="bi bi-bar-chart"></i><span>Charts</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="charts-nav" className={open1 ? "nav-content open" : "nav-content collapse"} data-bs-parent="#sidebar-nav">
                            <li>
                                <Link href="/profile/emailsend">
                                    <i className="bi bi-circle"></i><span>Email</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/profile/addproducts">
                                    <i className="bi bi-circle"></i><span> Add Products</span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/profile/products">
                                    <i className="bi bi-circle"></i><span>Products</span>
                                </Link>
                            </li>
                            <li>
                                <a href="charts-echarts.html">
                                    <i className="bi bi-circle"></i><span>ECharts</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    {/* <!-- End Charts Nav --> */}

                    <li className="nav-item">
                        <a className="nav-link collapsed" data-bs-target="#icons-nav" data-bs-toggle="collapse" href="#">
                            <i className="bi bi-gem"></i><span>Icons</span><i className="bi bi-chevron-down ms-auto"></i>
                        </a>
                        <ul id="icons-nav" className="nav-content collapse " data-bs-parent="#sidebar-nav">
                            <li>
                                <a href="icons-bootstrap.html">
                                    <i className="bi bi-circle"></i><span>Bootstrap Icons</span>
                                </a>
                            </li>
                            <li>
                                <a href="icons-remix.html">
                                    <i className="bi bi-circle"></i><span>Remix Icons</span>
                                </a>
                            </li>
                            <li>
                                <a href="icons-boxicons.html">
                                    <i className="bi bi-circle"></i><span>Boxicons</span>
                                </a>
                            </li>
                        </ul>
                    </li>
                    {/* <!-- End Icons Nav --> */}

                    <li className="nav-heading">Pages</li>

                    {/* <!-- End F.A.Q Page Nav --> */}

                    <li className="nav-item">
                        <a className="nav-link collapsed" href="pages-register.html">
                            <i className="bi bi-card-list"></i>
                            <span>Register</span>
                        </a>
                    </li>
                    {/* <!-- End Register Page Nav --> */}

                    <li className="nav-item">
                        <a className="nav-link collapsed" href="pages-login.html">
                            <i className="bi bi-box-arrow-in-right"></i>
                            <span onClick={logoutsub}>Logout</span>
                        </a>
                    </li>
                    {/* <!-- End Login Page Nav --> */}


                </ul>

            </aside>


            {/* <!-- End Sidebar--> */}
            <ToastContainer
                position='top-right'
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light'
            />
        </>
    )
}