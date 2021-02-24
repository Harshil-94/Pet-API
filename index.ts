import express from "express";
import { userRoute } from "./user/controller";
import database from "./user/database";

const app = express();

app.use(express.json());
app.use("/pet", userRoute());

database()
  .then(() => {
    console.log("database is alive");
    app.listen(5000, () => {
      console.log("the pet store is open");
    });
  })
  .catch((err) => {
    console.log(err);
  });
