import Card from './Card/Card';

import style from './CardsLists.module.css';

import React from 'react';

import { cardsStateType } from '../Main';

type propsType = {
  cards: Array<cardsStateType>;
};

function CardsLists({ cards }: propsType) {
  return (
    <div className={style.cardsListContainer}>
      {cards.length === 0 ? (
        <div>По вашему запросу ничего не найдено</div>
      ) : (
        cards.map((card) => <Card key={card.id} cards={card} />)
      )}
    </div>
  );
}

export default CardsLists;
