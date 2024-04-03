"use client"
import { useRouter } from "next/navigation";
export default function Home() {
    const router=useRouter();
    function Loginpages(e){
        e.preventDefault();
        router.push("/Login")
    }
    function Register(e){
        e.preventDefault();
        router.push("/RegisreterForm")
    }
    return (
        <div className="container my-5  ">
            <div className="row">
                <div className="col-12  boreder border-5  border-dark bg-danger  p-5 ">
                    <h1 className="text-center text-success">Welcome</h1>
                    <button className="btn btn-success" onClick={Loginpages}>Login</button>
                    <button className="btn btn-success" onClick={Register}>Register </button>
                </div>

            </div>


        </div>
    )
}