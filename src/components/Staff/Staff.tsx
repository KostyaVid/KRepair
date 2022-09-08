import { useState, useEffect } from 'react';
import s from './Staff.module.scss';
import StaffCard, { IStaffCard } from './StaffCard/StaffCard';

const Staff = () => {
  const [cards, setCards] = useState<Array<IStaffCard | null>>([null, null, null]);

  async function fetchCards() {
    try {
      const res = await fetch('/dataStaff.json');
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
    <section className={s.staff + ' container'}>
      <h2>
        Наши<span> сотрудники</span>
      </h2>
      <div className={s.cards}>
        {cards.map((elem, index) => (
          <StaffCard {...elem} key={elem ? elem.id : 'id' + index} />
        ))}
      </div>
    </section>
  );
};

export default Staff;
