import { useEffect, useState } from 'react';
import ReviewCard, { IReviewCard } from './ReviewCard/ReviewCard';
import s from './Reviews.module.scss';

const Reviews = () => {
  const [cards, setCards] = useState<Array<IReviewCard | null>>([null, null, null]);
  async function fetchCards() {
    try {
      const res = await fetch('./dataReviews.json');
      const data = await res.json();
      if (data) setCards(data);
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <section className={s.reviews}>
      <div className={s.wrap + ' container'}>
        <h2>
          Отзывы наших<span>клиентов</span>
        </h2>
        <div className={s.cards}>
          {cards.map((elem, index) => (
            <ReviewCard {...elem} key={elem ? elem.id : 'id' + index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
