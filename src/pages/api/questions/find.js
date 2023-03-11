import connectMongo from "../../../../lib/connectMongo";
import Progresses from "../../../../models/Progresses";

export default async function getProgress(req, res) {
  try {
    await connectMongo();
    const { userId } = req.query;
    const progresses = await Progresses.find({ userId });
    res.json({ progresses });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
