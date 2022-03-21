import { Router } from "express";
import { required } from "../middleware/login";

import { getAllCategories, postCategory } from "@controllers/categories";

const categoryRouter = Router();

categoryRouter.get("/", getAllCategories);
categoryRouter.post("/", required, postCategory);

export default categoryRouter;
