"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUrl = exports.getUrl = exports.getAllUrl = exports.createUrl = void 0;
const shorturl_1 = require("../model/shorturl"); // Import the URL model for database operations
// Controller function to create a new short URL
const createUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("The fullUrl is", req.body.fullUrl);
        const { fullUrl } = req.body;
        const urlFound = yield shorturl_1.urlModel.find({ fullUrl: req.body.fullUrl });
        if (urlFound.length > 0) {
            res.status(409); // Conflict status code
            res.send(urlFound);
        }
        else {
            const shortUrl = yield shorturl_1.urlModel.create({ fullUrl });
            res.status(201).send(shortUrl); // Created status code
        }
    }
    catch (error) {
        res.status(500).send({ message: "something went wrong" }); // Internal Server Error status code
    }
});
exports.createUrl = createUrl;
// Controller function to get all short URLs
const getAllUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shortUrl = yield shorturl_1.urlModel.find();
        if (shortUrl.length < 0) {
            res.status(401); // Unauthorized status code
            res.send({ message: "Short URL not found!" });
        }
        else {
            res.status(200).send(shortUrl); // OK status code
        }
    }
    catch (error) {
        res.status(500).send({ message: "something went wrong" }); // Internal Server Error status code
    }
});
exports.getAllUrl = getAllUrl;
// Controller function to get a specific short URL by ID
const getUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shortUrl = yield shorturl_1.urlModel.findOne({ shortUrl: req.params.id });
        if (!shortUrl) {
            res.status(404).send({ message: "Full URL not found" }); // Not Found status code
        }
        else {
            shortUrl.clicks++;
            shortUrl.save();
            res.redirect(`${shortUrl.fullUrl}`); // Redirect to the full URL
        }
    }
    catch (error) {
        res.status(500).send({ message: "something went wrong" }); // Internal Server Error status code
    }
});
exports.getUrl = getUrl;
// Controller function to delete a specific short URL by ID
const deleteUrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const shortUrl = yield shorturl_1.urlModel.findByIdAndDelete({ _id: req.params.id });
        if (shortUrl) {
            res.status(200).send({ message: "Requested URL deleted" }); // OK status code
        }
    }
    catch (error) {
        res.status(500).send({ message: "something went wrong" }); // Internal Server Error status code
    }
});
exports.deleteUrl = deleteUrl;
