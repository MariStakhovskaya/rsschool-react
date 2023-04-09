import React from 'react';
import style from './Modal.module.css';

type modalPropsType = {
  active: boolean;
  setActive: (active: boolean) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
};

const Modal = ({ active, setActive, children }: modalPropsType) => {
  return (
    <div
      className={active ? `${style.modal + ' ' + style.active}` : style.modal}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? `${style.modalContent} ${style.active}` : style.modalContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
