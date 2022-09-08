import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import HomeCard, { IHomeCard } from '../HomeCard/HomeCard';
import s from './Services.module.scss';

const Services = () => {
  const [cards, setCards] = useState<Array<IHomeCard | null>>([null, null, null, null, null]);
  const { ref, inView } = useInView({
    rootMargin: '10px 0px',
    triggerOnce: true,
    threshold: 0,
  });

  async function fetchCards() {
    try {
      const res = await fetch('/dataHome.json');
      const data = await res.json();
      setCards(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (inView) {
      fetchCards();
    }
  }, [inView]);

  return (
    <section className={s.services}>
      <div className={s.wrap + ' container'}>
        <div className={s.containerTitle}>
          <h2 className={s.title}>
            Наши услуги <span>для вас</span>
          </h2>
          <p className={s.subTitle}>
            Наша компания оказывает полный спектр услуг, имеет надежную репутация, и успела
            завоевать доверие и расположение своих клиентов{' '}
          </p>
        </div>
        <div className={s.cards} ref={ref}>
          {cards &&
            cards.map((elem, index) => (
              <HomeCard {...elem} key={index} reverse={Boolean(index % 2)} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
