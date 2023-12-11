import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";

import { Product } from '@app/pages/products/product.type';
import ProductItem from '..';

const product: Product = {
  "id": 1,
  "colour": "Black",
  "name": "Black Sheet Strappy Textured Glitter Bodycon Dress",
  "price": 10,
  "img": "http://cdn-img.prettylittlething.com/9/0/a/a/90aa90903a135ee59594f47c7685aa7ef3046e44_cly8063_1.jpg?imwidth=1024"
};

test('displays product item', async () => {
  // ARRANGE
  render(<ProductItem product={product} />);

  // ASSERT
  expect(screen.getByRole('price')).toHaveTextContent(product.price + "")
  expect(screen.getByRole('name')).toHaveTextContent(product.name)
  expect(screen.getByRole('image')).toHaveAttribute('src', product.img)
})

