import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const PizzaSchema = new Schema({name: String, price: Schema.Types.Number});

const Pizza = mongoose.model('pizza', PizzaSchema);

export default Pizza;
