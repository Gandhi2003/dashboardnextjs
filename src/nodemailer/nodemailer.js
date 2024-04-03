import nodemailer from "nodemailer";
// const email=process.env.SMTP_EMAIL;
// const pass=process.env.SMTP_PASSWORD;

// export const transporter=nodemailer.createTransport(
//     {
//         service:"gmail",
//         athu:{
//             user:SMTP_EMAIL,
//             pass:SMTP_PASSWORD,
//         }
//     }
// )

const Emailcontact = () => {
    return (
        <div className="emails">
            <div className="contaner">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center text-success">Successfully Registertions !!! </h1>

                    </div>

                </div>

            </div>

        </div>
    )
}
export default Emailcontact;