import { useEffect, useState } from 'react';
import PriceCard, { IPriceCard } from './PriceCard/PriceCard';
import s from './PriceContent.module.scss';

const PriceContent = () => {
  const [cards, setCards] = useState<Array<IPriceCard | null>>([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);
  async function fetchCards() {
    try {
      const res = await fetch('/dataPrice.json');
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
    <section>
      <h1 className={s.title + ' h2 container'}>
        Прайс-<span className={s.titleSpan}>лист</span>
      </h1>
      {cards.map((elem, index) => (
        <PriceCard key={elem ? elem.id : 'id' + index} {...elem} />
      ))}
    </section>
  );
};

export default PriceContent;
