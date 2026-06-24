import { Router } from "express";
import { getBookId } from "../controllers/bookController.js";

const bookRouter = Router();

bookRouter.get("/", (req, res) => {
  res.send("All books");
});

bookRouter.get("/:bookId", getBookId);

export default bookRouter;
