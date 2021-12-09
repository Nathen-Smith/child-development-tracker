import { Router } from "express";
// import { getChanges, createChanges, updateChanges, deleteChanges } from "./Changes";
// import { getFood, createFood, updateFood, deleteFood } from "./Food";
// import { getJournal, createJournal, updateJournal, deleteJournal } from "./Journal";
// import { getMilestone, createMilestone, updateMilestone, deleteMilestone } from "./Milestone";
// import { getSleep, createSleep, updateSleep, deleteSleep } from "./Sleep";
// import { getUser, createUser, updateUser, deleteUser } from "./User";
var Changes = require("./Changes");
var Food = require("./Food");
var Journal = require("./Journal");
var Milestone = require("./Milestone");
var Sleep = require("./Sleep");
var User = require("./User");

// Changes router
const changesRouter = Router();
changesRouter.get("/", Changes.getChanges);
changesRouter.post("/", Changes.createChanges);
changesRouter.put("/", Changes.updateChanges);
changesRouter.delete("/", Changes.deleteChanges);

// Food router
const foodRouter = Router();
foodRouter.get("/", Food.getFood);
foodRouter.post("/", Food.createFood);
foodRouter.put("/", Food.updateFood);
foodRouter.delete("/", Food.deleteFood);

// Journal router
const journalRouter = Router();
journalRouter.get("/", Journal.getJournal);
journalRouter.post("/", Journal.createJournal);
journalRouter.put("/", Journal.updateJournal);
journalRouter.delete("/", Journal.deleteJournal);

// Milestone router
const milestoneRouter = Router();
milestoneRouter.get("/", Milestone.getMilestone);
milestoneRouter.post("/", Milestone.createMilestone);
milestoneRouter.put("/", Milestone.updateMilestone);
milestoneRouter.delete("/", Milestone.deleteMilestone);

// Sleep router
const sleepRouter = Router();
sleepRouter.get("/", Sleep.getSleep);
sleepRouter.post("/", Sleep.createSleep);
sleepRouter.put("/", Sleep.updateSleep);
sleepRouter.delete("/", Sleep.deleteSleep);

// User router
const userRouter = Router();
userRouter.get("/", User.getUser);
userRouter.post("/", User.createUser);
userRouter.put("/", User.updateUser);
userRouter.delete("/", User.deleteUser);

// Export the base-router
const baseRouter = Router();
baseRouter.use("/changes", changesRouter);
baseRouter.use("/food", foodRouter);
baseRouter.use("/journal", journalRouter);
baseRouter.use("/milestone", milestoneRouter);
baseRouter.use("/sleep", sleepRouter);
baseRouter.use("/user", userRouter);

export default baseRouter;
