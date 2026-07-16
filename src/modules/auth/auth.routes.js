import { Router } from "express";
import { sendOtpByUser } from "./auth.controller.js";


const router = Router();


router.post("/", sendOtpByUser);



export default router;