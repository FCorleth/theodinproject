import { Router } from "express";
import { getAuthorId } from "../controllers/authorController.js";

const authorRouter = Router();

authorRouter.get("/", (req, res) => {
  res.send("All authors");
});

authorRouter.get("/:authorId", getAuthorId);

export default authorRouter;
