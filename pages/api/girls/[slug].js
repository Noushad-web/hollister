import girlsData from "../../../utils/girls";

const handler = (req, res) => {
  const { slug } = req.query;
  
  const girlData = girlsData.products.find(eachData => eachData.slug === slug)
  
  res.status(200).json(girlData);
}

export default handler