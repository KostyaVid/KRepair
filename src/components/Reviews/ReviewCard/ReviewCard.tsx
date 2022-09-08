import React, { useState } from 'react';
import Button from '../../Button/Button';
import s from './ReviewCard.module.scss';
import Star from './Star/Star';

export interface IReviewCard {
  id?: number;
  name?: string;
  date?: string;
  text?: string;
  soc?: 'google' | 'yandex';
  star?: number;
}

const ReviewCard: React.FC<IReviewCard> = ({ name, date, text, soc, star }: IReviewCard) => {
  const [fullText, setFullText] = useState(false);
  function onClick() {
    setFullText(!fullText);
  }
  let icon: string;
  if (soc === 'google') {
    icon = './images/reviews/google_maps.svg';
  } else {
    icon = './images/reviews/Yandex_Maps.svg';
  }
  const stars = [false, false, false, false, false];
  if (star) {
    for (let i = 0; i < star; i++) {
      stars[i] = true;
    }
  }
  const miniText = text ? text.slice(0, 130) : 'Загрузка...';

  return (
    <article className={s.reviewCard}>
      <h3 className={s.name}>{name ? name : 'Загрузка'}</h3>
      <p className={s.date}>{date ? date : '00-00-0000'}</p>
      <p className={s.text}>{fullText ? text : miniText + '...'}</p>
      <img className={s.img} src={icon} alt={soc} />
      <div className={s.stars}>
        {stars.map((elem, index) => (
          <Star empty={elem} key={index} />
        ))}
      </div>
      <Button color="clear" onClick={onClick} className={s.button}>
        Читать полностью
      </Button>
    </article>
  );
};

export default ReviewCard;
