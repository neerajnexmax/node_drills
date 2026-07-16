import { Router } from "express";
import { getTaxonomyList } from "./taxonomy.controller.js";

const router = Router();

//taxonomy routes.
router.get("/", getTaxonomyList);






export default router;