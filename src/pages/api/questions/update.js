import connectMongo from "../../../../lib/connectMongo";
import Progresses from "../../../../models/Progresses";

export default async function updateProgress(req, res) {
  try {
    await connectMongo();
    const { id, ...updates } = req.body;
    const progress = await Progresses.findOneAndUpdate({ _id: id }, updates, { new: true });
    res.json({ progress });
    console.log(progress);
    console.log("progress updated");
  } catch (error) {
    console.log(error);
    res.json({ error });
  }
}
