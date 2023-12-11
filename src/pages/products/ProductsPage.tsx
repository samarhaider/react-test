import ProductItem from "@app/components/ProductItem";
// import ProductItem from "components/ProductItem";

import { useGetProducts } from "../../hooks/useGetProduct";

const ProductsPage = () => {
  const { data: products, isLoading, isError } = useGetProducts();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error fetching user</div>;
  }

  if (!products) {
    return <div>No Product found</div>
  }

  return (
    <div>
      {/* <ProductFilter /> */}
      {products.map((product) => (
        <ProductItem product={product} />
      ))}
    </div>
  );
};

export default ProductsPage;
