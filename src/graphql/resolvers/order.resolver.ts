import Order from '../../schema/order.schema';
import {OrderInput} from '../types';

const resolvers = {
  Query: {
    getAllOrders: async () => {
      return await Order.find().populate(['pizza']);
    }
  },
  Mutation: {
    createOrder: async (parent : any, args : OrderInput, context : any, info : any): Promise < any > => {
      const {amount, pizza, date} = args.order;
      const recipe = await(await Order.create({pizza, amount, date})).populate(['pizza'])
      return recipe;
    }
  }
}

export default resolvers;
