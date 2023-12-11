export type Product = {
  id: number,
  colour: string,
  name: string,
  price: number,
  img: string
};

export type GetProductQueryParams = {
  color: string;
}
