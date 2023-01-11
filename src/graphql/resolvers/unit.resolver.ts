import Unit from '../../schema/unit.schema';
import {UnitInput} from '../types';

const resolvers = {
  Query: {
    getAllUnit: async () => {
      return await Unit.find();
    }
  },
  Mutation: {
    createUnit: async (parent : any, args : UnitInput, context : any, info : any): Promise < any > => {
      const {name} = args.unit;
      const pizza = await Unit.create({name});
      return pizza;
    }
  }
}

export default resolvers;
