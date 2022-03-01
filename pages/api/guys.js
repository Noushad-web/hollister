import guysData from '../../utils/guys'; 

export default function handler(req, res) {
  res.status(200).json(guysData);
}