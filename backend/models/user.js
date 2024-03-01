const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const findOrCreate = require("mongoose-findorcreate");

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, select: false },
  profilePicUrl: { type: String },
  posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  friends: [{ type: Schema.Types.ObjectId, ref: "User" }],
  friendRequests: [{ type: Schema.Types.ObjectId, ref: "User" }],
  facebookId: { type: String, required: false },
});

// Apply the uniqueValidator plugin to UserSchema.
UserSchema.plugin(uniqueValidator);

// Apply findOrCreate plugin to UserSchema.
UserSchema.plugin(findOrCreate);

//Export model
module.exports = mongoose.model("User", UserSchema);