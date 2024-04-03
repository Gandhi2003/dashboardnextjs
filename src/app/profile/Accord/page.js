"use client"
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import style from "../../profile/Accord/acc.modules.css";
import axios from "axios";
import toast from "react-toastify";
import React, { useEffect, useState } from 'react';
import { useRouter } from "next/navigation";
import { AgGridReact } from 'ag-grid-react';
import { Col, ModalHeader, Row } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { ModalBody } from 'react-bootstrap';
import { ModalFooter } from 'react-bootstrap';
import Image from 'next/image';
import { addjury, deletjury, getJury } from '../../../lib/helper';

const AgGridTable = () => {

  const [show, setShow] = useState(false);
  const [name, setUsername] = useState("");
  const [file, setFile] = useState(null);

  const [filter, setFilterprotucetor] = useState([])
  const columnDefs = [
    {
      headerName: 'Id',
      field: '_id',
      checkboxSelection: true,
      width: 198,
      filter: true,
      floatingFilter: true,
      cellStyle: { textAlign: "left" },
    },
    {

      headerName: "Photo",
      width: 150,
      field: "imagePath",
      filter: false,
      // cellRenderer: function (params) {
      //   // console.log(params.data.)
      //   return (
      //     <img
      //       style={{ width: "40px", height: "40px" }}
      //       src={params.data.imagePath}
      //       alt='image'
      //     />

      //   );

      // },

      // valueGetter: function (params) {

      //   return (
      //     <img
      //       style={{ width: "40px", height: "40px" }}
      //       src={params.data.imagePath}
      //       alt='image'
      //     />
      //   )
      // }

    },
    {
      headerName: 'User_Name',
      field: 'username',
      width: 198,
      filter: true,
      floatingFilter: true,
      cellStyle: { textAlign: "left" },
    },
    // {
    //   headerName: 'Email',
    //   field: 'email',
    //   width: 198,
    //   filter: true,

    //   floatingFilter: true,

    //   cellStyle: { textAlign: "left" },
    // },
    // {
    //   headerName: 'Mobil_Number',
    //   field: 'mobile',
    //   width: 198,
    //   filter: true,

    //   floatingFilter: true,

    //   cellStyle: { textAlign: "left" },
    // },
    // Add more columns as needed
    {
      headerName: 'Actions',
      field: '_id',
      width: 180,
      cellRenderer: function (params, _id) {
        return (
          <div className='text-center'>
            <a onClick={() => handleDelete(params.data._id)} title=" delete"
              className="btn-sm btn-danger m-1"
            >
              <i class="ri-delete-bin-line lg-1"></i>
            </a>
            <a onClick={() => viwejury(params.data._id)} title="View Player"
              className="btn-sm btn-primary m-1 rounded-circle"
            >
              <i class=" bi-eye-fill"></i>
            </a>
            <a onClick={() => jureited()} title='jury eite' className='btn-sm btn-primary m-1 rounded-circle'> </a>
            <i className="lucide-edit"></i>
          </div>
        );
      },
    },

  ];

  // function handleDelete (did){
  //   const temp=new FormData()
  //   temp.append("_id",did)
  //   deletjury(temp).then(response=>{
  //     console.log(response)
  //   })
  // }
  function viwejury(id) {
    router.push(`/profile/plyerview/${id}`)
  }
  function jureited() {

  }

  function handleDelete(id) {
    // const temp=new FormData()
    // temp.append("_id",did)
    deletjury(id).then(response => {
      console.log(response)
    })
  }
  const handleshow = () => {
    setShow(true)
  }
  const handleclose = () => {
    setShow(false)
  }
  const router = useRouter();

  // const handleFileChange = (e) => {
  //   const selectfile=e.target.file[0]
  //   setFile(selectfile);
  // };
  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  }
  // function handleUserChange(e) {
  //   setUsername(e.target.value)
  //   console.log(e.target.value)
  // }
  const [erro, setErro] = useState("")
  function Addsubmit(e) {
    e.preventDefault()
    setErro("")
    if (name !== "") {
      const formData = new FormData()
      formData.append("username", name)
      addjury(formData).then(response => {
        console.log(response)
        router.push("/profile/Accord")
        handleclose()
      })
    } else {
      setErro("Enter User Name")
    }


  }
  const [loader, setLoader] = useState(false)
  useEffect(() => {
    setLoader(true)
    getJury().then(response => {
      console.log(response)
      if (response.length > 0) {
        setFilterprotucetor(response)
        setLoader(false)
      } else {
        router.push("/Login")
        setLoader(false)
      }
    })
  }, [])
  return (
    <div>
      <main id="main" className="main">
        {loader && (
          <span class="loader">

          </span>
        )
        }
        <section className="section">
          {
            !loader && (
              <div className="row">
                <div className="col-lg-6">
                  <div className="ag-theme-alpine custom-ag-grid-container" style={{ height: 400, width: 990 }}>
                    <div className="add">
                      <button className="btn btn-primary" type="button" onClick={handleshow}>Add User</button>
                    </div>
                    <Modal show={show} size="lg" onHide={handleclose}>
                      <ModalHeader>
                        <h4> Class Details</h4>
                      </ModalHeader>
                      <ModalBody>
                        <Row className="row-sm mx-0">
                          <Col lg={12} md={12}>
                            <div className="form-group">
                              <label className="mb-2">
                                Class Name <span className="errortext"> *</span>
                              </label>
                              <input
                                type="text"
                                placeholder="Class Name"
                                className="form-control"
                                value={name}
                                // onChange={handleUserChange}
                                onChange={(e) => setUsername(e.target.value)}
                              />
                            </div>
                          </Col>
                          <Col lg={12} md={12}>
                            <div className="col-md-8">

                              <label htmlFor="dob">

                                Photograph : <span>(Maximum size 900KB)</span>

                              </label>

                              <div className="mt-4">
                                <input
                                  type="file"

                                  name="file"

                                  id="file"

                                  accept="image.jpg"
                                  onChange={handleFileChange}

                                // onChange={(e) => setImage(e.target.files[0])}



                                />

                              </div>

                            </div>

                          </Col>



                        </Row>

                      </ModalBody>

                      <ModalFooter>
                        {erro !== "" && <p className="text-danger">{erro}</p>}

                        <a className="btn btn-danger" onClick={handleclose}>
                          Close                        </a>
                        <a className="btn btn-success">
                          Update
                        </a>
                        <a className="btn btn-success" onClick={Addsubmit}>
                          Add
                        </a>


                      </ModalFooter>

                    </Modal>

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





  );
};

export default AgGridTable;
