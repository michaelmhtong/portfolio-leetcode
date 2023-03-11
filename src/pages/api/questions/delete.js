import connectMongo from "../../../../lib/connectMongo";
import Progresses from "../../../../models/Progresses";

export default async function deleteProgress(req, res) {
  try {
    await connectMongo();
    const { id } = req.query;
    if (!id) {
      throw new Error("id parameter is missing");
    }
    await Progresses.findByIdAndDelete(id);
    res.status(200).json("Progress has been deleted");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
}
