import React, { useEffect } from 'react';
import style from './Card.module.css';
import { fetchOneCard, isModal } from 'app/store/slices/cardsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from 'app/store/store';

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
export type cardsStateType = {
  description: string;
  id: string;
  urls: { regular: string };
  likes: number;
  user: { name: string };
};

type propsType = {
  cards: cardsStateType;
  setActive: (active: boolean) => void;
};

function Card({ cards, setActive }: propsType) {
  const dispatch = useDispatch<AppDispatch>();
  const isOpenModal = useSelector(isModal);
  useEffect(() => {
    if (isOpenModal) {
      setActive(true);
    }
  }, [isOpenModal, setActive]);

  const onClickHandler = () => {
    const id = cards.id;
    dispatch(fetchOneCard({ id }));
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
