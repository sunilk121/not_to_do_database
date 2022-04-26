import TaskListSchema from "./TaskList.schema.js";

//new entry
export const insertTask = (object) => {
  return TaskListSchema(object).save();
};

// read all data
export const getAllTask = () => {
  return TaskListSchema.find();
};

//find single task with an id
export const getTask = (_id) => {
  return TaskListSchema.findById(_id);
};

//delete data
export const deleteTask = (_id) => {
  return TaskListSchema.findByIdAndDelete(_id);
};
