export interface Product {
  id: string
  name: string
  price: number
  stock: number
  selled: number
  demand: number
  date: string
}

export interface ProductState {
  products: Product[]
}