import mongoose from "mongoose";

const progressesSchema = new mongoose.Schema({
  userId: String,
  status: {
    type: Boolean,
    default: false,
  },
  problemId: String,
  title: String,
  url: String,
  topics: Array,
  difficulty: String,
  date: {
    type: Date,
    default: Date.now,
  },
  note: String,
  rating: String,
  revision: {
    type: Boolean,
    default: false,
  },
});

const Progresses = mongoose.models.Progresses || mongoose.model("Progresses", progressesSchema);

export default Progresses;
