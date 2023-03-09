import connectMongo from "../../../../lib/mongodb";
import Progresses from "../../../../models/Progresses";

export default async function addProgress(req, res) {
  try {
    await connectMongo();
    const { title, url, topic, id, difficulty } = req.body.question;
    const progress = new Progresses({
      problemID: id,
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
