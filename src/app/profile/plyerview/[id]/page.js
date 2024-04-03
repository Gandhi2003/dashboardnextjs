
"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { editejury, updatedjury, viewlist } from "../../../../lib/helper";
import { useParams } from "next/navigation";
import { toast } from "react-toastify";

export default function Playerview(context) {
    const [tname, setName] = useState([]);
    const [ftname, setFtname] = useState("");
    const [age, setAge] = useState("");
    const [catname, setCtname] = useState("");
    const [uid, setUid] = useState("");
    const [toname, setTname] = useState("");
    const router = useRouter();
    const { params } = context;
    const { id } = params;
    useEffect(() => {
        viewlist(id).then(response => {
            if (response.length > 0) {
                setName(response)
                // for (let i = 0; i < response.length; i++) {
                //     console.log(response[i])
                //     setName(response[i].full_name)
                // }
            }
        })
        editejury(id).then(response => {
            if (response.length > 0) {
                console.log(response)
                setTname(response[0].t_name)
                setFtname(response[0].firstname)
                setAge(response[0].age)
                setCtname(response[0].Categry)
                setUid(response[0].UserID)

            }
        })
    }, [])
   
    function updatejury(e) {
        e.preventDefault()
        const uptm = new FormData();
        uptm.append("firstname", ftname);
        uptm.append("age", age);
        uptm.append("Categry", catname);
        uptm.append("UserID", uid);

        updatedjury(id,uptm).then(response => {
            toast.success("Update SuccessFuly!")
        })


    }
    function Back() {
        router.push('/profile/Alert')
    }
    return (
        <main id="main" className="main">
            <section className="section">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <button className="btn btn-primary" onClick={Back} style={{ float: "right" }}>
                            Back
                            <i className="iconpark-back-o"></i>

                        </button>
                    </div>

                </div>
                <div className="row">
                    {tname.map((data, i) => {
                        return (
                            <div className="col-md-4" key={i}>
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-12 col-md-12 bg-success text-white">
                                                <h5>UID      :{data.u_id}</h5>
                                                <h5>Full Name:{data.full_name}</h5>
                                                <h5>Age      :{data.age}</h5>
                                                <h5>City     :{data.city}</h5>
                                                <h5>state    :{data.s_id}</h5>
                                                <h5>Pincode  :{data.po_id}</h5>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className="row">
                    <div className="col-lg-12 col-sm-12 col-md-12">
                        <div className="card card-form">
                            <div className="card-body">
                                <div className="card-form">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group row my-4 ">
                                                <label className="col-md-4 col-form-lable fw-bold">Full Name :</label>
                                                <div className="col-md-8">
                                                    <input type="text" className="form-control border-success " value={ftname} placeholder={ftname} onChange={(e) => setFtname(e.target.value)} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group row my-4 ">
                                                <label className="col-md-4 col-form-lable fw-bold">UID :</label>
                                                <div className="col-md-8">
                                                    <input type="text" className="form-control border-success" value={uid} placeholder={uid} onChange={(e) => setUid(e.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group row my-4 ">
                                                <label className="col-md-4 col-form-lable fw-bold">Age :</label>
                                                <div className="col-md-8">
                                                    <input type="text" className="form-control border-success" value={age} placeholder={age} onChange={(e) => setAge(e.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group row my-4 ">
                                                <label className="col-md-4 col-form-lable fw-bold">Category :</label>
                                                <div className="col-md-8">
                                                    <input type="text" className="form-control border-success" value={catname} placeholder={catname} onChange={(e) => setCtname(e.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-md-12">
                                            <a type="btn" className="btn btn-success" style={{ float: "right" }} onClick={updatejury}>UpdateJury</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>
            <div className='row'>
                <div className='col-md-6'>
                    <div className="card-box">
                        <div className="box">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <div className="content">
                                <h2 className="text-danger border border-success fw-bold">{toname} </h2>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="form-group row my-1 ">
                                            <label className="col-md-6  col-form-lable fw-bold">Full Name :{''}</label>
                                            <label className="col-md-6 col-form-lable fw-bold">{ftname}</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group row my-1 ">
                                            <label className="col-md-6 col-form-lable fw-bold">UserID : </label>
                                            <label className="col-md-6 col-form-lable fw-bold">{uid}</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group row my-1 ">
                                            <label className="col-md-6 col-form-lable fw-bold">Age :</label>
                                            <label className="col-md-6 col-form-lable fw-bold"> {age}</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="form-group row my-1 ">
                                            <label className="col-md-6 col-form-lable fw-bold">Category : </label>
                                            <label className="col-md-6 col-form-lable fw-bold">{catname}</label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>


        </main>
    )
}
