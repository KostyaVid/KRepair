import { Link, NavLink } from 'react-router-dom';
import s from './SubFooter.module.scss';

const SubFooter = () => {
  return (
    <section className={s.subFooter}>
      <div className={s.wrapper + ' container'}>
        <Link to="/home" className={s.logoLink} reloadDocument>
          <img alt="KRepair" src="/images/logoMenu.svg" className={s.imgSubLogo} />
        </Link>

        <nav>
          <ul className={s.links}>
            <li>
              <NavLink to="/price" reloadDocument>
                Прайс-лист
              </NavLink>
            </li>
            <li>
              <NavLink to="/service" reloadDocument>
                Услуги
              </NavLink>
            </li>
            <li>
              <NavLink to="/audio" reloadDocument>
                Ремонт телефонов
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" reloadDocument>
                О компании
              </NavLink>
            </li>
            <li>
              <NavLink to="/audio" reloadDocument>
                Ремонт аудио техники
              </NavLink>
            </li>
            <NavLink to="/contacts" reloadDocument>
              Контакты
            </NavLink>
            <li>
              <NavLink to="/audio" reloadDocument>
                Ремонт видео техники
              </NavLink>
            </li>
            <li>
              <NavLink to="/audio" reloadDocument>
                Ремонт электротранспорта
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" reloadDocument>
                Политика конфиденциальности
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default SubFooter;
