import express from "express"
import users from "./users.js"
import "dotenv/config"

const app = express();

app.get("/", (req, res) => {
    console.log(`${req.method} ${req.url}`);
    res.send("server is ready");
});

app.get("/api/users", (req, res) => {
    console.log(`${req.method} ${req.url}`);
    res.json(users);
});

console.log(process.env.PORT)
const port = process.env.PORT || "3000"

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})