import config from '../config';

const urlVideos = `${config.URL_BACKEND}/videos`;

function create(video) {
  return fetch(urlVideos, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(video),
  })
    .then(async (response) => {
      if (response.ok) {
        const result = await response.json();

        return result;
      }

      throw new Error('Internal server error');
    });
}

export default {
  create,
};
