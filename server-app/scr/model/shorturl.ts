
import mongoose from "mongoose";  // Import Mongoose for MongoDB operations
import { nanoid } from "nanoid";  // Import nanoid for generating unique IDs

// Define the schema for short URLs
const shortUrlSchema = new mongoose.Schema({
    fullUrl: {
        type: String,
        required: true,  // fullUrl is a required field
    },
    shortUrl: {
        type: String,
        required: true,  // shortUrl is a required field
        default: () => nanoid().substring(0, 10),  // Generate a unique short URL using nanoid
    },
    clicks: {
        type: Number,
        default: 0,  // Initialize the number of clicks to 0
    }
}, {
    timestamps: true  // Automatically add createdAt and updatedAt timestamps
});

// Create a model from the schema and export it
export const urlModel = mongoose.model("shortUrl", shortUrlSchema);
