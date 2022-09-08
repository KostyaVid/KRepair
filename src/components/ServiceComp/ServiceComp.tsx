import React, { useEffect, useState } from 'react';
import AddressRoute from '../AddressRoute/AddressRoute';
import { IHomeCard } from '../HomeCard/HomeCard';
import ServiceCard from './ServiceCard/ServiceCard';
import s from './ServiceComp.module.scss';

const ServiceComp = () => {
  const [cards, setCards] = useState<Array<IHomeCard | null>>([null, null, null, null, null]);
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
    fetchCards();
  }, []);

  return (
    <section className={s.serviceComp}>
      <div className={s.wrap + ' container'}>
        <AddressRoute className={s.address} />
        <div className={s.titleWrap}>
          <h1 className={s.title + ' h2'}>
            услуги нашего<span>сервиса</span>
          </h1>
          <p className={s.subTitle}>
            Наша компания оказывает полный спектр услуг, имеет надежную репутация, и успела
            завоевать доверие и расположение своих клиентов
          </p>
        </div>
        <div className={s.cards}>
          {cards.map((elem, index) => (
            <ServiceCard {...elem} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceComp;
