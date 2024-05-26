import { Router } from "express";
import CreateRemindersDto from "../dtos/create-reminders";
import Reminder from "../models/reminder";

const router = Router();

// we create this array to store the reminder objects, because we don't have DB.
const remiders: Reminder[] = [];

router.get("/", (req, res) => {
  res.send("List of reminders fro Server");
});

router.post("/", (req, res) => {
  const { title } = req.body as CreateRemindersDto;
  // const reminder = {id:Date.now(), title, isComplted: false}// we want to code this in anothe tab, because this module should be only for post method reouting. and now we want to create a list of reminders.
  const reminder = new Reminder(title); // Now we have a reminder list, we don't have DB, so we want to store it in array list.
  remiders.push(reminder);
  res.status(201).json(reminder);
});

export default router;

/*
In the postman we have sent the data, and created the following data.

POST: http://localhost:8000/reminders

Body -> Row -> JSON -> 
{
    "title": "New Reminders"
}

Anserwer in the Body section of Postman: 

{
    "title": "new reminders List",
    "id": 1716738276592,
    "isComplate": false
}

The post method generate id by default. 
*/
