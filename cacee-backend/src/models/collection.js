import mongoose from 'mongoose';

const { Schema } = mongoose;

const CollectionSchema = new Schema({
  category: String,
  name: String,
  colors: [String],
  sizes: [Number],
  desc: String,
  prices: [Number],
  dateAdded: {
    type: Date,
    default: Date.now,
  },
  images: {
    type: [String],
  },
  bestSeller: Boolean,
  newProduct: Boolean,
});

CollectionSchema.statics.getByCategory = function({ category }) {
  return this.find({ category: category });
};

CollectionSchema.statics.getBestSellers = function({ bestSeller }) {
  return this.find({ bestSeller: bestSeller });
};

CollectionSchema.statics.getBestNewProducts = function({ newProduct }) {
  return this.find({ newProduct: newProduct });
};

const Collection = mongoose.model('Collection', CollectionSchema);
export default Collection;
