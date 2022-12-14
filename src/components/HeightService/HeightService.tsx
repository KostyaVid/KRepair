import s from './HeightService.module.scss';

const HeightService = () => {
  return (
    <section className={s.heightService + ' container'}>
      <h2>
        Высокий уровень сервиса<span>не вставая с дивана</span>
      </h2>
      <div className={s.card}>
        <p className={s.title}>
          Создавайте заявки на ремонт в личном кабинете, присылайте видео неисправности и получите
          предварительную диагностику
        </p>
        <p className={s.description}>
          Чтобы сдать оборудование в ремонт, вам придется прогуляться лишь до входной двери вашего
          жилища. Не важно где вы живете, создавайте заявку на забор оборудования в ремонт со сдачей
          курьеру или в ближайший пункт выдачи, если неудобно везти устройство к нам. У вас
          останется опись и подтверждение факта отправки от транспортной компании.
        </p>
      </div>
      <div className={s.card}>
        <p className={s.title}>
          Наблюдайте за ходом ремонта в личном кабинете и оплачивайте ее по факту проведения при
          получении
        </p>
        <p className={s.description}>
          Все отремонтированные устройства получат гарантию на проделанные работы, которая будет
          отображаться в личном кабинете. В гарантийном случае не потребуются никакие бумажки, вся
          информация есть у нас в системе и у вас в личном кабинете.
        </p>
      </div>
    </section>
  );
};

export default HeightService;
