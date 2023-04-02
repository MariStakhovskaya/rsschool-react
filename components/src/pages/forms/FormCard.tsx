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

function FormCard(props: FormCardProps) {
  return (
    <div className={style.formCardContainer} data-testid="formCard">
      <h3>Name: {props.title}</h3>
      <div>Date: {props.date}</div>
      <div className="form_img">
        <img src={props.file} alt="pic" />
      </div>
      <div>Category: {props.category}</div>
      <div>Gender: {props.gender}</div>
      <div>InSale: {props.checkbox}</div>
    </div>
  );
}

export default FormCard;
