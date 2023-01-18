import useForm from '../lib/useForm';
import Form from './styles/Form';

export default function CreateProduct() {
  const { inputs, setInputValue, resetForm, clearForm } = useForm({
    image: '',
    name: '',
    price: 0,
    description: '',
  });

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        console.log(inputs);
      }}
    >
      <fieldset>
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
