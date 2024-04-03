import mongoose from "mongoose";
export default function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Mongodb connected successfully");
    });
    connection.on("error", (err) => {
      console.log(
        "Mongodb connected error.Please make sure Mongodb is running." + err
      );

      process.exit();
    });
  } catch (error) {
    console.log("something goes wrong!");
    console.log(error);
  }
}
