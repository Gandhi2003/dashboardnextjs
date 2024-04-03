'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AddProducts(context) {
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
       
    }, [])
    return (
        <main id="main" className="main" >
            <section className="section">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="row">
                            <div className="col-md-12" >
                                <div className='card'>
                                    <div className='card-body'>
                                        <h5 className="card-title text-danger my-1">Products Detail</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}