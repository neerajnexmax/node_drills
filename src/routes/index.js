import { Router } from "express";
import taxonomyRoutes from "../modules/taxonomy/taxonomy.routes.js";

const router = Router();

//taxonomy routes.
router.use("/taxonomy", taxonomyRoutes);






export default router;