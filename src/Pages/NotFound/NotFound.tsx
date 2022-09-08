import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import s from './NotFound.module.scss';

const NotFound = () => {
  return (
    <section className={s.notFound + ' container'}>
      <h1 className={s.title}>Ошибка</h1>
      <p className={s.error}>404</p>
      <p className={s.description}>
        Страница не найдена. Не правильно набран адрес или такой страницы не существует
      </p>

      <Button>
        <Link to="/home">Вернуться на главную</Link>
      </Button>
    </section>
  );
};

export default NotFound;
