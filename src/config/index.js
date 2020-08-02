const URL_BACKEND = window.location.hostname.includes('localhost')
  ? 'http://localhost:3001'
  : 'mudar a url para produção aqui';

export default {
  URL_BACKEND,
};
