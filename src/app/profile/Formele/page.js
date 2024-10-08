"use client"

import Link from "next/link";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { catlister, getUser, getimg, userimg } from "../../../lib/helper";
import Image from 'next/image';



export default function Formele() {
    const [state, setStat] = useState("");
    const [add, setAdd] = useState("");
    const DOMAIN = "http://localhost:3000";
    const [tname, setData] = useState("");
    const [stalit, setStalit] = useState([]);
    const [addlist, setAddlist] = useState([]);

    const [photo, setPhoto] = useState('');

    async function handleSelectChange(e) {
        setStat(e.target.value);
    }

    function subm(e) {
        e.preventDefault()
        const formData = new FormData();
        formData.append('file', formphoto);
        userimg(formData).then(response => {
           toast.success("Uppload Successfuly Image!")
        })
    }
    function handleSelectChangeAdd(e) {
        setAdd(e.target.value);
    }

    useEffect(() => {


        getUser().then(response => {
            if (response.length !== 0) {
                // console.log(response[0].name)
                console.log(response[0].data[0].event_start)
                setData(response[0].data[0].event_start)

            }
        })
        catlister().then(response => {
            console.log(response)
            setStalit(response)
        })



        getimg().then(response => {

            if (response[0].imagePath) {
                setPhoto(response[0].imageName)
                console.log(response[0].imageName)

            }
        })

    }, []);

    const [formphoto, setPhotoFile] = useState("");
    const [formphotoupload, setPhotoUpload] = useState("");

    function photofile(e) {
        e.preventDefault();
        setPhotoUpload("");
        setPhotoFile("");
        if (e.target.files.length !== 0) {
            if (e.target.files[0].name.match(/\.(jpg|jpeg|png)$/i)) {
                setPhotoUpload(URL.createObjectURL(e.target.files[0]));

                setPhotoFile(e.target.files[0]);
            } else {
                setPhotoErrors("Logo should be jpg or png or jpeg format");
            }
        }
    }
    return (
        <div>
            <main id="main" className="main">

                <div className="pagetitle">
                    <h1>Form Elements</h1>
                    <nav>
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link href="/profile">Home</Link></li>
                            <li className="breadcrumb-item">Forms</li>
                            <li className="breadcrumb-item active">Elements</li>
                        </ol>
                    </nav>
                </div>
                {/* <!-- End Page Title --> */}

                <section className="section">
                    <div className="row">
                        <div className="col-lg-6">

                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">{tname}</h5>
                                    {/* {tname.map((item,i) => (
                                        <div key={i}>
                                            <p>{item.name}</p>

                                        </div>
                                    ))} */}

                                    {/* <!-- General Form Elements --> */}
                                    <form>
                                        <div className="row mb-3">
                                            <label htmlFor="inputText" className="col-sm-2 col-form-label">Text</label>
                                            <div className="col-sm-10">

                                                <input type="text" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                                            <div className="col-sm-10">
                                                <input type="email" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
                                            <div className="col-sm-10">
                                                <input type="password" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputNumber" className="col-sm-2 col-form-label">Number</label>
                                            <div className="col-sm-10">
                                                <input type="number" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputNumber" className="col-sm-2 col-form-label">File Upload</label>
                                            <div className="col-sm-10">
                                                <input className="form-control" type="file"
                                                    name="file"
                                                    id="file"
                                                    accept=".png,.jpg,.jpeg"
                                                    onChange={photofile} />
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="imagecontainer">
                                                <img
                                                    src={formphotoupload}
                                                    width="100%"
                                                    height="auto"
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-4">
                                            <div className="imagecontainer">
                                                {/* <Image
                                                    src={require('../../Upload/11.jpeg')}
                                                    width="100%"
                                                    height="auto"
                                                /> */}
                                                {/* <Image
                                                    // src={`/Upload/${photo}`}
                                                    src={require(`../../Upload/${photo}`)}
                                                    width={100}
                                                    height={100}
                                                    alt="Your Image"
                                                /> */}
                                                {/* <p>{photo}</p> */}
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputDate" className="col-sm-2 col-form-label">Date</label>
                                            <div className="col-sm-10">
                                                <input type="date" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputTime" className="col-sm-2 col-form-label">Time</label>
                                            <div className="col-sm-10">
                                                <input type="time" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label htmlFor="inputColor" className="col-sm-2 col-form-label">Color Picker</label>
                                            <div className="col-sm-10">
                                                <input type="color" className="form-control form-control-color" id="exampleColorInput" value="#4154f1" title="Choose your color" />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Textarea</label>
                                            <div className="col-sm-10">
                                                <textarea className="form-control" style={{ height: "100px" }}></textarea>
                                            </div>
                                        </div>
                                        <fieldset className="row mb-3">
                                            <legend className="col-form-label col-sm-2 pt-0">Radios</legend>
                                            <div className="col-sm-10">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                                                    <label className="form-check-label" htmlFor="gridRadios1">
                                                        First radio
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                                                    <label className="form-check-label" htmlFor="gridRadios2">
                                                        Second radio
                                                    </label>
                                                </div>
                                                <div className="form-check disabled">
                                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios" value="option" disabled />
                                                    <label className="form-check-label" htmlFor="gridRadios3">
                                                        Third disabled radio
                                                    </label>
                                                </div>
                                            </div>
                                        </fieldset>
                                        <div className="row mb-3">
                                            <legend className="col-form-label col-sm-2 pt-0">Checkboxes</legend>
                                            <div className="col-sm-10">

                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="gridCheck1" />
                                                    <label className="form-check-label" htmlFor="gridCheck1">
                                                        Example checkbox
                                                    </label>
                                                </div>

                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="gridCheck2" checked />
                                                    <label className="form-check-label" htmlFor="gridCheck2">
                                                        Example checkbox 2
                                                    </label>
                                                </div>

                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label className="col-sm-2 col-form-label">Disabled</label>
                                            <div className="col-sm-10">
                                                <input type="text" className="form-control" value="Read only / Disabled" disabled />
                                            </div>
                                        </div>








                                        <div className="row mb-3">
                                            <label className="col-sm-2 col-form-label">State</label>
                                            <div className="col-sm-10">
                                                {/* <select value={state} onChange={handleSelectChange}>
                                                    <option value="">Select an option</option>
                                                    {stalit.map((option, i) => (
                                                        <option key={i} >
                                                            {option.username}
                                                        </option>
                                                    ))}

                                                </select> */}
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label className="col-sm-2 col-form-label">Multi Select</label>
                                            <div className="col-sm-10">
                                                <select className="form-select" multiple aria-label="multiple select example">
                                                    <option select>Open this select menu</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label className="col-sm-2 col-form-label">Submit Button</label>
                                            <div className="col-sm-10">
                                                <button type="submit" className="btn btn-primary" onClick={subm}>Submit Form</button>
                                            </div>
                                        </div>

                                    </form>
                                    {/* <!-- End General Form Elements --> */}

                                </div>
                            </div>

                        </div>

                        <div className="col-lg-6">

                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Advanced Form Elements</h5>

                                    {/* <!-- Advanced Form Elements --> */}
                                    <form>
                                        <div className="row mb-5">
                                            <label className="col-sm-2 col-form-label">Switches</label>
                                            <div className="col-sm-10">
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                                                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default switch checkbox input</label>
                                                </div>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked />
                                                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Checked switch checkbox input</label>
                                                </div>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckDisabled" disabled />
                                                    <label className="form-check-label" htmlFor="flexSwitchCheckDisabled">Disabled switch checkbox input</label>
                                                </div>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" id="flexSwitchCheckCheckedDisabled" checked disabled />
                                                    <label className="form-check-label" htmlFor="flexSwitchCheckCheckedDisabled">Disabled checked switch checkbox input</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mb-5">
                                            <label className="col-sm-2 col-form-label">Ranges</label>
                                            <div className="col-sm-10">
                                                <div>
                                                    <label htmlFor="customRange1" className="form-label">Example range</label>
                                                    <input type="range" className="form-range" id="customRange1" />
                                                </div>
                                                <div>
                                                    <label htmlFor="disabledRange" className="form-label">Disabled range</label>
                                                    <input type="range" className="form-range" id="disabledRange" disabled />
                                                </div>
                                                <div>
                                                    <label htmlFor="customRange2" className="form-label">Min and max with steps</label>
                                                    <input type="range" className="form-range" min="0" max="5" step="0.5" id="customRange2" />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <label className="col-sm-2 col-form-label">Floating labels</label>
                                            <div className="col-sm-10">
                                                <div className="form-floating mb-3">
                                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                                                    <label htmlFor="floatingInput">Email address</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                                                    <label htmlFor="floatingPassword">Password</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea" style={{ height: "100px" }}></textarea>
                                                    <label htmlFor="floatingTextarea">Comments</label>
                                                </div>
                                                {addlist.map((item) => (
                                                    <div key={item._id}>
                                                        <p>{item.count}</p>

                                                    </div>
                                                ))}
                                                <div className="form-floating mb-3">
                                                    <select className="form-select" id="floatingSelect" aria-label="Floating label select example" value={add} onChange={handleSelectChangeAdd}>
                                                        <option value="">Open this select menu</option>
                                                        {/* <option value="1">One</option>
                                                        <option value="2">Two</option>
                                                        <option value="3">Three</option> */}

                                                    </select>
                                                    <label htmlFor="floatingSelect">Works with selects</label>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row mb-5">
                                            <label className="col-sm-2 col-form-label">Input groups</label>
                                            <div className="col-sm-10">
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text" id="basic-addon1">@</span>
                                                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                                </div>

                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                                    <span className="input-group-text" id="basic-addon2">@example.com</span>
                                                </div>

                                                <label htmlFor="basic-url" className="form-label">Your vanity URL</label>
                                                <div className="input-group mb-3">
                                                    <span className="input-group-text" id="basic-addon3">https://example.com/users/</span>
                                                    <input type="text" className="form-control" id="basic-url" aria-describedby="basic-addon3" />
                                                </div>

                                                <div className="input-group mb-3">
                                                    <span className="input-group-text">$</span>
                                                    <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)" />
                                                    <span className="input-group-text">.00</span>
                                                </div>

                                                <div className="input-group mb-3">
                                                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" />
                                                    <span className="input-group-text">@</span>
                                                    <input type="text" className="form-control" placeholder="Server" aria-label="Server" />
                                                </div>

                                                <div className="input-group">
                                                    <span className="input-group-text">With textarea</span>
                                                    <textarea className="form-control" aria-label="With textarea"></textarea>
                                                </div>
                                            </div>
                                        </div>

                                    </form>
                                    {/* <!-- End General Form Elements --> */}

                                </div>
                            </div>

                        </div>
                    </div>
                </section>

            </main>
            {/* <!-- End #main --> */}
        </div>
    )
}