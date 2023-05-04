import express from "express";
import { Signin, Signup, profile } from "../controller/auth.js";
import { requireSignin, adminMiddleware } from "../controller/middleware.js";
import { adminSignin, adminSignup } from "../controller/admin/auth.js";
import { addCategory, getCategory } from "../controller/category.js";
import { validateSignupRequest, isRequestValidated, validateSigninRequest } from "../src/validators/Validator.js";

const router = express.Router();

// User registration route
router.post("/signup", validateSignupRequest, isRequestValidated, Signup);

// user log in  route
router.post("/signin", validateSigninRequest, isRequestValidated, Signin);

// admin register
router.post("/admin/signup", validateSignupRequest, isRequestValidated, adminSignup);

// admin log in  route
router.post("/admin/signin", validateSigninRequest, isRequestValidated, adminSignin);

router.post("/category/create", addCategory);
// requireSignin, adminMiddleware,
router.get("/category/getcategory", getCategory);


router.post("/profile", requireSignin, profile)



export default router