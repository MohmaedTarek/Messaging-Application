import express from "express";
import dotenv from "dotenv";
import authroutes from "./routes/auth.routes.js";

const app = express();
dotenv.config();


const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("bootycheeks");
});

app.use("/api/auth", authroutes);


app.listen(PORT, () => console.log(`the server is running on port ${PORT}`));