import Button from '../../Button/Button';
import Clip from '../../Clip/Clip';
import s from './Question.module.scss';

const Question = () => {
  return (
    <section className={s.question}>
      <div className={s.container + ' container'}>
        <div className={s.header}>
          <h2 className={s.title}>
            У вас остались
            <span>вопросы?</span>
          </h2>
          <p className={s.description}>Оставьте заявку, мы свяжемся с вами и ответим на них</p>
        </div>
        <form className={s.form} action="">
          <div className={s.inputs}>
            <div className={s.mainInputs}>
              <input placeholder="Ваше имя" name="name" required type="text" />
              <input placeholder="E-mail" name="email" type="email" required />
              <input placeholder="Телефон*" name="phone" type="tel" required />
            </div>
            <textarea
              className={s.inputProblem}
              placeholder="Опишите проблему и добавьте видео неисправности"
              name="problem"
              required
            />
            <Clip id="idInputFile" />
          </div>
          <Button type="submit" className={s.button}>
            Оставить заявку
          </Button>
          <p className={s.warning}>
            Нажимая на данную кнопку вы соглашаетесь с политикой конфиденциальности
          </p>
        </form>
      </div>
    </section>
  );
};

export default Question;
