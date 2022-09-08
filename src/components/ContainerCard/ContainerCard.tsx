import React, { ReactNode } from 'react';
import cn from 'classnames';
import s from './ContainerCard.module.scss';

type ContainerCardProps = {
  children: ReactNode;
  className?: string;
};

const ContainerCard = ({ children, className }: ContainerCardProps) => {
  const style = cn(s.containerCard, className);
  return <article className={style}>{children}</article>;
};

export default ContainerCard;
