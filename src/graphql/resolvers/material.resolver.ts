import Material from '../../schema/material.schema';
import {MaterialInput} from '../types';

const resolvers = {
  Query: {
    getAllMaterial: async () => {
      return await Material.find();
    }
  },
  Mutation: {
    createMaterial: async (parent : any, args : MaterialInput, context : any, info : any): Promise < any > => {
      const {name} = args.material;
      const pizza = await Material.create({name});
      return pizza;
    }
  }
}

export default resolvers;
