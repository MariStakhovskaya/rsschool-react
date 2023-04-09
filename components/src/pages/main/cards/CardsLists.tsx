import Card, { cardModalType } from './Card/Card';

import style from './CardsLists.module.css';

import React, { useState } from 'react';

import { cardsStateType } from '../Main';
import Modal from 'widgets/modal/Modal';
import icon from '../../../assets/icon.png';

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
      {active ? (
        <Modal active={active} setActive={setActive}>
          {modalCard && (
            <div className={style.modalInfo}>
              <div className={style.modalInfo__left}>
                <div className={`${style.imgContainer} + ${style.exmpl}`}>
                  <img src={modalCard.urls.regular} />
                </div>
                <div>
                  <h5>{new Date(modalCard.created_at).getDay()}</h5>
                  <h6>{new Date(modalCard.created_at).toLocaleString('en', { month: 'long' })}</h6>
                </div>
                <div className={style.iconLike}>
                  <img src={icon} />
                  <span>{modalCard.likes}</span>
                </div>
              </div>
              <div className={style.modalInfo__right}>
                <div className={style.closeModal} onClick={() => setActive(false)}>
                  x
                </div>
                <div className={style.userInfo}>
                  <div>
                    <img src={modalCard.user.profile_image.medium} />
                  </div>
                  <div className={style.userInfoName}>
                    <div>
                      <b>Autor: </b> {modalCard.user.name}
                    </div>
                    <div>
                      <b>Location: </b> {modalCard.location.name}
                    </div>
                  </div>
                </div>
                <div className={style.separator}></div>
                <div>
                  <b>Description: </b>
                  <div>
                    {modalCard.description === null ? 'no descriprion' : modalCard.description}
                  </div>
                </div>
                <div className={style.tags}>
                  <b>Tags: </b>
                  {modalCard.tags.map((tag, index) => (
                    <div key={index}>{' ' + '#' + tag.title + ' '}</div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </Modal>
      ) : (
        ''
      )}
    </div>
  );
}

export default CardsLists;
