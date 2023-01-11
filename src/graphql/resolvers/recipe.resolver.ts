import Recipe from '../../schema/recipe.schema';
import {RecipeInput} from '../types';

const resolvers = {
  Query: {
    getAllRecipes: async () => {
      return await Recipe.find().populate(['material', 'pizza']);
    }
  },
  Mutation: {
    createRecipe: async (parent : any, args : RecipeInput, context : any, info : any): Promise < any > => {
      const {amount, material, pizza} = args.recipe;
      const recipe = await(await Recipe.create({pizza, amount, material})).populate(['material', 'pizza'])
      return recipe;
    }
  }
}

export default resolvers;
