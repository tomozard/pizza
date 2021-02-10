
import { IProduct } from "./index";

export default interface ICart {
  product: IProduct;
  amount: number;
  id: number;
}
