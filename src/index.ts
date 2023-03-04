import express from "express";

// Create an express app
const app = express();

// Define port number
const port = 3000;

// Define three endpoints with get requests and dummy text responses

app.get("/endpoint1", (_, res) => {
    res.send("This is endpoint 1");
});

app.get("/endpoint2", (_, res) => {
    res.send("This is endpoint 2");
});

app.get("/endpoint3", (_, res) => {
    res.send("This is endpoint 3");
});

// Listen on the port
const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

module.exports = {
    app,
    server,
};
