import AddressRoute from '../AddressRoute/AddressRoute';
import s from './AudioContent.module.scss';

const AudioContent = () => {
  return (
    <section className={s.audioContent}>
      <div className="container">
        <AddressRoute />
        <div className={s.title}>
          <h1 className="h2">
            Ремонт<span>аудиотехники</span>
          </h1>
          <p className={s.subTitle}>
            Мы выполняем качественный ремонт аудиотехники, включая колонки, усилители и прочее
            оборудование, выдаем гарантию и имеем необходимые запчасти в наличие
          </p>
        </div>
        <div className={s.cards}>
          <div className={s.card}>Ремонт микрофонов</div>
          <div className={s.card}>Ремонт радиосистем</div>
          <div className={s.card}>Ремонт рекордеров</div>
          <div className={s.card}>Ремонт радиосинхронизаторов</div>
        </div>
        <section className={s.what}>
          <h2>
            Что мы<span className={s.span}> ремонтируем</span>
          </h2>
          <div className={s.cardsWhat}>
            <p>
              Мы специализируемся на ремонте сценических и студийных микрофонов, хорошо разбираемся
              в особенностях работы как проводных, так и беспроводных версий. Нередко у них
              возникает поломка конденсатора, отходят контакты, теряется радиосвязь. Такое случается
              из-за окисления материалов или после падения. Проблема может проявляться в виде
              посторонних шумов (шипение, клацание) или отсутствии звука на принимающем устройстве.
            </p>
            <p>
              Часто к нам обращаются за ремонтом рекордеров, используемых для студийной и
              внестудийной записи звука. У такого оборудования могут быть программные ошибки,
              неправильные настройки, сбои, которые наши мастера обнаружат и устранят. Ремонт аудио
              аппаратуры может потребовать замены привода для записи на диск или установки другого
              носителя, иногда требуется пайка нового преобразователя сигнала и других узлов. Все
              это есть у нас в сервисе аудиотехники, что поможет сэкономить ваше время.
            </p>
            <p>
              Наш специалист выполнит диагностику устройства, найдет причину поломки, озвучит, какой
              ремонт звукового оборудования потребуется, и назовет цену. Приступаем к работе только
              после согласования стоимости с клиентом.
            </p>
            <p>
              Ремонт аудио колонок нуждается в замене динамиков (всех или только отдельных),
              восстановлении электрической цепи, устранении вибраций и дребезжания для обеспечения
              чистого акустического эффекта. Все это выполнят наши специалисты.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default AudioContent;
