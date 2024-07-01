
import express from "express";                 // Import Express framework for handling requests and responses
import { urlModel } from "../model/shorturl";  // Import the URL model for database operations

// Controller function to create a new short URL
export const createUrl = async (req: express.Request, res: express.Response) => {
    try {
        console.log("The fullUrl is", req.body.fullUrl);
        const { fullUrl } = req.body;
        const urlFound = await urlModel.find({ fullUrl: req.body.fullUrl });

        if (urlFound.length > 0) {
            res.status(409);  // Conflict status code
            res.send(urlFound);
        } else {
            const shortUrl = await urlModel.create({ fullUrl });
            res.status(201).send(shortUrl);  // Created status code
        }
    } catch (error) {
        res.status(500).send({ message: "something went wrong" });  // Internal Server Error status code
    }
}

// Controller function to get all short URLs
export const getAllUrl = async (req: express.Request, res: express.Response) => {
    try {
        const shortUrl = await urlModel.find().sort({creteAt: 1 });
        if (shortUrl.length < 0) {
            res.status(401);  // Unauthorized status code
            res.send({ message: "Short URL not found!" });
        } else {
            res.status(200).send(shortUrl);  // OK status code
        }
    } catch (error) {
        res.status(500).send({ message: "something went wrong" });  // Internal Server Error status code
    }}
// Controller function to get a specific short URL by ID
export const getUrl = async (req: express.Request, res: express.Response) => {
    try {
        const shortUrl = await urlModel.findOne({ shortUrl: req.params.id });
        if (!shortUrl) {
            res.status(404).send({ message: "Full URL not found" });  // Not Found status code
        } else {
            shortUrl.clicks++;
            shortUrl.save();
            res.redirect(`${shortUrl.fullUrl}`);  // Redirect to the full URL
        }
    } catch (error) {
        res.status(500).send({ message: "something went wrong" });  // Internal Server Error status code
    }}

// Controller function to delete a specific short URL by ID
export const deleteUrl = async (req: express.Request, res: express.Response) => {
    try {
        const shortUrl = await urlModel.findByIdAndDelete({ _id: req.params.id });
        if (shortUrl) {
            res.status(200).send({ message: "Requested URL deleted" });  // OK status code
        }
    } catch (error) {
        res.status(500).send({ message: "something went wrong" });  // Internal Server Error status code
    }
}
