import { Color, Product, Size } from "../../solid/open-closed";

const makeProducts = () => {
  const arr = [];
  arr.push(new Product("Jeans", Color.blue, Size.large));
  arr.push(new Product("Shirt", Color.green, Size.medium));
  arr.push(new Product("Cap", Color.red, Size.small));
  arr.push(new Product("Gloves", Color.blue, Size.small));
  arr.push(new Product("Jeans", Color.red, Size.medium));
  arr.push(new Product("Shirt", Color.red, Size.large));
  arr.push(new Product("Cap", Color.blue, Size.medium));
  arr.push(new Product("Gloves", Color.green, Size.large));

  return arr;
};

export default makeProducts;
