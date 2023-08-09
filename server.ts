const express = require('express');
import { Request, Response } from 'express';

const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req: Request, res: Response) => {
    res.render('index');
});

app.get('/generate', (req: Request, res: Response) => {
    const randomString = generateRandomString();
    res.json({ randomString });
});

function generateRandomString() {
    const length = 10;
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }
    return result;
}

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
module.exports = app;
