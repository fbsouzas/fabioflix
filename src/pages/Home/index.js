import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import categoriesRepository from '../../repositories/categories';
import Template from '../../components/Template';

function Home() {
  const [categoriesWithVideos, setCategoriesWithVideos] = useState([]);

  useEffect(() => {
    categoriesRepository.getAllWithVideos()
      .then((response) => {
        setCategoriesWithVideos(response);
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log(err);
      });
  }, []);

  return (
    <Template paddingAll={0}>
      {categoriesWithVideos.length === 0 && (<div>Loading...</div>)}

      {categoriesWithVideos.map((category, index) => {
        if (index === 0) {
          return (
            <div key={category.id}>
              <BannerMain
                videoTitle={categoriesWithVideos[0].videos[0].title}
                url={categoriesWithVideos[0].videos[0].url}
                videoDescription="O que é front-end? Trabalhando na área"
              />

              <Carousel
                ignoreFirstVideo
                category={categoriesWithVideos[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={category.id}
            category={category}
          />
        );
      })}
    </Template>
  );
}

export default Home;
