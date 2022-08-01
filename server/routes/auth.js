import express from "express";
import { signin, signup } from "../controllers/auth.js"

const router = express.Router();

//Create User
router.post("/signup", signup);

//Sıgn In
router.post("/signin", signin);

//Google Auth
router.post("/google",);

export default router;