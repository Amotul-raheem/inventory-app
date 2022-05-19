import express from "express"
import {mongodbConnection} from "./config/MongoDBConnection.js";
import dotenv from "dotenv";
import bodyParser from "body-parser";

mongodbConnection()
dotenv.config()

const app = express();
const port = process.env.PORT

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

app.get('/', (req, res) => {
    res.send('Hello World!')
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});