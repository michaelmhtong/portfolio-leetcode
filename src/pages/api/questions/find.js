import connectMongo from "../../../../lib/mongodb";
import Progresses from "../../../../models/Progresses";

export default async function getProgress(req, res) {
  try {
    await connectMongo();
    const progresses = await Progresses.find({});
    res.json({ progresses });
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
