import React, { FormEvent } from 'react';
import { Component } from 'react';
import style from './Forms.module.css';
import FormCard, { FormCardProps } from './FormCard';

type FormsProps = Record<string, never>;
type FormsState = {
  cards: FormCardProps[];
};
class Forms extends Component<FormsProps, FormsState> {
  inputName = React.createRef<HTMLInputElement>();
  inputDate = React.createRef<HTMLInputElement>();
  inputCheck = React.createRef<HTMLInputElement>();
  inputSelect = React.createRef<HTMLSelectElement>();
  inputFile = React.createRef<HTMLInputElement>();
  formRef = React.createRef<HTMLFormElement>();
  constructor(props: FormsProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      cards: [],
    };
  }

  handleSubmit(event: FormEvent) {
    event.preventDefault();
    const newCard: FormCardProps[] = [
      {
        title: this.inputName.current?.value as string,
        date: this.inputDate.current?.value as string,
        file: URL.createObjectURL((this.inputFile.current?.files as FileList)[0]),
      },
    ];
    this.setState({ cards: [...this.state.cards, ...newCard] });
  }

  render() {
    return (
      <div className={style.formContainer}>
        <div>Create card</div>
        <form onSubmit={this.handleSubmit} ref={this.formRef}>
          <div>
            <label>
              Title:
              <input className={style.title} type="text" ref={this.inputName} />
            </label>
          </div>
          <div>
            <input type="date" ref={this.inputDate} />
          </div>
          <div>
            <label>
              Pick category:
              <select ref={this.inputSelect}>
                <option></option>
                <option value="grapefruit">mentor</option>
                <option value="lime">student1</option>
                <option value="coconut">tranee</option>
                <option value="mango">junior</option>
                <option value="mango">senior</option>
                <option value="mango">middle</option>
              </select>
            </label>
          </div>
          <div>
            <input type="file" ref={this.inputFile} />
          </div>
          <div>
            <input type="checkbox" ref={this.inputCheck} /> - I consent to my personal data field
          </div>
          <div>
            <button type="submit">
              <span>Submit</span>
            </button>
          </div>
        </form>
        <div>
          {this.state.cards.map((card, index) => (
            <FormCard key={index} {...card} />
          ))}
        </div>
      </div>
    );
  }
}

export default Forms;
