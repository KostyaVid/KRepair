import React from 'react';
import s from './Star.module.scss';

interface IStar {
  empty: boolean;
}

const Star: React.FC<IStar> = ({ empty }: IStar) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={s.star}>
      <path
        d="M12.8885 1L15.91 8.59493L23.9996 9.14861L17.7773 14.3962L19.7555 22.3333L12.8885 17.9816L6.02141 22.3333L7.99957 14.3962L1.77734 9.14861L9.86695 8.59493L12.8885 1Z"
        stroke="#FEC12A"
        fill="none"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={empty ? s.empty : ''}
      />
    </svg>
  );
};

export default Star;
