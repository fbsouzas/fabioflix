import { useState } from 'react';

function useForm(initValues) {
  const [values, setValues] = useState(initValues);

  function addValue(input, value) {
    setValues({
      ...values,
      [input]: value,
    });
  }

  function handleChange(event) {
    addValue(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  function clearForm() {
    setValues(initValues);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
