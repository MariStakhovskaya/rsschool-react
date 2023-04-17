import React from 'react';
import style from './Modal.module.css';
import icon from '../../assets/icon.png';
import { useDispatch, useSelector } from 'react-redux';
import { card, changeIsModalStatus } from 'app/store/slices/cardsSlice';
import { AppDispatch } from 'app/store/store';

type modalPropsType = {
  active: boolean;
  setActive: (active: boolean) => void;
};

const Modal = ({ active, setActive }: modalPropsType) => {
  const dispatch = useDispatch<AppDispatch>();

  const onClickHandler = () => {
    setActive(false);
    dispatch(changeIsModalStatus(false));
  };
  const modalCard = useSelector(card);
  return (
    <div
      className={active ? `${style.modal + ' ' + style.active}` : style.modal}
      onClick={onClickHandler}
    >
      <div
        className={active ? `${style.modalContent} ${style.active}` : style.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {modalCard && (
          <div className={style.modalInfo}>
            <div className={style.modalInfo__left}>
              <div className={`${style.imgContainer} + ${style.exmpl}`}>
                <img src={modalCard.urls.regular} />
              </div>
              <div>
                <h5>{new Date(modalCard.created_at).toLocaleString('en', { day: 'numeric' })}</h5>
                <h6>{new Date(modalCard.created_at).toLocaleString('en', { month: 'long' })}</h6>
              </div>
              <div className={style.iconLike}>
                <img src={icon} />
                <span>{modalCard.likes}</span>
              </div>
            </div>
            <div className={style.modalInfo__right}>
              <div className={style.closeModal} onClick={onClickHandler}>
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
      </div>
    </div>
  );
};

export default Modal;
