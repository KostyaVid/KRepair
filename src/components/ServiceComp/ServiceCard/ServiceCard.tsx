import ContainerCard from '../../ContainerCard/ContainerCard';
import { IHomeCard } from '../../HomeCard/HomeCard';
import s from './ServiceCard.module.scss';

const ServiceCard: React.FC<IHomeCard> = ({
  title,
  titleRed,
  items,
  urlImgWithoutExtension,
}: IHomeCard) => {
  return (
    <ContainerCard>
      <h3>
        {title ? title + ' ' : 'Загрузка'}
        <span>{titleRed ? titleRed : '...'}</span>
      </h3>
      <div className={s.content}>
        <picture>
          <source srcSet={urlImgWithoutExtension + '.webp'} type="image/webp" />
          <img src={urlImgWithoutExtension + '.jpg'} alt={titleRed} className={s.img} />
        </picture>
        <ul className={s.items}>
          {items?.map((elem, index) => (
            <li key={index} className={s.item}>
              {elem}
            </li>
          ))}
        </ul>
      </div>
    </ContainerCard>
  );
};

export default ServiceCard;
