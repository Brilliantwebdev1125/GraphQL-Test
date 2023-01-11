import Pizza from '../../schema/pizza.schema';
import {PizzaInput} from '../types';

const resolvers = {
  Query: {
    getAllPizza: async () => {
      return await Pizza.find();
    }
  },
  Mutation: {
    createPizza: async (parent : any, args : PizzaInput, context : any, info : any): Promise < any > => {
      const {name, price} = args.pizza;
      const pizza = await Pizza.create({name, price});
      return pizza;
    }
  }
}

export default resolvers;
