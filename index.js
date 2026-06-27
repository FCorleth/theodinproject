import express from "express";
import authorRouter from "./src/routes/authorRouter.js";
import bookRouter from "./src/routes/bookRouter.js";
import indexRouter from "./src/routes/indexRouter.js";
import userRouter from "./src/routes/userRouter.js";

const app = express();
const PORT = 3000;

app.use(express.json());
// Middleware de captura de erro
app.use((error, req, res, next) => {
  console.error(error);
  res.status(error.statusCode || 500).send(error.message);
});

app.use("/authors", authorRouter);
app.use("/books", bookRouter);
app.use("/users", userRouter);
app.use("/", indexRouter);

app.listen(PORT, (error) => {
  if (error) {
    throw error;
  }

  console.log(`Server running on port ${PORT}`);
});
