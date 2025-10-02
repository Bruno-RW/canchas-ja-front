export type Product = {
  id: string
  images: string[]
  location: string
  address: string
  dateRange: string
  price: number
  rating: number
  discount?: number
  currency: string
}