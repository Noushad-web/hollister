import girlsData from '../../utils/girls'; 

export default function handler(req, res) {
  res.status(200).json(girlsData);
}