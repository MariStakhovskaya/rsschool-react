import Card, { cardModalType } from './Card/Card';

import style from './CardsLists.module.css';

import React, { useState } from 'react';

import { cardsStateType } from '../Main';
import Modal from 'widgets/modal/Modal';

type propsType = {
  cards: Array<cardsStateType>;
};

function CardsLists({ cards }: propsType) {
  const [active, setActive] = useState<boolean>(false);
  const [modalCard, setModalCard] = useState<cardModalType>();

  return (
    <div className={style.cardsListContainer}>
      {cards.length === 0 ? (
        <div>По вашему запросу ничего не найдено</div>
      ) : (
        cards.map((card) => (
          <Card key={card.id} cards={card} setActive={setActive} setModalCard={setModalCard} />
        ))
      )}
      {active ? <Modal active={active} setActive={setActive} modalCard={modalCard} /> : ''}
    </div>
  );
}

export default CardsLists;
