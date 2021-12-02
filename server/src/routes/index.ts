import { Router } from "express";
import { getAllUsers } from "./Users";
import { getAllMilestones } from "./Milestones";
import { getAllJournalEntries } from "./Journal";

// User route
const userRouter = Router();
userRouter.get("/all", getAllUsers);

// Milestone route
const milestoneRouter = Router();
milestoneRouter.get("/all", getAllMilestones);

// Journal route
const journalRouter = Router();
journalRouter.get("/all", getAllJournalEntries);

// Export the base-router
const baseRouter = Router();
baseRouter.use("/users", userRouter);
baseRouter.use("/milestones", milestoneRouter);
baseRouter.use("/journal", journalRouter);

export default baseRouter;
