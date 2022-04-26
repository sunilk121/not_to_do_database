import mongoose from "mongoose";
const mongoClient = () => {
  try {
    const conn = mongoose.connect("mongodb://locolhost:27017/classs-a");
    if (conn) {
      console.log("mongo connected");
    }
  } catch (error) {
    console.log(error);
  }
};
export default mongoClient;
