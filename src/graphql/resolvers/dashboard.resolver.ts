import * as mongoose from 'mongoose';
import Order from '../../schema/order.schema';
import Recipe from '../../schema/recipe.schema';
import MaterialPrice from '../../schema/materialPrice.schema';

const resolvers = {
  Query: {
    getAllData: async (parent : any, args : {
      filter: {
        start: string,
        end: string,
        selected: string
      }
    }, context : any, info : any) => {

      const {start, end, selected} = args.filter;
      const result: {unit:number;ingredient:any[];coast:number;sales:number;pizza:string} = {
        unit: 0,
        ingredient: [],
        coast: 0,
        sales: 0,
        pizza: ''
      };
      const query: any = [];

      if (selected) {
        query.push({pizza: new mongoose.Types.ObjectId(selected)})
      }

      try {
        let temp: any;
        if (start) {
          temp = {};
          temp.$gte = new Date(start);
        }

        if (end) {
          if (! temp) {
            temp = {};
          }
          temp.$lte = new Date(end);
        }
        if (temp) {
          query.push({date: temp});
        }
      } catch (error) {
        console.log(error);
        return result;
      }

      try {
        // const OrderModel = await Order.aggregate([
        // {
        //     $match: query.length === 0 ? {} : (query.length === 1 ? query[0] : {
        //       $and: query
        //     })
        // }, {
        //     $group: {
        //       _id: null,
        //       total: {
        //         $sum: '$amount'
        //       }
        //     }
        // }
        // ]);
        const OrderModel = await Order.find({
          ... query[0],
          ... query[1]
        }).populate(['pizza']);
        for (const iterator of OrderModel) {
          result.unit += iterator.amount as number;
          result.sales += (iterator.pizza as any).price;
          result.pizza = (iterator.pizza as any).name;
          const RecipeModel = await Recipe.find({pizza: iterator.pizza}).populate('material');
          for (const iterator1 of RecipeModel) {
            const price = await MaterialPrice.findOne({
              material: (iterator1.material as any).id
            }).populate('material');

            result.coast += (price ?. price as number) / 10;

            result.ingredient.push((iterator1.material as any).name);
          }
          result.ingredient = result.ingredient.filter((value, index, self) => {
            return self.indexOf(value) === index;
          })
        }
      } catch (error) {
        console.log(error);
      }

      return result;
    }
  }
}

export default resolvers;
