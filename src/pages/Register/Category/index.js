import React from 'react';
import { Link } from 'react-router-dom';
import Template from '../../../components/Template';

function RegisterCategory() {
  return (
    <Template>
      <h1>Cadastro de categorias</h1>

      <form>

        <label>
          Nome da Categoria:
          <input
            type="text"
          />
        </label>

        <button>
          Cadastrar
        </button>
      </form>

      <Link to="/">
        Ir para home
      </Link>
    </Template>
  )
}

export default RegisterCategory;
