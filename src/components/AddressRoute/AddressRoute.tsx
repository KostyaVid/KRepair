import cn from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import s from './AddressRoute.module.scss';

interface IAddressRoute {
  className?: string;
}

const AddressRoute = ({ className }: IAddressRoute) => {
  function defAddress() {
    switch (location.pathname) {
      case '/service':
        return 'Услуги';
      case '/about':
        return 'О компании';
      case '/contacts':
        return 'Контакты';
      case '/audio':
        return 'Ремонт аудиотехники';
      case '/price':
        return 'Прайс-лист';
      case '/contacts/props':
        return 'Контакты / Реквизиты';
      default:
        return '';
    }
  }
  const location = useLocation();
  const addressString = defAddress();
  const style = cn(s.addressRoute, className);
  return (
    <div className={style}>
      <Link to="/home">Главная</Link>
      <span className={s.gap}>/</span>
      {addressString}
    </div>
  );
};

export default AddressRoute;
