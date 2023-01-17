import { useState } from 'react';

export default function useForm(initialState = {}) {
  const [inputs, setInputs] = useState(initialState);

  const setInputValue = (e) => {
    const { value, name } = e.target;
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
