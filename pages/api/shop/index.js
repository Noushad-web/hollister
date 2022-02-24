import nc from 'next-connect';
import shop from '../../../models/shop';
import db from '../../../utils/db';

const handler = nc();

handler.get( async (req, res) => {
  await db.connect();
  const shops = await shop.find({});
  await db.disconnect();
  res.send(shops);
})

export default handler;