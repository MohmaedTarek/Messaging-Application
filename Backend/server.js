import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";


import authroutes from "./routes/auth.routes.js";
import MessageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./database/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();
app.use(express.json()); //req.body, parsing incoming requests with JSON 
app.use(cookieParser());
app.use("/api/auth", authroutes);

app.use("/api/messages", MessageRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
    res.send("bootycheeks");
});


app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`the server is running on port ${PORT}`)
});