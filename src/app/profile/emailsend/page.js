"use client";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import Link from "next/link";
// import { toast } from "react-hot-toast";
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import { deletjur, emailjury, jurilistadd, whatsappjury } from "../../../lib/helper";
import Image from 'next/image';
import { Col, ModalHeader, Row } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { ModalBody } from 'react-bootstrap';
import { ModalFooter } from 'react-bootstrap';

import {
    EmailIcon,
    EmailShareButton,
    TwitterShareButton,
    TelegramShareButton,
    TelegramIcon,
    TwitterIcon,
    WhatsappIcon,
    FacebookShareButton,
    FacebookIcon,
    WhatsappShareButton,
} from "react-share";
import useRazorpay from 'react-razorpay';
export default function EmailList() {
    const router = useRouter();
    const [Razorpay] = useRazorpay();

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')

    const onSumbite = (e) => {
        e.preventDefault()
        // if (!name == "" && !email == "") {
        //     const tmp = new FormData()
        //     tmp.append("name", name)
        //     tmp.append("mobile", email)
        //     // tmp.append("firstname", email)
        //     // tmp.append("email", email)

        //     // emailjury(tmp).then(response => {
        //     //     if (response == true) {
        //     //         toast("Please Select Sports")
        //     //     }
        //     // })
        //     whatsappjury(tmp).then(response => {
        //         console.log(response)
        //     })
        // }
    }



    function Payment() {
        // e.preventDefault()

        const options = {
            key: "rzp_test_sWp9oN9wRHZxPV",
            amount: "300000",
            currency: "INR",
            name: `Amazing Event`,
            description: "Event Registration",
            image: "https://as1.ftcdn.net/v2/jpg/02/73/33/26/1000_F_273332625_gIuNTozcLghy4mVZwu4vyZ50IwZ3qpTM.jpg",
            // order_id: order.id,
            handler: (res) => {
                console.log(res);
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

    const [show, setShow] = useState(false);
    const handleclose = () => {
        setShow(false)
    }
    const handleshow = () => {
        setShow(true)
    }

    const shareUrl = 'https://example.com';
    const title = "https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_960_720.jpg"
    // const imageUrl = 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_960_720.jpg';

    // const shareUrl = 'https://your-website-url.com';
    // const title = 'Your Title';
    // const shareUrl = 'https://your-website-url.com';
    // const imageUrl = 'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_960_720.jpg';
    return (
        <div>
            <main id="main" className="main">
                <section className="section">
                    <form >
                        <label>Titile</label>
                        <input type='text ' value={name} onChange={(e) => setName(e.target.value)}></input>
                        <label>msg</label>
                        <input type='mobile' value={email} onChange={(e) => setEmail(e.target.value)} ></input>
                        <button onClick={onSumbite}>Submit</button>
                    </form>
                </section>
                <div className='row'>
                    <div className='col-md-6'>
                        <div className='card '>
                            <div className='card-body container '>
                                <h1>raja</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className="card-box">
                            <div className="box">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <div className="content">
                                    <h2>My animated Border </h2>
                                    <p><a>All our modules are designed to play nicely with responsive of course. At the end of the day it comes down to the theme you use - our code doesn't get in your way.</a></p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='row '>
                    <div className='col-md-12'>
                        <Image
                            src={require('../../Upload/11.jpeg')}
                            width="40"
                            height="30"
                        />
                    </div>
                    <div className="add">
                        <button className="btn btn-primary" type="button" onClick={handleshow}>share</button>
                    </div>
                    <Modal show={show} size="sm" onHide={handleclose}>
                        <ModalHeader>
                            <h4> share Details</h4>
                        </ModalHeader>
                        <ModalBody>
                            <Row className="row-sm mx-0">
                                <Col lg={12} md={12}>
                                    <div className='text-center d-flex'>
                                        <div className='m-1'>

                                            <WhatsappShareButton
                                                url={shareUrl}
                                                title={title}
                                            >
                                                <WhatsappIcon size={44} round={true} />
                                            </WhatsappShareButton>
                                        </div>
                                        <div className='m-1'>
                                            <FacebookShareButton url={shareUrl} quote={title} >
                                                <FacebookIcon size={44}></FacebookIcon>
                                            </FacebookShareButton>
                                        </div>

                                        <div className='m-1'>
                                            <TwitterShareButton url={shareUrl} title={title} >
                                                <TwitterIcon size={44}></TwitterIcon>
                                            </TwitterShareButton>
                                        </div>
                                        <div className='m-1'>
                                            <TelegramShareButton url={shareUrl} title={title} >
                                                <TelegramIcon size={44}></TelegramIcon>
                                            </TelegramShareButton>
                                        </div>
                                        <div className='m-1'>
                                            < EmailShareButton url={shareUrl} title={title} >
                                                <EmailIcon size={44}></EmailIcon>
                                            </ EmailShareButton>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </ModalBody>
                        <ModalFooter>
                            <a className="btn btn-danger" onClick={handleclose}>
                                Close
                            </a>
                        </ModalFooter>
                    </Modal>

                    <div className='text-center'>
                        <a type='btn' className='btn btn-success' onClick={Payment}> Payment</a>

                    </div>
                </div>
            </main>
        </div>
    )
}