import { useState } from 'react';

export default function useForm(initialState = {}) {
  const [inputs, setInputs] = useState(initialState);

  const setInputValue = (e) => {
    const { name, type } = e.target;
    let { value } = e.target;
    if (type === 'number') {
      value = parseInt(value);
    }
    if (type === 'file') {
      [value] = e.target.files;
    }
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const resetForm = () => {
    setInputs(initialState);
  };

  const clearForm = () => {
    const wiped = Object.fromEntries(Object.keys(inputs).map((k) => [k, '']));
    setInputs(wiped);
  };

  return {
    inputs,
    setInputValue,
    resetForm,
    clearForm,
  };
}
