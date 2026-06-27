import { Router } from "express";
import {
  listUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const userRouter = Router();

userRouter.get("/", listUsers);
userRouter.post("/create", createUser);
userRouter.put("/:id/update", updateUser);
userRouter.delete("/:id/delete", deleteUser);

export default userRouter;
