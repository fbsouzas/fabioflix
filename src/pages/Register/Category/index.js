import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Template from '../../../components/Template';
import FormField from '../../../components/FormField';

function RegisterCategory() {
  const initCategory = {
    name: '',
    description: '',
    color: '',
  }
  const [categories, setCategories] = useState([])
  const [category, setCategory] = useState(initCategory)

  function addCategory(input, value) {
    setCategory({
      ...category,
      [input]: value,
    })
  }

  function handleCategory(event) {
    addCategory(
      event.target.getAttribute('name'),
      event.target.value
    )
  }

  return (
    <Template>
      <h1>Cadastro de categorias | {category.name}</h1>

      <form onSubmit={(event) => {
        event.preventDefault()
        setCategories([
          ...categories,
          category
        ])

        setCategory(initCategory)
      }}>

        <FormField
          label="Nome da categoria"
          type="text"
          name="name"
          value={category.name}
          onChange={handleCategory}
        />

        <div>
          <label>
            Descrição:
            <textarea
              name="description"
              value={category.description}
              onChange={handleCategory}
            />
          </label>
        </div>

        <FormField
          label="Cor"
          type="color"
          name="color"
          value={category.color}
          onChange={handleCategory}
        />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categories.map((category, i) => {
          return (
            <li key={i}>
              {category.name}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </Template>
  )
}

export default RegisterCategory;
