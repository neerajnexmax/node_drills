import { Router } from "express";
import { sendOtpByUser } from "./auth.controller.js";
import { validateRequest } from "../../middleware/validateRequest.js";
import { otpSendValidation } from "./auth.validation.js";


const router = Router();


router.post("/", validateRequest(otpSendValidation), sendOtpByUser);



export default router;