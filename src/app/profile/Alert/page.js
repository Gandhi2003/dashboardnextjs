"use client";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import Link from "next/link";
import { toast } from "react-toastify";
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import { deletjur, jurilistadd } from "../../../lib/helper";
import moment from 'moment';
export default function Alert() {
    const router = useRouter();


    const [filter, setFilterprotucetor] = useState([])
    const columnDefs = [
        {
            headerName: 'Id',
            field: '_id',
            checkboxSelection: true,
            width: 170,
            filter: true,
            floatingFilter: true,
            cellStyle: { textAlign: "left" },
        },

        {
            headerName: 'Name',
            field: 'full_name',
            width: 200,
            filter: true,
            floatingFilter: true,
            cellStyle: { textAlign: "left" },
            valueGetter: function (params) {
                const firstName = params.data.firstname || '';
                const lastName = params.data.lastname || '';
                return lastName ? `${firstName} ${lastName}`.trim() : "";
            }

            // callRenderer: function (params) {
            //     return (
            //         <div>
            //             <h4>{params.data.firstname}+{params.data.lastname}</h4>
            //         </div>
            //     )
            // }
        },
        {
            headerName: 'DOB',
            field: 'date_birth',
            width: 150,
            filter: true,
            floatingFilter: true,
            cellStyle: { textAlign: "left" },
            cellRenderer: function (params) {
                if(params.value!== null){
                    return moment(params.value).format("DD-MM-YYYY")
                }
            }
        },
        {
            headerName: 'Email',
            field: 'email',
            width: 150,
            filter: true,

            floatingFilter: true,

            cellStyle: { textAlign: "left" },
        },
        {
            headerName: 'Mobil_Number',
            field: 'mobile',
            width: 150,
            filter: true,

            floatingFilter: true,

            cellStyle: { textAlign: "left" },
        },
        // Add more columns as needed

        {
            headerName: 'country',
            field: 'country',
            width: 150,
            filter: true,
            floatingFilter: true,
            cellStyle: { textAlign: "left" },
        },
        {
            headerName: 'State',
            field: 'state',
            width: 150,
            filter: true,
            floatingFilter: true,
            cellStyle: { textAlign: "left" },
        },
        {
            headerName: 'Districts',
            field: 'districts',
            width: 150,
            filter: true,
            floatingFilter: true,
            cellStyle: { textAlign: "left" },
        },
        {
            headerName: 'City',
            field: 'city',
            width: 150,
            filter: true,
            floatingFilter: true,
            cellStyle: { textAlign: "left" },
        },
        {
            headerName: 'pin Code',
            field: 'pincode',
            width: 150,
            filter: true,
            floatingFilter: true,
            cellStyle: { textAlign: "left" },
        },
        {
            headerName: 'Actions',
            field: 'juid',
            width: 180,
            cellRenderer: function (params) {
                return (
                    <div className='text-center'>
                        <a onClick={(e) => handleDelete(params.data.juid)} title=" delete"
                            className="btn-sm btn-danger m-1"
                        >
                            <i class="ri-delete-bin-line lg-1"></i>
                        </a>
                        <a onClick={() => viwejury(params.data.juid)} title="View Player"
                            className="btn-sm btn-primary m-1 rounded-circle"
                        >
                            <i class=" bi-eye-fill"></i>
                        </a>
                    </div>
                );
            },
        },


    ];
    function handleDelete(data) {
        deletjur(data).then(response => {
            console.log(response)
            toast.success("Delete SuccessFuly!")
        })
    }
    function viwejury(id) {
        router.push(`/profile/plyerview/${id}`)
    }
    const [loader, setLoader] = useState(false)
    useEffect(() => {
        setLoader(true)
        jurilistadd().then(response => {
            setFilterprotucetor(response)
            console.log(response)
            setLoader(false)
        })
    }, [])
    return (
        <div>

            <main id="main" className="main">
                <section className="section">
                    {loader && (
                        <div className="dashloader-loader">
                            <span className="loader"></span>
                            <h1 className='text-center'>Loadeing...</h1>

                        </div>
                    )}
                    {
                        !loader && (
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <div className="ag-theme-alpine custom-ag-grid-container" style={{ height: 400, width: 990 }}>
                                        <AgGridReact
                                            columnDefs={columnDefs}
                                            rowData={filter}
                                        />
                                    </div>
                                </div>

                            </div>
                        )
                    }
                </section>

            </main>
        </div>
    )
}