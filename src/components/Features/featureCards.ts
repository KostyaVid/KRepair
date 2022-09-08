export interface IFeatureCard {
  id: number;
  title: string;
  description: string;
  urlIcon: string;
  color: string;
  colorText: string;
}

export const featureCards: Array<IFeatureCard> = [
  {
    id: 0,
    title: 'Удаленная диагностика',
    description:
      'Проведем предварительную диагностику по видео с неисправностью от клиента и сориентируем по стоимости ремонта',
    urlIcon: './images/feature/net.svg',
    color: '#C4C4C4',
    colorText: '#000000',
  },
  {
    id: 1,
    title: 'Покажем причины неисправности',
    description:
      'Сделаем бесплатную диагностику и предоставим видео запись. Инжинер даст комментарии о причинах неисправности, чтобы у вас не осталось сомнений',
    urlIcon: './images/feature/paper.svg',
    color: '#525252',
    colorText: '#FFFFFF',
  },
  {
    id: 2,
    title: 'Прозрачная цена',
    description:
      'Заранее согласуем цену, честную и конкурентную, которая соответствует цене в прайс-листе на нашем сайте ',
    urlIcon: './images/feature/cash.svg',
    color: '#D4636B',
    colorText: '#FFFFFF',
  },
];
