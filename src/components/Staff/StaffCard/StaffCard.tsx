import s from './StaffCard.module.scss';

export interface IStaffCard {
  id?: number;
  name?: string;
  job?: string;
  description?: string;
  urlImgWithoutExtension?: string;
}

const StaffCard: React.FC<IStaffCard> = ({
  id,
  name,
  job,
  description,
  urlImgWithoutExtension,
}: IStaffCard) => {
  return (
    <article className={s.staffCard}>
      <picture>
        <source srcSet={urlImgWithoutExtension + '.webp'} type="image/webp" />
        <img src={urlImgWithoutExtension + '.jpg'} alt={name} className={s.img} />
      </picture>
      <h3 className={s.title}>{name}</h3>
      <p className={s.job}>{job}</p>
      <p className={s.description}>{description}</p>
    </article>
  );
};

export default StaffCard;
