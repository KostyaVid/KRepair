import { useState } from 'react';
import Button from '../../Button/Button';
import cn from 'classnames';
import s from './PriceCard.module.scss';

interface innerPrice {
  title: string;
  description?: string;
  price: string[];
}

export interface IPriceCard {
  id?: number;
  name?: string;
  descriptionTitle?: string;
  items?: string[];
  ease?: innerPrice;
  middle?: innerPrice;
  hard?: innerPrice;
}

const PriceCard: React.FC<IPriceCard> = ({
  id,
  name,
  descriptionTitle,
  items,
  ease,
  middle,
  hard,
}: IPriceCard) => {
  const [activePrice, setActivePrice] = useState(false);
  const styleTable = cn(s.bodyCard, { [s.bodyCardActive]: activePrice });
  return (
    <div>
      <div className={s.headerCard + ' container'}>
        <div className={s.title}>
          {name}
          <span>{descriptionTitle}</span>
        </div>
        <div className={s.items}>
          {items?.map((elem, index) => (
            <p className={s.item} key={index}>
              {elem}
            </p>
          ))}
        </div>
        <Button
          color="price"
          onClick={() => {
            setActivePrice(!activePrice);
          }}
          className={s.button}>
          {activePrice ? 'Свернуть' : 'Развернуть'}
        </Button>
      </div>
      <div className={styleTable}>
        <table className={s.table + ' container'}>
          <thead className={s.headerTable}>
            <tr className={s.headerContent}>
              <th className={s.category}>Категория техники</th>
              <th>
                до 15<span>Любитель</span>
              </th>
              <th>
                15-40<span>Полупрофи</span>
              </th>
              <th>
                от 40<span>Профи</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className={s.titleTable}>{ease?.title}</th>
            </tr>
            <tr className={s.tr}>
              <td className={s.titleTr}>{ease?.description}</td>
              <td>{ease?.price[0]}</td>
              <td>{ease?.price[1]}</td>
              <td>{ease?.price[2]}</td>
            </tr>
            <tr>
              <th className={s.titleTable}>{middle?.title}</th>
            </tr>
            <tr className={s.tr}>
              <td className={s.titleTr}>{middle?.description}</td>
              <td>{middle?.price[0]}</td>
              <td>{middle?.price[1]}</td>
              <td>{middle?.price[2]}</td>
            </tr>
            <tr>
              <th className={s.titleTable}>{hard?.title}</th>
            </tr>
            <tr className={s.tr}>
              <td className={s.titleTr}>{hard?.description}</td>
              <td>{hard?.price[0]}</td>
              <td>{hard?.price[1]}</td>
              <td>{hard?.price[2]}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PriceCard;
