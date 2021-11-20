import { Router } from "express";
import { getAllUsers } from "./Users";

// User-route
const userRouter = Router();
userRouter.get("/all", getAllUsers);

// Export the base-router
const baseRouter = Router();
baseRouter.use("/users", userRouter);
export default baseRouter;
