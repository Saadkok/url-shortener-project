"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.urlModel = void 0;
const mongoose_1 = __importDefault(require("mongoose")); // Import Mongoose for MongoDB operations
const nanoid_1 = require("nanoid"); // Import nanoid for generating unique IDs
// Define the schema for short URLs
const shortUrlSchema = new mongoose_1.default.Schema({
    fullUrl: {
        type: String,
        required: true, // fullUrl is a required field
    },
    shortUrl: {
        type: String,
        required: true, // shortUrl is a required field
        default: () => (0, nanoid_1.nanoid)().substring(0, 10), // Generate a unique short URL using nanoid
    },
    clicks: {
        type: Number,
        default: 0, // Initialize the number of clicks to 0
    }
}, {
    timestamps: true // Automatically add createdAt and updatedAt timestamps
});
// Create a model from the schema and export it
exports.urlModel = mongoose_1.default.model("shortUrl", shortUrlSchema);
