import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import s from './Hero.module.scss';

const Hero = () => {
  return (
    <section className={s.hero + ' container'}>
      <div className={s.content}>
        <h1>Сервисный центр</h1>
        <p className={s.subTitle}>по ремонту техники в Москве</p>
        <div className={s.buttons}>
          <Button>
            <a href="tel:+74992262928" className={s.tel}>
              Получить консультацию
            </a>
          </Button>
          <Button color="fill">
            <Link to="/price">Смотреть прайс-лист</Link>
          </Button>
        </div>
      </div>
      <picture>
        <source type="image/webp" srcSet="./images/home/Hero.webp" />
        <img src="./images/home/Hero.png" alt="Сервисный центр" className={s.heroImg} />
      </picture>
    </section>
  );
};

export default Hero;
