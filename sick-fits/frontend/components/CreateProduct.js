import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import { useRouter } from 'next/router';
import useForm from '../lib/useForm';
import DisplayError from './ErrorMessage';
import { ALL_PRODUCTS_QUERY } from './Products';
import Form from './styles/Form';

const CREATE_PRODUCT_MUTATION = gql`
  mutation CREATE_PRODUCT_MUTATION($name: String!, $price: Int!, $description: String!, $image: Upload) {
    createProduct(
      data: {
        name: $name
        price: $price
        description: $description
        photo: { create: { image: $image, altText: $name } }
        status: "AVAILABLE"
      }
    ) {
      id
      name
    }
  }
`;

export default function CreateProduct() {
  const router = useRouter();
  const { inputs, setInputValue, clearForm } = useForm({
    image: '',
    name: '',
    price: 0,
    description: '',
  });

  const [createProduct, { loading, error, data }] = useMutation(CREATE_PRODUCT_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: ALL_PRODUCTS_QUERY }],
  });

  return (
    <Form
      onSubmit={async (e) => {
        e.preventDefault();
        const res = await createProduct();
        clearForm();
        router.push({ pathname: `/product/${res.data.createProduct.id}` });
      }}
    >
      <DisplayError error={error} />
      <fieldset disabled={loading} aria-busy={loading}>
        <label htmlFor="image">
          <input type="file" id="image" name="image" onChange={setInputValue} required />
        </label>
        <label htmlFor="name">
          Name
          <input type="text" id="name" name="name" placeholder="Name" value={inputs.name} onChange={setInputValue} />
        </label>
        <label htmlFor="name">
          Price
          <input
            type="number"
            id="price"
            name="price"
            placeholder="Price"
            value={inputs.price}
            onChange={setInputValue}
          />
        </label>
        <label htmlFor="description">
          Description
          <textarea
            id="description"
            name="description"
            placeholder="Description"
            value={inputs.description}
            onChange={setInputValue}
          />
        </label>
        <button type="submit">+ Add Product</button>
      </fieldset>
    </Form>
  );
}
