import cn from 'classnames';
import s from './Clip.module.scss';

interface IClipProps {
  id: string;
  className?: string;
}

const Clip = ({ id, className }: IClipProps) => {
  const styleLabel = cn(s.labelInputFile, { className: className });
  return (
    <>
      <input type="file" name="file" multiple id={id} className={s.inputFile} />
      <label htmlFor={id} className={styleLabel}>
        <img alt="Загрузить приложения" src="/images/clip.svg" className={s.clip} />
      </label>
    </>
  );
};

export default Clip;
