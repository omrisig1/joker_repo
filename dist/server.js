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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    res.render('index');
});
app.get('/generate', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield getActivity();
        const activity = result["activity"]; // Use a different variable name here
        res.json({ activity }); // Use the res.json() method to send the activity as JSON
    }
    catch (err) {
        res.json({ error: err }); // Send the error as JSON
    }
}));
function getActivity() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield axios_1.default.get('https://www.boredapi.com/api/activity');
            return response.data;
        }
        catch (error) {
            console.error('Error fetching activity:', error);
            throw error;
        }
    });
}
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
module.exports = app;
