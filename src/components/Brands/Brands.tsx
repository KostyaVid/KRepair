import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import s from './Brands.module.scss';
import './Brands.scss';

import { Pagination } from 'swiper';

const brands: Array<{ id: number; name: string; urlWithoutExt: string }> = [
  {
    id: 0,
    name: 'aputure',
    urlWithoutExt: './images/brands/aputure',
  },
  {
    id: 1,
    name: 'artisans',
    urlWithoutExt: './images/brands/artisans',
  },
  {
    id: 2,
    name: 'boling',
    urlWithoutExt: './images/brands/boling',
  },
  {
    id: 3,
    name: 'cvw',
    urlWithoutExt: './images/brands/cvw',
  },
  {
    id: 4,
    name: 'deity',
    urlWithoutExt: './images/brands/deity',
  },
  {
    id: 5,
    name: 'feelworld',
    urlWithoutExt: './images/brands/feelworld',
  },
  {
    id: 6,
    name: 'godox',
    urlWithoutExt: './images/brands/godox',
  },
  {
    id: 7,
    name: 'nikon',
    urlWithoutExt: './images/brands/nikon',
  },
  {
    id: 8,
    name: 'portkeys',
    urlWithoutExt: './images/brands/portkeys',
  },
  {
    id: 9,
    name: 'sirui',
    urlWithoutExt: './images/brands/sirui',
  },
  {
    id: 10,
    name: 'sony',
    urlWithoutExt: './images/brands/sony',
  },
  {
    id: 11,
    name: 'synco',
    urlWithoutExt: './images/brands/synco',
  },
];

const Brands = () => {
  function initSize() {
    if (document.body.clientWidth > 769) {
      return 4;
    }
    if (document.body.clientWidth > 577) {
      return 3;
    }
    return 2;
  }
  const [slidesPerView, setSlidesPerView] = useState(initSize());
  function resize() {
    setSlidesPerView(initSize());
  }

  useEffect(() => {
    window.addEventListener('resize', resize);
    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section className={s.brands}>
      <div className={s.wrap + ' container'}>
        <h2>
          Мы работаем с этими брендами<span>и не только</span>
        </h2>
        <Swiper
          slidesPerView={slidesPerView}
          spaceBetween={30}
          slidesOffsetAfter={20}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className={s.swiperBrand}>
          {brands.map((elem) => (
            <SwiperSlide key={elem.id} className={s.brandWrap}>
              <picture>
                <source srcSet={elem.urlWithoutExt + '.webp'} type="image/webp" />
                <img alt={elem.name} src={elem.urlWithoutExt + '.jpg'} className={s.img} />
              </picture>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Brands;
