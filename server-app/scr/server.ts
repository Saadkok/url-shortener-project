import express from "express";                    // Import Express framework for building web applications
import dotenv from "dotenv";                     // Import dotenv to load environment variables from a .env file
import cors from "cors";                        // Import CORS to enable Cross-Origin Resource Sharing
import connectDb from "./config/db_config";    // Import the database connection function
import shortUrl from "./routes/shorturl";     // Import the router for short URL operations


dotenv.config(); // Load environment variables from .env file
connectDb();    // Connect to the MongoDB database

const port = process.env.PORT || 5001;    // Define the port number to run the server on
const app = express();                   // Initialize an Express application

app.use(express.json());                              // Middleware to parse incoming JSON requests
app.use(express.urlencoded({ extended: true }));     // Middleware to parse incoming URL-encoded requests

// Enable CORS for requests from a specific origin (http://localhost:3000) and allow credentials
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true,
}));


app.use("/api/", shortUrl); // Use the shortUrl router for handling routes starting with /api/

// Define a simple route for the root URL that sends a greeting message
app.get("/", (req, res) => {
    res.send("Hey How You Are There Saad ...!");
});

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server started successfully on port: ${port}`);
});
