"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // Import Express framework for building web applications
const shorturl_1 = require("../controller/shorturl"); // Import controller functions for URL operations
const router = express_1.default.Router(); // Create a new router instance
router.post("/shorturl", shorturl_1.createUrl); // Define a POST route for creating a short URL
router.get("/shorturl", shorturl_1.getAllUrl); // Define a GET route for retrieving all short URLs
router.get("/shorturl/:id", shorturl_1.getUrl); // Define a GET route for retrieving a specific short URL by ID
router.delete("/shorturl/:id", shorturl_1.deleteUrl); // Define a DELETE route for deleting a specific short URL by ID
exports.default = router; // Export the router to be used in other parts of the application
