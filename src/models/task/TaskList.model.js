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

//update data
export const updateTask = ({ _id, hr }) => {
  return TaskListSchema.findByIdAndUpdate(_id, { hr }, { new: true });
};

//delete data
export const deleteTask = (_id) => {
  return TaskListSchema.findByIdAndDelete(_id);
};
