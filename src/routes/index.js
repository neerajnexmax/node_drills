import { Router } from "express";
import taxonomyRoutes from "../modules/taxonomy/taxonomy.routes.js";
import sendOtpRoutes from "../modules/auth/auth.routes.js";

const router = Router();

//taxonomy routes.
router.use("/taxonomy", taxonomyRoutes);

//send mobile by number.
router.use("/send-otp", sendOtpRoutes);



export default router;