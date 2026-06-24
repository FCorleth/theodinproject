import { Router } from "express";

const indexRouter = Router();

indexRouter.get("/", (req, res) => {
  res.send("All index");
});

indexRouter.get("/:indexId", (req, res) => {
  const { indexId } = req.params;

  res.send(`Index ID ${indexId}`);
});

export default indexRouter;
