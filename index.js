import express from "express";
import authorRouter from "./src/routes/authorRouter.js";
import bookRouter from "./src/routes/bookRouter.js";
import indexRouter from "./src/routes/indexRouter.js";

const app = express();
const PORT = 3000;

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/", indexRouter);

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Server running on port ${PORT}`);
});
