import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  amount: Number,
  material: {
    type: Schema.Types.ObjectId,
    ref: 'material'
  },
  pizza: {
    type: Schema.Types.ObjectId,
    ref: 'pizza'
  }
});

const Recipe = mongoose.model('recipe', RecipeSchema);

export default Recipe;
