import { render, screen } from '@testing-library/react';
import Card from './Card/Card';
import CardsLists from './CardsLists';

const data = [
  {
    id: 1,
    name: 'Супер герой',
    description: 'Уточка супер героя для самых бесстрашных',
    fullDescription: 'Уточка супер героя для самых бесстрашных',
    category: 'senior',
    gender: 'мальчик',
    price: 100,
    stock: 2,
    image: 'https://i.ibb.co/dBbR86R/super-geroi.jpg',
    image2: 'https://i.ibb.co/kKqvbS6/super-geroi1.jpg',
    alt: 'super-geroi',
    raiting: 9,
    count: 0,
  },
  {
    id: 2,
    name: 'Супер героиня',
    description: 'Уточка для самых смелых девушек программистов',
    fullDescription:
      'По статистике девушек программистов гораздо меньше, чем парней! Решила стать программистом? Значит ты уже наполовину супер-героиня ) Утка будет с тобой на всем пути. Когда слезы из глаз, ничего не работает - подаст платок и вернет тебя за код! Обладает 80 level вдохновения, умеет объяснять сложно написанные статьи по программированию на понятном для тебя языке. Внимание! Дружит с уткой супер-героя! 14 февраля любят проводить вместе',
    category: 'senior',
    gender: 'девочка',
    price: 120,
    stock: 6,
    image: 'https://i.ibb.co/k95TNGc/super-geroinja.jpg',
    image2: 'https://i.ibb.co/ZWQ9gC1/super-geroinja1.jpg',
    alt: 'super-geroinja',
    raiting: 9,
    count: 0,
  },
];
describe('CardsLists', () => {
  it(' cards amount should be 21', () => {
    render(<CardsLists />, screen);
    let card = screen.queryAllByTestId('card');
    expect(card).toHaveLength(21);
  });
});
