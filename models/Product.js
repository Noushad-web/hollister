import mongoose from "mongoose";

const shopSchema = new mongoose.Schema({
  id: {type: String, required: true},
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  rating: { type: Number, required: true, default: 0 },
  brand: { type: String, required: true }, 
  countInStock: { type: Number, required: true, default: 0 },
  description: { type: String, required: true },
}, {
  timestamps: true
});

const shop = mongoose.models.shop || mongoose.model('shop', shopSchema);

export default shop;