import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUserslelsidebar } from "../controllers/user.controllers.js";

const router = express.Router();

router.get('/', protectRoute, getUserslelsidebar);


export default router;