import { getAll, getCSV, insertReport } from "../../lib/report";
export default async function handler(req, res) {
  const { method } = req;
  try {
    switch (method) {
      case "POST":
        const response = await insertReport(req.body);
        return res.status(200).json(response.data);
        break;
      default:
        if (req.query.csv) {
          console.log('get csv format')
          const resp = await getCSV()
          return res.status(200).json(resp);
        }
        const resp = await getAll();
        return res.status(200).json(resp);
        break;
    }
  } catch (error) {
    console.log(error.message);
    return res.status(500);
  }
}
