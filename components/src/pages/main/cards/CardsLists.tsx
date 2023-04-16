import Card, { cardModalType } from './Card/Card';

import style from './CardsLists.module.css';

import React, { useState } from 'react';

import Modal from 'widgets/modal/Modal';
import { useSelector } from 'react-redux';
import { cards } from 'app/store/slices/cardsSlice';

function CardsLists() {
  const cardsState = useSelector(cards);
  const [active, setActive] = useState<boolean>(false);
  const [modalCard, setModalCard] = useState<cardModalType>();

  return (
    <div className={style.cardsListContainer}>
      {cardsState?.length === 0 ? (
        <div>По вашему запросу ничего не найдено</div>
      ) : (
        cardsState?.map((card, index) => (
          <Card key={index} cards={card} setActive={setActive} setModalCard={setModalCard} />
        ))
      )}
      {active ? <Modal active={active} setActive={setActive} modalCard={modalCard} /> : ''}
    </div>
  );
}

export default CardsLists;
