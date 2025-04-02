const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  user: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  product: [{ type: Object }],
});

const user = mongoose.model("user", userSchema);
module.exports = user;
