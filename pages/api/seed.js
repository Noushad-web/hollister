import nc from 'next-connect';
import db from '../../utils/db';
import shop from '../../models/shop';
import data from '../../utils/data';

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  await shop.deleteMany(); 
  await shop.insertMany(data.shops);
  await db.disconnect();
  res.send({message: 'seeded successfully'});
})

export default handler;