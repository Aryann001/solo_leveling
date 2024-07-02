import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      dbName: "soloLeveling",
    });

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("DB is Connected");
    });

    connection.on("error", (err) => {
      console.log(err);
      process.exit();
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default connectDB;
