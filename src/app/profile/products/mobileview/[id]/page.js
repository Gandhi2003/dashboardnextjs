'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { moblieview } from "../../../../../lib/helper";
export default function MoblieList(context) {
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
        moblieview(id).then((res) => {
            setName(res);
            console.log(res)
        })
    }, [])
    return (
        <main id="main" className="main" >
            <section className="section">
                <div className="row">
                    {tname.map((data, i) => {
                        return (
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
                                <div className="row">
                                    <div className="col-md-12" key={i}>
                                        <div className="card">
                                            <div className="card-header">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="product-img">
                                                            <img src={data.imge} alt="Product" width={400} height={400} />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="product-details">
                                                            <div className="prt_01 mb-1 d-flex align-items-center justify-content-between">
                                                                <div className="flex-1"><span className="text-muted ft-medium">Up to 30% Off</span></div>
                                                                <div className=""><span className="bg-danger text-light rounded py-1 px-2">Up to 30% Off</span></div>
                                                            </div>
                                                            <div className="product-title">
                                                                <h2 className="ft-bold mb-1">Ultimate Mobiles {""} {data.pr_moblie} </h2>
                                                                <div className="d-flex  product-price">
                                                                    <ul className="list-inline mb-3 mr-2">
                                                                        <li className="list-inline-item mb-0">
                                                                            <i className="fa fa-star text-warning"></i>
                                                                        </li>
                                                                        <li className="list-inline-item mb-0">
                                                                            <i className="fa fa-star text-warning"></i>
                                                                        </li>
                                                                        <li className="list-inline-item mb-0">
                                                                            <i className="fa fa-star text-warning"></i>
                                                                        </li>
                                                                        <li className="list-inline-item mb-0">
                                                                            <i className="fa fa-star text-warning"></i>
                                                                        </li>
                                                                        <li className="list-inline-item mb-0">
                                                                            <i className="fa fa-star-half-o text-warning"></i>
                                                                        </li>
                                                                    </ul>
                                                                    <span className="small">(412 Reviews)</span>
                                                                </div>
                                                                <p>{data.description}</p>
                                                                <div className="elis_rty"><span className="ft-medium text-muted text-decoration-line-through fs-md mr-2">$199</span><span className="ft-bold theme-cl fs-lg mr-2">$110</span><span className="ft-regular text-light bg-success py-1 px-2 fs-sm rounded">In Stock</span></div>
                                                            </div>
                                                            <div className="product-description">
                                                                <p>Features:</p>
                                                                <ul className="list-unstyled">
                                                                    <li><i className="fa fa-check mr-2 text-success"></i>It is a long established fact a reader  will be distracted.</li>
                                                                    <li><i className="fa fa-check mr-2 text-success"></i>Contrary to popular belief, Lorem Ipsum is  not text.</li>
                                                                    <li><i className="fa fa-check mr-2 text-success"></i>There are many variations of passages of  Lorem.</li>
                                                                </ul>
                                                            </div>
                                                            <div className="product-footer">
                                                                <div className="d-flex flex-wrap">
                                                                    <div className="mt-2 mt-sm-0  me-1">
                                                                        <div className="input-group">
                                                                            <input type="number" className="form-control" placeholder="1" min="1" max="5" />
                                                                            <span className="input-group-text"><i className="fa fa-sort"></i></span>
                                                                        </div>
                                                                    </div>
                                                                    <button className="btn btn-primary mx-1 mt-2  mt-sm-0"><i className="fa fa-heart me-1"></i> Addto Wishlist</button>
                                                                    <button className="btn btn-primary mx-1 mt-2 mt-sm-0 w-sm-100"><i className="fa fa-shopping-cart me-1"></i> Add to Cart</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </main>
    )
}