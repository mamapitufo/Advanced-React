import useForm from '../lib/useForm';

export default function CreateProduct() {
  const { inputs, setInputValue, resetForm, clearForm } = useForm({
    name: '',
    price: 0,
    description: '',
  });

  return (
    <div>
      <form>
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
          <input
            type="text"
            id="description"
            name="description"
            placeholder="Description"
            value={inputs.description}
            onChange={setInputValue}
          />
        </label>
        <button type="button" onClick={clearForm}>
          Clear Data
        </button>
        <button type="button" onClick={resetForm}>
          Reset
        </button>
      </form>
    </div>
  );
}
