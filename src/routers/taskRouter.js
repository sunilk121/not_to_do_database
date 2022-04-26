import express from "express";
const router = express.Router();
import {
  getAllTask,
  insertTask,
  getTask,
  deleteTask,
  updateTask,
} from "../models/task/TaskList.model.js";

router.get("/:_id?", async (req, res) => {
  const { _id } = req.params;

  const result = _id ? await getTask(_id) : await getAllTask();
  res.json({
    status: "sucess",
    message: "get method",
    result,
  });
});
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const result = await insertTask(data);
    res.json({
      message: "post method",
      result,
    });
  } catch (error) {
    console.log(error);
  }
});

router.patch("/", async (req, res) => {
  try {
    const result = await updateTask(req.body);
    console.log(result);
    res.json({
      status: "successful",
      message: "task updated",
      result,
    });
  } catch (error) {
    res.json({
      status: "error",
      message: error.message,
    });
  }
});

router.delete("/:_id", async (req, res) => {
  const { _id } = req.params;
  const result = await deleteTask(_id);

  res.json({
    status: "sucess",
    message: "delete method",
    result,
  });
});

export default router;
