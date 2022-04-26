import express from "express";

const app = express();
const PORT = 8000;

app.use(express.json());

//mongo connection
import mongoClient from "./src/config/db.js";
mongoClient();

//handlebar,ejs,......
// app.get("/", (req, res) => {
//   //res.send("Hello World compulsory");
//   res.json;
// });

//load user
import taskRouter from "./src/routers/taskRouter.js";

//task api
app.use("/api/v1/task", taskRouter);

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`your server is running at http://localhost:${PORT}`);
});
