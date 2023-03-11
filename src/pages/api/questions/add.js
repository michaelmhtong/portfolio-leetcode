import connectMongo from "../../../../lib/connectMongo";
import Progresses from "../../../../models/Progresses";

export default async function addProgress(req, res) {
  try {
    await connectMongo();
    const { title, url, topic, id, difficulty, userId } = req.body;
    console.log("userId", userId)
    const progress = new Progresses({
      userId: userId,
      problemId: id,
      title: title,
      topics: topic,
      url: url,
      difficulty: difficulty,
    });
    console.log(progress);
    await progress.save();
    res.json({ progress });
    console.log("progress added");
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
