import { Link } from 'react-router-dom';
import { Map, Placemark } from 'react-yandex-maps';
import s from './MapFooter.module.scss';

interface IMap {
  props?: boolean;
}

const MapFooter = ({ props }: IMap) => {
  return (
    <section className={s.map}>
      <address className={s.cardWrap}>
        {props ? (
          <h1 className="h2">
            <span>Наши</span>Контакты
          </h1>
        ) : (
          <img alt="KRepair" src="/images/logoMenu.svg" className={s.imgMapLogo} />
        )}
        <p>Москва, ул Шарикоподшипниковская д.4 к.4а</p>
        <p>info@krepair.ru</p>
        <p className={s.phone}>+7 499 226 29 28</p>
        {props && (
          <Link to="/contacts/props" className={s.props}>
            Реквизиты
          </Link>
        )}
      </address>
      <Map
        defaultState={{ center: [55.720687, 37.668], zoom: 15, controls: ['zoomControl'] }}
        modules={['control.ZoomControl']}
        width="100%"
        height="70vh">
        <Placemark
          defaultGeometry={[55.720687, 37.671579]}
          options={{ iconColor: '#F03957', preset: 'islands#dotIcon' }}
          properties={{ iconCaption: 'KRepair' }}
        />
      </Map>
    </section>
  );
};

export default MapFooter;
