import React from 'react';
import style from './Forms.module.css';

export type FormCardProps = {
  title: string;
  date: string;
  category: string;
  checkbox: string;
  gender: string;
  file: string;
};

type CardProps = {
  card: FormCardProps;
};

function FormCard({ card }: CardProps) {
  return (
    <div className={style.formCardContainer} data-testid="formCard">
      <h3>Name: {card.title}</h3>
      <div>Date: {card.date}</div>
      <div className="form_img">
        <img src={card.file} alt="pic" />
      </div>
      <div>Category: {card.category}</div>
      <div>Gender: {card.gender}</div>
      <div>InSale: {card.checkbox}</div>
    </div>
  );
}

export default FormCard;
