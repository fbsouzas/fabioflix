import React from 'react';
import { Link } from 'react-router-dom';
import Template from '../../../components/Template';

function RegisterVideo() {
  return (
    <Template>
      <h1>Cadastro de vídeos</h1>

      <Link to="/register/category">
        Cadastrar categoria
      </Link>
    </Template>
  )
}

export default RegisterVideo;
