import React from 'react';
import style from './Card.module.css';

type CardType = {
  id: number;
  name: string;
  description: string;
  fullDescription: string;
  category: string;
  gender: string;
  price: number;
  stock: number;
  image: string;
  image2: string;
  alt: string;
  raiting: number;
};

type propsType = {
  duck: CardType;
};

function Card(props: propsType) {
  return (
    <div className={style.cardContainer} data-testid="card">
      <div>
        <img src={props.duck.image} alt={props.duck.alt} />
      </div>
      <div className={style.cardName}>{props.duck.name}</div>
      <div>Price: {props.duck.price}</div>
      <div>Rating: {props.duck.raiting}</div>
      <div>Stock: {props.duck.stock}</div>
    </div>
  );
}

export default Card;
