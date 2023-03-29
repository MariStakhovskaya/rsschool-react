import Card from './Card/Card';

import style from './CardsLists.module.css';

import React from 'react';

import data from '../../../app/data/data.json';

function CardsLists() {
  return (
    <div className={style.cardsListContainer}>
      {data.map((card) => (
        <Card key={card.id} duck={card} />
      ))}
    </div>
  );
}

export default CardsLists;
