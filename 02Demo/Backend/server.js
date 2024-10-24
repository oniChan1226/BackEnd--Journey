import express from "express";

const app = express();

app.get('/', (req, res) => {
    res.send("Server is ready");
})

// We can use JSON formatter to read json response
app.get('/api/users', (req, res) => {
    const users = [
        {
            id: 1,
            name: "John",
        },
        {
            id: 2,
            name: "Doe",
        },
        {
            id: 3,
            name: "Alex",
        },
        {
            id: 4,
            name: "Laura",
        },
    ]
    res.json(users);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server at https://localhost:${port}`);
});