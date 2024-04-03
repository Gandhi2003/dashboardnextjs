"use client";
import Link from "next/link";
import { toast } from "react-toastify";
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import moment from 'moment';
import Image from "next/image";
import { mobListed, mobpaylist } from "../../../lib/helper";
import useRazorpay from "react-razorpay";
export default function Products() {
    const [Razorpay] = useRazorpay();
    const [moblist, setMoblist] = useState([]);
    const [check, setcheck] = useState(false);

    const [mob1, setMob1] = useState(false);
    const [mobp, setMobp] = useState([]);
    const [moshow, setMobShow] = useState(false);
    const router = useRouter();

    const handlemobile = (e) => {
        setMobp([]);
        setcheck(e.target.checked);
        mobListed().then((res) => {
            setMoblist(res);
        })
        setMobShow(true)
    }
    const handlemobprice = (e) => {
        const priceRange = e.target.value;
        const isChecked = e.target.checked;
        if (isChecked) {
            setMob1(priceRange);
            const filteredMobList = moblist.filter(mobile => {
                const mobilePrice = mobile.amount;
                switch (priceRange) {
                    case "10000-11000":
                        return mobilePrice >= 10000 && mobilePrice <= 11000;
                    case "11000-13600":
                        return mobilePrice >= 11000 && mobilePrice <= 13600;
                    case "13600-17000":
                        return mobilePrice >= 13600 && mobilePrice <= 17000;
                    case "17000-20000":
                        return mobilePrice >= 17000 && mobilePrice <= 20000;
                    default:
                        return true;
                }
            });
            if (filteredMobList.length !== 0) {
                setMobp(filteredMobList);
            } else {
                setMobp([]);
                toast.error("No Data Found");
            }
        } else {
            setMob1("");
            setMobp(moblist);
        }
    }
    function Payment(m_id, amot) {
        // e.preventDefault()
        const options = {
            key: "rzp_test_sWp9oN9wRHZxPV",
            amount: amot * 100,
            currency: "INR",
            name: `Amazing Event`,
            description: "Event Registration",
            image: "https://as1.ftcdn.net/v2/jpg/02/73/33/26/1000_F_273332625_gIuNTozcLghy4mVZwu4vyZ50IwZ3qpTM.jpg",
            // order_id: m_id,
            handler: function (response) {
                const temp = new FormData();
                temp.append("rapay", response.razorpay_payment_id);
                temp.append("pay", m_id);
                mobpaylist(temp).then(res => {
                    if (res === "success") {
                        toast.success("Payment Paid Successfully!!!");
                    }
                });
            },
            prefill: {
                name: "Piyush Garg",
                email: "gandhi2003raja@gmail.com",
                contact: "8870421839",
            },
            notes: {
                address: "Razorpay Corporate Office",
            },
            theme: {
                color: "#15881a",
            },
        };
        const rzpay = new window.Razorpay(options);
        rzpay.open();
    }
    function mobileviews(id) {
        router.push(`/profile/products/mobileview/${id}`)
    }
    useEffect(() => {
    }, [])
    return (
        <div>
            <main id="main" className="main">
                <section className="section">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card">
                                        <div className="card-header  text-center text-white product-heaeder" >
                                            <span>Products List</span><i className="fa-solid fa-cart-shopping pr-2 pl-2"></i>
                                        </div>
                                        <div className="card-body">

                                            {/* <h5 className="border-bottom">Products List:</h5> */}
                                            <from className="from-card row">
                                                <div className="col-md-12">
                                                    <div className="form-check mt-2">
                                                        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={handlemobile} checked={check} />
                                                        <label className="form-check-label" for="flexCheckDefault" >
                                                            Mobile
                                                        </label>
                                                    </div>
                                                    <div className="form-check mt-2">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                        <label className="form-check-label" for="flexCheckChecked">
                                                            Laptop
                                                        </label>
                                                    </div>
                                                    <div class="form-check mt-2">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                        <label className="form-check-label" for="flexCheckDefault">
                                                            watch
                                                        </label>
                                                    </div>
                                                    <div class="form-check mt-2">
                                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                        <label className="form-check-label" for="flexCheckChecked">
                                                            TV
                                                        </label>
                                                    </div>

                                                </div>
                                            </from>
                                            <hr />
                                        </div>
                                        <div className="card-header  text-center text-white price-heaeder" >
                                            <span>Price Range</span><i className="fa-solid fa-indian-rupee-sign pr-2 pl-2"></i>
                                        </div>
                                        <div className="card-body">

                                            {!moshow && (
                                                <from className="from-card row">
                                                    <div className="col-md-12">
                                                        <div className="form-check mt-2">
                                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                            <label className="form-check-label" for="flexCheckDefault">
                                                                ₹ 400-800
                                                            </label>
                                                        </div>
                                                        <div className="form-check mt-2">
                                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                            <label className="form-check-label" for="flexCheckChecked">
                                                                ₹  800-1200
                                                            </label>
                                                        </div>
                                                        <div className="form-check mt-2">
                                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                            <label className="form-check-label" for="flexCheckDefault">
                                                                ₹  1200-1500
                                                            </label>
                                                        </div>
                                                        <div className="form-check mt-2">
                                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                                                            <label className="form-check-label" for="flexCheckChecked">
                                                                ₹  1500-2500
                                                            </label>
                                                        </div>

                                                    </div>
                                                </from>
                                            )}
                                            {moshow && (
                                                <from className="from-card row">
                                                    <div className="col-md-12">
                                                        <div className="form-check mt-2">
                                                            <input className="form-check-input" type="checkbox" id="flexCheckDefault" value="10000-11000" onChange={handlemobprice} checked={mob1 === "10000-11000"} />
                                                            <label className="form-check-label" for="flexCheckDefault" >
                                                                ₹ 10000-11000
                                                            </label>
                                                        </div>
                                                        <div className="form-check mt-2">
                                                            <input className="form-check-input" type="checkbox" value="11000-13600" onChange={handlemobprice} checked={mob1 === "11000-13600"} />
                                                            <label className="form-check-label" for="flexCheckChecked">
                                                                ₹  11000-13600
                                                            </label>
                                                        </div>
                                                        <div className="form-check mt-2">
                                                            <input className="form-check-input" type="checkbox" value="13600-17000" id="flexCheckDefault" onChange={handlemobprice} checked={mob1 === "13600-17000"} />
                                                            <label className="form-check-label" for="flexCheckDefault">
                                                                ₹  13600-17000
                                                            </label>
                                                        </div>
                                                        <div className="form-check mt-2">
                                                            <input className="form-check-input" type="checkbox" value="17000-20000" id="flexCheckChecked" onChange={handlemobprice} checked={mob1 === "17000-20000"} />
                                                            <label className="form-check-label" for="flexCheckChecked">
                                                                ₹  17000-20000
                                                            </label>
                                                        </div>
                                                    </div>
                                                </from>
                                            )}
                                            <hr />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="row">
                                        {(mobp.length !== 0 ? mobp : moblist).map((data, i) => {
                                            return (
                                                <div className="col-md-6" key={i}>
                                                    <div className="card products">
                                                        <div className="card-head">
                                                            <span className="badge badge-danger rounded p-1"><i className="fa-solid fa-cart-shopping "></i></span>
                                                            {/* <div class="d-flex justify-content-between mt-1">
                                                                <div class="mr-2">

                                                                    <span className="badge badge-success rounded float-left mr-2">NEW</span>
                                                                </div>
                                                                <span class="badge badge-danger"><i className="fa-solid fa-cart-shopping "></i></span>
                                                            </div> */}
                                                        </div>
                                                        <div className="card-image">
                                                            <div class="d-flex justify-content-between">
                                                                <div>
                                                                    <i class="fa fa-heart text-danger"></i>
                                                                    213
                                                                </div>
                                                                <span class="badge badge-success">%30 Off</span>
                                                            </div>
                                                            <img src={data.imge} />
                                                        </div>
                                                        <div className="card-body" >
                                                            <div className="card-contant">
                                                                <div className="product-heading">
                                                                    <div className="">
                                                                        <i className="bi bi-star-fill text-warning"></i>
                                                                        <i className="bi bi-star-fill text-warning"></i>
                                                                        <i className="bi bi-star-fill text-warning"></i>
                                                                        <i className="bi bi-star"></i>
                                                                        <i className="bi bi-bxs-offer"></i>
                                                                        <p className="boredr border-bottom  bold text-white">{data.pr_moblie}</p>
                                                                    </div>
                                                                </div>
                                                                <div className="product-price">
                                                                    <a type="btn" className="btn btn-danger mb-2" onClick={() => Payment(data.order_id, data.amount)}>₹ {data.amount} </a> <a className="badge badge-primary p-2 " onClick={() => mobileviews(data.pr_mobileid)}>30% off<i class="fa fa-eye text-white ml-2  "></i></a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
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