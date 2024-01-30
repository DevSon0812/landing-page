export interface ProductsProps {
  id?: number;
  name: string;
  address: string;
  price: number;
  beds: number;
  baths: number;
  sqft: number;
  create_at: number;
}

export interface SectionProductsProps {
  title: string;
  subTitle: string;
}
