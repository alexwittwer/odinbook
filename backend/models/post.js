const mongoose = require("mongoose");
const { format } = require("date-fns");

const Schema = mongoose.Schema;

const PostSchema = new Schema({
  author: { type: Schema.Types.ObjectId, ref: "User" },
  content: { type: String, required: true },
  timestamp: { type: Date, required: true },
  comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  imgUrl: { type: String, required: false },
  likes: [{ type: Schema.Types.ObjectId, ref: "User" }],
});

PostSchema.virtual("formatted_time").get(function () {
  return format(new Date(this.timestamp), "dd MMMM yyyy ' at ' HH:mm");
});

//Export model
module.exports = mongoose.model("Post", PostSchema);