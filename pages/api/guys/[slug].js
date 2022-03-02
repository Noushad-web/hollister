import guysData from "../../../utils/guys";

const handler = (req, res) => {
  const { slug } = req.query;
  
  const data = guysData.products.find(eachData => eachData.slug === slug)
  
  res.status(200).json(data);
}

export default handler