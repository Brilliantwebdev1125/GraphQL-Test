export interface Pizza {
  id?: String,
  name: String;
  price: number
}

export interface PizzaInput {
  pizza: Pizza
}

export interface Material {
  id?: String,
  name: String;
}

export interface MaterialInput {
  material: Material
}

export interface Unit {
  id?: String,
  name: String;
}

export interface UnitInput {
  unit: Unit
}

export interface MaterialPrice {
  id?: String,
  price: number;
  unit: String,
  material: String
}

export interface MaterialPriceInput {
  material_price: MaterialPrice
}

export interface Recipe {
  id?: String,
  amount: number,
  material: String,
  pizza: String
}

export interface RecipeInput {
  recipe: Recipe
}

export interface Order {
  id?: String,
  amount: number,
  pizza: String,
  date: String
}

export interface OrderInput {
  order: Order
}
