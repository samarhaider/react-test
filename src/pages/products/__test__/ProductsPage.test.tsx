import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";

import ProductsPage from "../ProductsPage";

test('displays product item', async () => {
  render(<ProductsPage />);

  expect(screen.getByRole('name')).toHaveTextContent('Black Sheet Strappy Textured Glitter Bodycon Dress')
  // expect(screen.getByRole('image')).toHaveAttribute('src', product.img)
})

