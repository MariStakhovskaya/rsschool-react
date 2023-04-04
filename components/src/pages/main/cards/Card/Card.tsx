import React from 'react';

import style from './Card.module.css';

import { CardType } from './types';

type propsType = {
  duck: CardType;
};

function Card({ duck }: propsType) {
  return (
    <div className={style.cardContainer} data-testid="card">
      <div>
        <img src={duck.image} alt={duck.alt} />
      </div>
      <div className={style.cardName}>{duck.name}</div>
      <div>Price: {duck.price}</div>
      <div>Rating: {duck.raiting}</div>
      <div>Stock: {duck.stock}</div>
    </div>
  );
}

export default Card;
