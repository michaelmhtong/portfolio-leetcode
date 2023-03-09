import { Schema, model, models } from "mongoose";

const usersSchema = new Schema({
  email: String,
  first_name: String,
  last_name: String,
});

const Users = models.User || model("Users", usersSchema);

export default Users;
