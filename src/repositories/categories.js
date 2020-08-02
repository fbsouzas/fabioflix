import config from '../config';

const urlCategories = `${config.URL_BACKEND}/categories`;

function getAll() {
  return fetch(`${urlCategories}`)
    .then(async (response) => {
      if (response.ok) {
        const categories = await response.json();

        return categories;
      }

      throw new Error('Internal server error');
    });
}

function getAllWithVideos() {
  return fetch(`${urlCategories}?_embed=videos`)
    .then(async (response) => {
      if (response.ok) {
        const categories = await response.json();

        return categories;
      }

      throw new Error('Internal server error');
    });
}

export default {
  getAll,
  getAllWithVideos,
};
