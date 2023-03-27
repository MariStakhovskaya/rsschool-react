import React from 'react';
import { Component } from 'react';
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

class Card extends Component<propsType> {
  constructor(props: propsType) {
    super(props);
  }
  render() {
    return (
      <div className={style.cardContainer} data-testid="card">
        <div>
          <img src={this.props.duck.image} alt={this.props.duck.alt} />
        </div>
        <div className={style.cardName}>{this.props.duck.name}</div>
        <div>Price: {this.props.duck.price}</div>
        <div>Rating: {this.props.duck.raiting}</div>
        <div>Stock: {this.props.duck.stock}</div>
      </div>
    );
  }
}

export default Card;
