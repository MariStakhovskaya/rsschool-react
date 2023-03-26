import React from 'react';
import { Component } from 'react';
import style from './Forms.module.css';

type CardProps = Record<string, never>;
export type FormCardProps = {
  title: string;
  date: string;
  file: string;
};
class FormCard extends Component<FormCardProps, CardProps> {
  constructor(props: FormCardProps) {
    super(props);
  }

  render() {
    return (
      <div className={style.formCardContainer}>
        <h2>Name: {this.props.title}</h2>
        <h2>Date: {this.props.date}</h2>
        <div className="form_img">
          <img src={this.props.file} alt="pic" />
        </div>
      </div>
    );
  }
}

export default FormCard;
