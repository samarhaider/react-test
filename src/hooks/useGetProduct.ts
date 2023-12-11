import { UseQueryResult, useQuery } from '@tanstack/react-query';
import apiClient from '../api/api';

import { Product, GetProductQueryParams } from '../pages/products/product.type';

const QUERY_KEY = ['Products'];

export const fetchProducts = async (params?: GetProductQueryParams): Promise<Product[]> => {
  const { data } = await apiClient.get<Product[]>(`/products`, {params});
  return data;
};

export const useGetProducts = (params?: GetProductQueryParams): UseQueryResult<Product[], Error> => {
  return useQuery({
    queryKey: QUERY_KEY,
    queryFn: () => fetchProducts(params),
    // select: (data) => data as Product[],
  });
};
