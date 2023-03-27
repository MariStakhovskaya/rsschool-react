import React from 'react';
import { Component } from 'react';
import style from './Forms.module.css';

type CardProps = Record<string, never>;
export type FormCardProps = {
  title: string;
  date: string;
  category: string;
  checkbox: boolean;
  gender: string;
  file: string;
};
class FormCard extends Component<FormCardProps, CardProps> {
  constructor(props: FormCardProps) {
    super(props);
  }

  render() {
    return (
      <div className={style.formCardContainer}>
        <h3>Name: {this.props.title}</h3>
        <div>Date: {this.props.date}</div>
        <div className="form_img">
          <img src={this.props.file} alt="pic" />
        </div>
        <div>Category: {this.props.category}</div>
        <div>Gender: {this.props.gender}</div>
        <div>InSale: {this.props.checkbox ? 'yes' : 'no'}</div>
      </div>
    );
  }
}

export default FormCard;
