import React from 'react';

import style from './Card.module.css';

import { cardsStateType } from 'pages/main/Main';

type propsType = {
  cards: cardsStateType;
};

function Card({ cards }: propsType) {
  return (
    <div className={style.cardContainer} data-testid="card">
      <div>
        <img src={cards.urls.regular} alt="photo" />
      </div>
      {/* <div className={style.cardName}>{cards.description}</div> */}
      <div>Name: {cards.user.name}</div>
      <div>Likes: {cards.likes}</div>
      {/* <div>Stock: {duck.stock}</div> */}
    </div>
  );
}

export default Card;
