import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import ContainerCard from '../ContainerCard/ContainerCard';
import cn from 'classnames';
import s from './Home.module.scss';

export interface IHomeCard {
  title?: string;
  titleRed?: string;
  description?: string;
  urlLink?: string;
  urlImgWithoutExtension?: string;
  items?: string[];
}

const HomeCard: React.FC<IHomeCard & { reverse?: boolean }> = ({
  title,
  titleRed,
  description,
  urlLink,
  urlImgWithoutExtension,
  reverse = false,
}: IHomeCard & { reverse?: boolean }) => {
  const styleReverse = cn(s.homeCard, { [s.reverse]: reverse });
  const styleEmpty = cn(s.textContainer, { [s.emptyContainer]: !title, [s.empty]: !title });
  return (
    <ContainerCard>
      <div className={styleReverse}>
        <div className={styleEmpty}>
          <h3>
            {title + ' '}
            <span>{titleRed}</span>
          </h3>
          <p className={s.description}>{description}</p>
          {urlLink && (
            <Link to={urlLink} reloadDocument>
              <Button color="fill">Подробнее</Button>
            </Link>
          )}
        </div>
        {title ? (
          <picture>
            <source srcSet={urlImgWithoutExtension + '.webp'} type="image/webp" />
            <img src={urlImgWithoutExtension + '.jpg'} alt={titleRed} className={s.img} />
          </picture>
        ) : (
          <div className={[s.img, s.empty].join(' ')}></div>
        )}
      </div>
    </ContainerCard>
  );
};

export default React.memo(HomeCard);
