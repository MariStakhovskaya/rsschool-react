import React from 'react';

import style from './Card.module.css';

import { cardsStateType } from 'pages/main/Main';
import { api_client } from 'pages/main/constants/api';
export type cardModalType = {
  id: string;
  description: string;
  urls: { regular: string };
  user: { name: string; profile_image: { medium: string } };
  location: { name: string };
  tags: Array<{ title: string }>;
  likes: number;
  created_at: string;
};

type propsType = {
  cards: cardsStateType;
  setActive: (active: boolean) => void;
  setModalCard: (modalCard: cardModalType) => void;
};

function Card({ cards, setActive, setModalCard }: propsType) {
  const onClickHandler = () => {
    try {
      fetch(`https://api.unsplash.com/photos/${cards.id}?client_id=${api_client}`)
        .then((response) => response.json())
        .then((data) => {
          setModalCard(data);
          console.log(data);
          setActive(true);
        });
    } catch {
      console.log('some error');
    }
  };
  return (
    <div className={style.cardContainer} data-testid="card" onClick={onClickHandler}>
      <div>
        <img src={cards.urls.regular} alt="photo" />
      </div>
      <div>Name: {cards.user.name}</div>
      <div>Likes: {cards.likes}</div>
    </div>
  );
}

export default Card;
