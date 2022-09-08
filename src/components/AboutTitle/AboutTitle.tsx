import s from './AboutTitle.module.scss';
import AddressRoute from '../../components/AddressRoute/AddressRoute';
import ContainerCard from '../ContainerCard/ContainerCard';

const AboutTitle = () => {
  return (
    <div className={s.aboutTitle + ' container'}>
      <AddressRoute className={s.address} />
      <div className={s.titleContent}>
        <h1>О компании</h1>
        <p>
          Наша компания более 10 лет на рынке потребительского и профессионального оборудования.
          Занимает лидирующие позиции в своей нише благодаря высокому уровню сервиса и
          беспрецедентной клиентоориентированности.
        </p>
      </div>
      <ContainerCard className={s.card}>
        <p>Мы подобрали опытных инженеров для построения нового высококачественного продукта</p>
        <p>
          Объединив наш опыт в продажах с выстроенными логистическими цепочками, построенными
          отношениями с клиентами и IT-платформой, мы готовы сделать следующий шаг и достичь нашей
          цели по созданию лучшенр сервиса на рынке
        </p>
      </ContainerCard>
    </div>
  );
};

export default AboutTitle;
