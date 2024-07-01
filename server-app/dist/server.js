"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // Import Express framework for building web applications
const dotenv_1 = __importDefault(require("dotenv")); // Import dotenv to load environment variables from a .env file
const cors_1 = __importDefault(require("cors")); // Import CORS to enable Cross-Origin Resource Sharing
const db_config_1 = __importDefault(require("./config/db_config")); // Import the database connection function
const shorturl_1 = __importDefault(require("./routes/shorturl")); // Import the router for short URL operations
dotenv_1.default.config(); // Load environment variables from .env file
(0, db_config_1.default)(); // Connect to the MongoDB database
const port = process.env.PORT || 5001; // Define the port number to run the server on
const app = (0, express_1.default)(); // Initialize an Express application
app.use(express_1.default.json()); // Middleware to parse incoming JSON requests
app.use(express_1.default.urlencoded({ extended: true })); // Middleware to parse incoming URL-encoded requests
// Enable CORS for requests from a specific origin (http://localhost:3000) and allow credentials
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    credentials: true,
}));
app.use("/api/", shorturl_1.default); // Use the shortUrl router for handling routes starting with /api/
// Define a simple route for the root URL that sends a greeting message
app.get("/", (req, res) => {
    res.send("Hey How You Are There Saad ...!");
});
// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Server started successfully on port: ${port}`);
});
