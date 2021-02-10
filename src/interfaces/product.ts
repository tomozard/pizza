import { isInterfaceDeclaration } from "typescript";

enum ProductSizeCrustType {
  PAN = "PAN",
  THIN = "THIN",
  STUFEED_CRUST = "STUFEED_CRUST",
  CHEESY_SAUSAGE = "CHEESY_SAUSAGE",
}

enum ProductSizeType {
  S = "S",
  M = "M",
  L = "L",
}

interface ProductSizeCrust {
  id: number;
  type: ProductSizeCrustType;
  price: number;
}

interface ProductSize {
  id: number;
  type: ProductSizeType;
  price: number;
  crust: ProductSizeCrust[];
}

export default interface IProduct {
  _id: string;
  type: string;
  category: string;
  product_id: string;
  image_th: string;
  imagealt_th: string;
  image_en: string;
  imagealt_en: string;
  product_name_th: string;
  product_name_en: string;
  product_detail_th: string;
  product_detail_en: string;
  price: number;
  fullprice?: number;
  size?: ProductSize;
}
