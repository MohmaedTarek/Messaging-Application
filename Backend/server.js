import express from "express";
import dotenv from "dotenv";
import authroutes from "./routes/auth.routes.js";
import connectToMongoDB from "./database/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json()); //req.body, parsing incoming requests with JSON 

app.use("/api/auth", authroutes);

app.get("/", (req, res) => {
    res.send("bootycheeks");
});


app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`the server is running on port ${PORT}`)
});