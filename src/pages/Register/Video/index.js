import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Template from '../../../components/Template';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriesRepository from '../../../repositories/categories';

function RegisterVideo() {
  const history = useHistory();
  const [categories, setCategories] = useState([]);
  const categoriesNames = categories.map(({ name }) => name);
  const { handleChange, values } = useForm({
    title: '',
    url: '',
    category: '',
  });

  useEffect(() => {
    categoriesRepository
      .getAll()
      .then((response) => {
        setCategories(response);
      });
  }, []);

  return (
    <Template>
      <h1>Cadastro de vídeos</h1>

      <form onSubmit={(event) => {
        event.preventDefault();

        const categorySelected = categories.find((category) => category.name === values.category);

        videosRepository.create({
          title: values.title,
          url: values.url,
          categoryId: categorySelected.id,
        })
          .then(() => {
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do vídeo"
          name="title"
          value={values.title}
          onChange={handleChange}
        />

        <FormField
          label="Url do vídeo"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="category"
          value={values.category}
          onChange={handleChange}
          suggestions={categoriesNames}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/register/category">
        Cadastrar categoria
      </Link>
    </Template>
  );
}

export default RegisterVideo;
