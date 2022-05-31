import insertReport from "../../lib/report";
export default async function handler(req, res) {
  const { method } = req;
  try {
    switch (method) {
      case "POST":
        const response = await insertReport(req.body);
        return res.status(200).json(response.data);
        break;
      default:
        break;
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
}
