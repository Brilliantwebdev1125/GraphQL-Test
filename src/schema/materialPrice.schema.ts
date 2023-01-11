import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const MaterialPriceSchema = new Schema({
  price: Number,
  unit: {
    type: Schema.Types.ObjectId,
    ref: 'unit'
  },
  material: {
    type: Schema.Types.ObjectId,
    ref: 'material'
  }
});

const MaterialPrice = mongoose.model('MaterialPrice', MaterialPriceSchema);

export default MaterialPrice;
