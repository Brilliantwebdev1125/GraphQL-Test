import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
  amount: Number,
  pizza: {
    type: Schema.Types.ObjectId,
    ref: 'pizza'
  },
  date: Schema.Types.Date
});

const Order = mongoose.model('order', OrderSchema);

export default Order;
