// require('dotenv').config({path: './env'})
import dotenv from "dotenv"
dotenv.config({path: './env'});

import { app } from "./app.js";
import connectDB from "./db/index.js"

const port = process.env.PORT || 8000

connectDB().then(() => {
    // app.on("error", (error) => {
    //     console.log(`Error: ${error}`);
    // })
    app.listen(port, () => {
        console.log(`Server is running at port ${port}`);
    });
}).catch((err) => {
    console.error(`MongoDB connection failed ${err}`);
})
