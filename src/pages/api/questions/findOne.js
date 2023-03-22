import connectMongo from "../../../../lib/connectMongo";
import Progresses from "../../../../models/Progresses";

export default async function getOneProgress(req, res) {
  try {
    await connectMongo();
    const { progressId } = req.query;
    const progress = await Progresses.findOne({ _id: progressId });
    res.json(progress);
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
