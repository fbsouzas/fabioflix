import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Template from '../../../components/Template';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriesRepository from '../../../repositories/categories';

function RegisterCategory() {
  const initCategory = {
    name: '',
    description: '',
    color: '',
  };
  const [categories, setCategories] = useState([]);
  const { values, handleChange, clearForm } = useForm(initCategory);

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((response) => {
        setCategories([
          ...response,
        ]);
      });
  }, []);

  return (
    <Template>
      <h1>
        Cadastro de categorias |
        {values.name}
      </h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        setCategories([
          ...categories,
          values,
        ]);

        clearForm(initCategory);
      }}
      >
        <FormField
          label="Nome da categoria"
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={values.description}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={values.color}
          onChange={handleChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      {categories.length === 0 && (
      <div>
        Carregando...
      </div>
      )}

      <ul>
        {categories.map((category) => (
          <li key={category.name}>
            {category.name}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </Template>
  );
}

export default RegisterCategory;
