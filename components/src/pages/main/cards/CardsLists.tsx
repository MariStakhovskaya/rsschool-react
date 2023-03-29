import React from 'react';
import data from '../../../app/data/data.json';
import Card from './Card/Card';
import style from './CardsLists.module.css';

function CardsLists() {
  return (
    <div className={style.cardsListContainer}>
      {data.map((d) => (
        <div key={d.id}>
          <Card duck={d} />
        </div>
      ))}
    </div>
  );
}

export default CardsLists;
