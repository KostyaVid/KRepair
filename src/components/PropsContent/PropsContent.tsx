import s from './PropsContent.module.scss';

const PropsContent = () => {
  return (
    <section className={s.propsContent + ' container'}>
      <div className={s.titleWrap}>
        <h1 className={s.title + ' h2'}>
          Наши<span>Реквизиты</span>
        </h1>
        <p className={s.subTitle}>
          Ниже приведены реквизиты компании, в случае необходимости получения дополнительных
          документов: свидетельства о государственной регистрации, идентификационного номера
          налогоплательщика вы можете обратиться в бухгалтерию предприятия
        </p>
      </div>
      <div className={s.card}>
        <table>
          <tbody>
            <tr>
              <th>Название организации</th>
              <td>
                Российская Федерация, 108814, Москва Г, Сосенское П, П Комунарка, УЛ Александры
                Монаховой, дом 43, корп. 2, кв. 212
              </td>
            </tr>
            <tr>
              <th>Юридический адрес организации</th>
              <td>
                Российская Федерация, 108814, Москва Г, Сосенское П, П Комунарка, УЛ Александры
                Монаховой, дом 43, корп. 2, кв. 212
              </td>
            </tr>
            <tr>
              <th>ИНН</th>
              <td>772378013613</td>
            </tr>
            <tr>
              <th>Расчетный счет</th>
              <td>40802810200003225148</td>
            </tr>
            <tr>
              <th>ОГРН</th>
              <td>322774600275856</td>
            </tr>
            <tr>
              <th>Банк</th>
              <td>АО «Тинькофф Банк»</td>
            </tr>
            <tr>
              <th>БИК банка</th>
              <td>044525974</td>
            </tr>
            <tr>
              <th>ИНН банка</th>
              <td>7710140679</td>
            </tr>
            <tr>
              <th>Юридический адрес банка</th>
              <td>4127287, г. Москва, ул. Хуторская 2-я, д. 38А, стр. 26</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default PropsContent;