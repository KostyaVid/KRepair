import FeatureCard from './FeatureCard/FeatureCard';
import { featureCards } from './featureCards';
import s from './Features.module.scss';

const Features = () => {
  return (
    <section className={s.features}>
      <div className="container">
        <div className={s.containerTitle}>
          <h2>
            Наши <span>Преимущества</span>
          </h2>
          <p className={s.subTitle}>
            Сервисный центр KRepair является клиентоориентированным, на первом месте у нас
            гарантированное качественное и надежное решение задач клиента
          </p>
        </div>
        <div className={s.cards}>
          {featureCards.map((elem) => (
            <FeatureCard {...elem} key={elem.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
