import path from 'path';
import merge from 'lodash.merge';
import typeDefs from './typeDefs'

export const types = typeDefs;

import MaterialResolver from './resolvers/material.resolver';
import PizzaResolver from './resolvers/pizza.resolver';
import UnitResolver from './resolvers/unit.resolver';
import MaterialPriceResolver from './resolvers/material_price.resolver';
import RecipeResolver from './resolvers/recipe.resolver';
import OrderResolver from './resolvers/order.resolver';
import DashboardResolver from './resolvers/dashboard.resolver';

export const resolvers = merge([
  MaterialResolver,
  PizzaResolver,
  UnitResolver,
  MaterialPriceResolver,
  RecipeResolver,
  OrderResolver,
  DashboardResolver
]);
