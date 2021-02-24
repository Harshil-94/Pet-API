import { request, response } from "express";
import { InsertOneWriteOpResult } from "mongodb";
import database from "./database";

export const UserInDatabase = async () => {
  try {
    return await (await database()).collection("pet").find({}).toArray();
  } catch (Error) {
    console.log(Error);
    throw Error("failed to send the data");
  }
};

export const addUserToDatabase = async (owner: string, pet: string) => {
  try {
    return await (await database())
      .collection("pet")
      .insertOne({ owner: owner, pet: pet });
  } catch (Error) {
    console.log(Error);
    throw Error("failed to enter the data");
  }
};

export const ownerInDatabase = async () => {
  try {
    return await (await database())
      .collection("pet")
      .find({}, { projection: { owner: 1 } })
      .toArray();
  } catch (Error) {
    console.log(Error);
    throw Error("failed to send the data");
  }
};

export const petInDatabase = async () => {
  try {
    return await (await database())
      .collection("pet")
      .find({}, { projection: { pet: 1 } })
      .toArray();
  } catch (Error) {
    console.log(Error);
    throw Error("failed to send the data");
  }
};

export const deleteDatabase = async (pet: string) => {
  try {
    return await (await database()).collection("pet").deleteOne({ pet: pet });
  } catch (Error) {
    console.log(Error);
    throw Error("failed to enter the data");
  }
};

export const replaceDatabase = async (owner: string, pet: string) => {
  try {
    return await (await database())
      .collection("pet")
      .updateOne({ owner: owner }, { $set: { pet: pet } });
  } catch (Error) {
    console.log(Error);
    throw Error("failed to enter the data");
  }
};
