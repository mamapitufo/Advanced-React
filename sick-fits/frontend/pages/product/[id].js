import Product from '../../components/Product';

export default function ProductPage({ query }) {
  return <Product id={query.id} />;
}
