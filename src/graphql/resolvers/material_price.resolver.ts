import MaterialPrice from '../../schema/materialPrice.schema';
import Unit from '../../schema/unit.schema';
import Material from '../../schema/material.schema';

import {MaterialPriceInput} from '../types';


const resolvers = {
  Query: {
    getMaterialPrice: async () => {
      const result = await MaterialPrice.find().populate(['unit', 'material']);
      return result;
    }
  },
  Mutation: {
    setMaterialPrice: async (parent : any, args : MaterialPriceInput, context : any, info : any): Promise < any > => {
      const {price, unit, material} = args.material_price;

      const unitModel = await Unit.findById(unit);

      const materialModel = await Material.findById(material);

      let materialPrice: any;

      if (unitModel && materialModel) {
        materialPrice = await MaterialPrice.findOne({material: material});

        if (materialPrice) {
          materialPrice.price = price;
          materialPrice.unit = unit;
          materialPrice = await(await materialPrice.save()).populate(['unit', 'material']);
        } else {
          materialPrice = await(await MaterialPrice.create({price, unit, material})).populate(['unit', 'material'])
        }
      } else {
        materialPrice = null;
      }

      return materialPrice;

    }
  }
}

export default resolvers;
