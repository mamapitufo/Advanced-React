import Link from 'next/link';
import formatMoney from '../lib/formatMoney';
import Item from './styles/ItemStyles';
import PriceTag from './styles/PriceTag';
import Title from './styles/Title';

export default function ProductTile({ product }) {
  return (
    <Item>
      <img src={product.photo?.image.publicUrlTransformed} alt={product.name} />
      <Title>
        <Link href={`/product/${product.id}`}>{product.name}</Link>
      </Title>
      <PriceTag>{formatMoney(product.price)}</PriceTag>
      <p>{product.description}</p>
    </Item>
  );
}
