import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';

const ALL_PRODUCTS_QUERY = gql`
  # gql
  query ALL_PRODUCTS_QUERY {
    allProducts {
      id
      name
      price
      description
      photo {
        id
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const ProductsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
`;

export default function Products() {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY);
  console.log('data:', data, 'error:', error, 'loading:', loading);

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  }
  return (
    <div>
      <ProductsList>
        {data.allProducts.map((product) => (
          <p key={product.id}>{product.name}</p>
        ))}
      </ProductsList>
    </div>
  );
}
