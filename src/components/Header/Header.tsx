import cn from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import s from './Header.module.scss';

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const refMenu = useRef<HTMLElement>(null);
  const menuStyle = cn(s.menu, { [s.menuActive]: activeMenu });

  function clickOverlay() {
    if (activeMenu) {
      setActiveMenu(false);
    }
  }

  function resize() {
    if (document.body.clientWidth > 577) {
      if (activeMenu) setActiveMenu(false);
    }
  }

  useEffect(() => {
    if (activeMenu) {
      window.addEventListener('resize', resize);
      document.body.style.overflow = 'hidden';
      return () => {
        window.removeEventListener('resize', resize);
        document.body.style.overflow = 'auto';
      };
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [activeMenu]);

  return (
    <header className={s.header + ' container'}>
      <Link to="/home">
        <img src="/images/logo.svg" className={s.logo} alt="KRepair" />
      </Link>
      <nav ref={refMenu} className={menuStyle} onClick={clickOverlay}>
        <div
          aria-label="Close"
          className={s.closeMenu}
          onClick={() => {
            setActiveMenu(false);
          }}>
          <Link to="/home">
            <img src="./images/logoMenu.svg" className={s.logoMenu} alt="krepair" />
          </Link>
        </div>
        <ul className={s.links}>
          <li>
            <NavLink
              to="/service"
              className={({ isActive }) => (isActive ? s.activeLink : undefined)}>
              Услуги
            </NavLink>
          </li>
          <li className={s.linkMobile}>
            <NavLink
              to="/audio"
              className={({ isActive }) => (isActive ? s.activeLink : undefined)}>
              Ремонт аудио техники
            </NavLink>
          </li>
          <li className={s.linkMobile}>
            <NavLink to="/audio">Ремонт видео техники</NavLink>
          </li>
          <li className={s.linkMobile}>
            <NavLink to="/audio">Ремонт телефонов</NavLink>
          </li>
          <li className={s.linkMobile}>
            <NavLink to="/audio">Ремонт электротранспорта</NavLink>
          </li>
          <li>
            <NavLink
              to="/price"
              className={({ isActive }) => (isActive ? s.activeLink : undefined)}>
              Прайс-лист
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? s.activeLink : undefined)}>
              О компании
            </NavLink>
          </li>
          <NavLink
            to="/contacts"
            className={({ isActive }) => (isActive ? s.activeLink : undefined)}>
            Контакты
          </NavLink>
        </ul>
      </nav>
      <a href="tel:+74992262928" className={s.tel}>
        +7 499 226 29 28
      </a>
      <div
        aria-label="Menu"
        className={s.burger}
        onClick={() => {
          setActiveMenu(true);
        }}>
        <svg
          className={s.burgerSVG}
          width="25"
          height="19"
          viewBox="0 0 25 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <line y1="1.5" x2="25" y2="1.5" stroke="black" strokeWidth="3" />
          <line y1="9.5" x2="25" y2="9.5" stroke="black" strokeWidth="3" />
          <line y1="17.5" x2="25" y2="17.5" stroke="black" strokeWidth="3" />
        </svg>
      </div>
    </header>
  );
};

export default Header;
