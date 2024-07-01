import mongoose from "mongoose";

const connectDb = async () => {
    try {
        const connect = await mongoose.connect(process.env.connection_string as string);
        console.log("Database connected", connect.connection.host, connect.connection.name);
    } catch (error) {
        console.error("Database connection error:", error);
        process.exit(1); // Exit the process with a failure code
    }
};

export default connectDb;
