import {gql} from 'apollo-server-express';

const typeDefs = gql `
type Pizza {
  id: ID
  name: String
  price: Int
}

type Unit {
  id: ID 
  name: String
}

type Material {
  id: ID 
  name: String
}

type MaterialPrice {
  id: ID
  price: Int
  unit : Unit
  material: Material
}

type Recipe {
  id: ID
  amount: Int
  material: Material
  pizza: Pizza
}

type Order {
  id: ID
  amount: Int
  date: String
  pizza: Pizza
}

type DashboardData {
  unit: Int
  ingredient: [String]
  coast: Int
  sales: Int
  pizza: String
}

input PizzaInput {
  name: String
  price: Int
}

input MaterialInput {
  name: String
}

input UnitInput {
  name: String
}

input MaterialPriceInput {
  unit: String
  price: Int
  material: String
}

input RecipeInput {
  amount: Int
  material: String
  pizza: String
}

input OrderInput {
  amount: Int
  date: String
  pizza: String
}

input DashboardInput {
  start: String
  end: String
  selected: String
}

type Mutation {
  createPizza(pizza : PizzaInput): Pizza 
  createMaterial(material : MaterialInput): Material 
  createUnit(unit : MaterialInput): Unit
  setMaterialPrice(material_price : MaterialPriceInput) : MaterialPrice
  createRecipe(recipe: RecipeInput): Recipe
  createOrder(order: OrderInput) : Order
}

type Query {
  getAllPizza: [Pizza] 
  getAllMaterial: [Material] 
  getAllUnit: [Unit]
  getMaterialPrice : [MaterialPrice]
  getAllRecipes : [Recipe]
  getAllOrders: [Order]
  getAllData(filter: DashboardInput): DashboardData
}
`;

export default typeDefs;
