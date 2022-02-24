import React from 'react'
import Layout from '../../component/Layout'

const Shop = () => {
  return (
    <Layout>
      <div>Shop</div>
    </Layout>
  )
}

export default Shop

export async function getServerSideProps(context) {
  const { params } = context;
  const { slug } = params;

  console.log('context: ', context)
  await db.connect();
  const shop = await shop.findOne({ slug }).lean();
  await db.disconnect();

  return {
    props: {
      shop: db.convertDocToObj(shop),
    }
  }
}