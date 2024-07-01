import express from "express";                                                       // Import Express framework for building web applications
import { createUrl, deleteUrl, getAllUrl, getUrl } from "../controller/shorturl";   // Import controller functions for URL operations

const router = express.Router();  // Create a new router instance

router.post("/shorturl", createUrl);          // Define a POST route for creating a short URL
router.get("/shorturl", getAllUrl);          // Define a GET route for retrieving all short URLs
router.get("/shorturl/:id", getUrl);        // Define a GET route for retrieving a specific short URL by ID
router.delete("/shorturl/:id", deleteUrl); // Define a DELETE route for deleting a specific short URL by ID


export default router;// Export the router to be used in other parts of the application
