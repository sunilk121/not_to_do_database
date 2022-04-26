import TaskListSchema from "./TaskList.schema.js";

//new entry
export const insertTask = (object) => {
  return TaskListSchema(object).save();
};

// read all data

//delete data
