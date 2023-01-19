import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import Head from 'next/head';
import styled from 'styled-components';
import DisplayError from './ErrorMessage';

const PRODUCT_QUERY = gql`
  query PRODUCT_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      id
      name
      price
      description
      photo {
        altText
        image {
          publicUrlTransformed
        }
      }
    }
  }
`;

const ProductContainer = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  align-items: top;
  gap: 2rem;
  max-width: var(--maxWidth);
  img {
    width: 100%;
    object-fit: contain;
  }
`;

export default function Product({ id }) {
  const { loading, error, data } = useQuery(PRODUCT_QUERY, {
    variables: { id },
  });
  console.log({ loading, error, data });

  if (loading) return <p>Loading...</p>;
  if (error) return <DisplayError error={error} />;

  const { Product: product } = data;
  return (
    <ProductContainer>
      <Head>
        <title>Sick Fits | {product.name}</title>
      </Head>

      <img
        src={product.photo.image.publicUrlTransformed}
        alt={product.photo.altText}
      />
      <div className="details">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>
    </ProductContainer>
  );
}
