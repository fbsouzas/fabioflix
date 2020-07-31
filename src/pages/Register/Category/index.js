import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Template from '../../../components/Template';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function RegisterCategory() {
  const initCategory = {
    name: '',
    description: '',
    color: '',
  };
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(initCategory);

  function addCategory(input, value) {
    setCategory({
      ...category,
      [input]: value,
    });
  }

  function handleCategory(event) {
    addCategory(
      event.target.getAttribute('name'),
      event.target.value,
    );
  }

  useEffect(() => {
    const url = window.location.hostname.includes('localhost')
      ? 'http://localhost:3001/categories'
      : 'mudar a url para produção aqui';

    fetch(url)
      .then(async (response) => {
        const result = await response.json();

        setCategories([
          ...result,
        ]);
      });
  }, []);

  return (
    <Template>
      <h1>
        Cadastro de categorias |
        {category.name}
      </h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        setCategories([
          ...categories,
          category,
        ]);

        setCategory(initCategory);
      }}
      >

        <FormField
          label="Nome da categoria"
          type="text"
          name="name"
          value={category.name}
          onChange={handleCategory}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="description"
          value={category.description}
          onChange={handleCategory}
        />

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={category.color}
          onChange={handleCategory}
        />

        <Button>
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
