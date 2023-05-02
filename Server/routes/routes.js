import express from "express";
import { userSignin, userSignup, home } from "../controller/user.controller.js";

const router = express.Router();
// User registration route
router.post("/signup", userSignup);

// user log in  route
router.post("/signin", userSignin);



router.get("/home", home)



export default router