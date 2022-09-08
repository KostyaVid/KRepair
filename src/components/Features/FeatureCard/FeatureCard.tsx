import React from 'react';
import { IFeatureCard } from '../featureCards';
import s from './FeaturedCard.module.scss';

const FeatureCard: React.FC<IFeatureCard> = ({
  title,
  description,
  urlIcon,
  color,
  colorText,
}: IFeatureCard) => {
  return (
    <section className={s.featureCard} style={{ backgroundColor: color, color: colorText }}>
      <img alt={title} src={urlIcon} className={s.icon} />
      <h3 className={s.title}>{title}</h3>
      <p className={s.description}>{description}</p>
    </section>
  );
};

export default React.memo(FeatureCard);
