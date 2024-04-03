"use client";
import { AgGridReact } from 'ag-grid-react';
import Link from "next/link";
// import { toast } from "react-hot-toast";
import React, { useEffect, useState } from 'react';
import { addjurlisted, addjurstate } from "../../../services/superadmin/jurviewlist"
import { useRouter } from "next/navigation";
import { addjury, emailjury } from '../../../lib/helper';
import { set } from 'mongoose';
import { toast } from 'react-toastify';
export default function Addjury() {
    const router = useRouter()

    const [ftname, setFtname] = useState("")
    const [ltname, setLname] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [date, setDate] = useState("")
    const [cit, setCit] = useState("")
    const [pin, setPin] = useState("")
    const [states, setState] = useState("")
    const [coutry, setCoutry] = useState("")
    const [dist, setDist] = useState("")

    const [coutlist, setCoutlist] = useState([])
    const [stalit, setStalit] = useState([])
    const [distlist, setDistlist] = useState([])
    const [submited, setSubmited] = useState(false)
    const [erroemsg, setErroemsg] = useState(false)


    function addJury(e) {
        e.preventDefault()
        setSubmited(true)
        // setErroemsg(true)
        if (ftname !== "") {
            if (ltname !== "") {
                if (email !== "") {
                    if (mobile !== "") {
                        if (date !== "") {
                            if (coutry !== "") {
                                if (states !== "") {
                                    if (dist !== "") {
                                        if (cit !== "") {
                                            if (pin !== "") {
                                                const fomt = new FormData()
                                                fomt.append("firstname", ftname)
                                                fomt.append("lastname", ltname)
                                                fomt.append("email", email)
                                                fomt.append("mobile", mobile)
                                                fomt.append("date_birth", date)
                                                fomt.append("country", coutry)
                                                fomt.append("state", states)
                                                fomt.append("districts", dist)
                                                fomt.append("city", cit)
                                                fomt.append("pincode", pin)
                                                addjurlisted(fomt).then(response => {
                                                    router.push("/profile/Alert")
                                                    setSubmited(false)
                                                    console.log(response)
                                                    toast.success("Event SuccessFuly!")
                                                })
                                                emailjury(fomt).then(response => {
                                                    console.log(response)
                                                })
                                            } else {
                                                setErroemsg("Enter the pincode")
                                            }
                                        } else {
                                            setErroemsg("Enter the city")
                                        }
                                    } else {
                                        setErroemsg("select the district")
                                    }
                                } else {
                                    setErroemsg("Select the state")
                                }
                            } else {
                                setErroemsg("Select the country")
                            }
                        } else {
                            setErroemsg("Select the date of birth")
                        }
                    } else {
                        setErroemsg("Enter the mobile")
                    }
                } else {
                    setErroemsg("Enter the email")
                }
            } else {
                setErroemsg("Enter the last name")
            }

        } else {
            setErroemsg("Enter the first name")
        }
    }

    useEffect(() => {
        addjurstate().then(response => {
            if (response.length > 0) {
                for (let i = 0; i < response.length; i++) {
                    setStalit(response[0].state)
                    setCoutlist(response[1].countrys)
                    setDistlist(response[2].districts)
                }
            }
        })
    }, [])

    return (
        <div>
            <main id="main" className="main">
                <section className="section">
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className="card-title text-danger my-2">Add Jury</h5>
                        </div>

                    </div>
                    <div className='row'>
                        <div className='col-lg-12 col-md-12'>
                            <div className='card'>
                                <div className='card-body p-4'>
                                    <div className="row">
                                        <div className='col-md-6'>
                                            <div className="form-group">
                                                <label className='form-label'>First Name:</label>
                                                <input type="text" className="form-control"
                                                    placeholder='Enter First Name'
                                                    value={ftname}
                                                    onChange={(e) => setFtname(e.target.value)}
                                                />
                                                {submited && !ftname &&
                                                    <span className="text-danger">
                                                        First Name is required
                                                    </span>
                                                }
                                            </div>

                                        </div>
                                        <div className='col-md-6'>
                                            <div className='form-group'>
                                                <label className='form-label'>Last Name:</label>
                                                <input type="text" className="form-control"
                                                    placeholder='Enter Last Name'
                                                    value={ltname}
                                                    onChange={(e) => setLname(e.target.value)}
                                                />
                                                {submited && !ltname &&
                                                    <span className="text-danger">
                                                        Last Name is required
                                                    </span>
                                                }
                                            </div>

                                        </div>
                                        <div className='col-md-6'>
                                            <div className='form-group'>
                                                <label className='form-label'>Email:</label>
                                                <input type="text" className="form-control"
                                                    placeholder='Enter Email'
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                />
                                                {
                                                    submited && !email &&
                                                    <span className="text-danger">
                                                        Email is required
                                                    </span>
                                                }
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='form-group'>
                                                <label className='form-label'>Mobile:</label>
                                                <input type="text" className="form-control"
                                                    placeholder='Enter Mobile'
                                                    value={mobile}
                                                    onChange={(e) => setMobile(e.target.value)}
                                                />
                                                {
                                                    submited && !mobile &&
                                                    <span className="text-danger">
                                                        Mobile is required
                                                    </span>
                                                }

                                            </div>


                                        </div>
                                        <div className='col-md-6'>
                                            <div className='form-group'>
                                                <label className='form-label'>Date of Birth:</label>
                                                <input type="date" className="form-control"
                                                    placeholder='Enter Mobile'
                                                    // min={new Date().toISOString().split("T")[0]}
                                                    // max="2024-01-22"
                                                    value={date}
                                                    onChange={(e) => setDate(e.target.value)}
                                                />
                                                {
                                                    submited && !date &&
                                                    <span className="text-danger">
                                                        Date of Birth is required
                                                    </span>
                                                }
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='form-group'>
                                                <label className='form-label'>Country:</label>
                                                <select className='form-control' value={coutry} onChange={(e) => setCoutry(e.target.value)}>
                                                    <option value="" defaultValue disabled >Select Country</option>
                                                    {coutlist.map((data, i) => {
                                                        return (
                                                            <option key={i} value={data.name}>{data.name}</option>
                                                        )
                                                    })
                                                    }
                                                </select>
                                                {
                                                    submited && !coutry &&
                                                    <span className="text-danger">
                                                        Country is required
                                                    </span>
                                                }
                                            </div>

                                        </div>
                                        <div className='col-md-6'>
                                            <div className='form-group'>
                                                <label className='form-label'>State:</label>
                                                <select className='form-control' value={states} onChange={(e) => setState(e.target.value)}>
                                                    <option value="" defaultValue disabled >Select State</option>
                                                    {stalit.map((data, i) => {
                                                        return (
                                                            <option key={i} value={data.name}>{data.name}</option>
                                                        )
                                                    })

                                                    }
                                                </select>
                                                {
                                                    submited && !states &&
                                                    <span className="text-danger">
                                                        State is required
                                                    </span>
                                                }
                                            </div>

                                        </div>
                                        <div className='col-md-6'>
                                            <div className='form-group'>
                                                <label className='form-label'>Distrct:</label>
                                                <select className='form-control' value={dist} onChange={(e) => setDist(e.target.value)}>
                                                    <option value="" defaultValue disabled >Select Distrct</option>
                                                    {distlist.map((data, i) => {
                                                        return (
                                                            <option key={i} value={data.stateCod}>{data.district}</option>
                                                        )
                                                    })
                                                    }
                                                </select>
                                                {
                                                    submited && !dist &&
                                                    <span className="text-danger">
                                                        Distrct is required
                                                    </span>
                                                }
                                            </div>


                                        </div>
                                        <div className='col-md-6'>
                                            <div className='form-group'>
                                                <label className='form-label'>City:</label>
                                                <input type="text" className="form-control"
                                                    placeholder='Enter City'
                                                    value={cit}
                                                    onChange={(e) => setCit(e.target.value)}
                                                />
                                                {
                                                    submited && !cit &&
                                                    <span className="text-danger">
                                                        City is required
                                                    </span>

                                                }
                                            </div>


                                        </div>
                                        <div className='col-md-6'>
                                            <div className='form-group'>
                                                <label className='form-label'>Pincode:</label>
                                                <input type="text" className="form-control"
                                                    placeholder='Enter Pincode'
                                                    value={pin}
                                                    onChange={(e) => setPin(e.target.value)}
                                                />
                                                {
                                                    submited && !pin &&
                                                    <span className="text-danger">
                                                        Pincode is required
                                                    </span>

                                                }
                                            </div>

                                        </div>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-12'>
                                            <button className='btn btn-primary' style={{ float: "right" }} onClick={addJury}>Submit</button>
                                        </div>

                                        {erroemsg !== '' && <span className="text-danger">{erroemsg}</span>

                                        }
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>
                </section>

            </main>
        </div>
    )
}