import { Request, Response, Router } from "express";
import database from "./database";
import {
  addUserToDatabase,
  ownerInDatabase,
  petInDatabase,
  UserInDatabase,
  deleteDatabase,
  replaceDatabase,
} from "./service";

const userPetStore = async (req: Request, res: Response) => {
  try {
    res.json(await UserInDatabase());
    res.json({ success: true, message: "data sended!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "cannot find the user" });
  }
};

const userAdd = async (req: Request, res: Response) => {
  try {
    await addUserToDatabase(req.body.owner, req.body.pet);
    res.json({ success: true, message: "data added" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "cannot add the user" });
  }
};

const ownerOnly = async (req: Request, res: Response) => {
  try {
    res.json(await ownerInDatabase());
    res.json({ success: true, message: "data sended!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "cannot find the user" });
  }
};

const petOnly = async (req: Request, res: Response) => {
  try {
    res.json(await petInDatabase());
    res.json({ success: true, message: "data sended!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "cannot find the user" });
  }
};

const userDelete = async (req: Request, res: Response) => {
  try {
    await deleteDatabase(req.body.pet);
    res.send("deleted!");
    //res.json({ success: true, message: "data deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "cannot add the user" });
  }
};

const userReplace = async (req: Request, res: Response) => {
  try {
    await replaceDatabase(req.body.owner, req.body.pet);
    res.send("changes has been made");
  } catch (err) {
    console.log(err);
    res.status(500).json({ success: false, message: "cannot add the user" });
  }
};

export const userRoute = () => {
  const app = Router();
  app.get("/", userPetStore);
  app.post("/add", userAdd);
  app.get("/owneronly", ownerOnly);
  app.get("/petonly", petOnly);
  app.delete("/delete", userDelete);
  app.put("/replace", userReplace);
  return app;
};
