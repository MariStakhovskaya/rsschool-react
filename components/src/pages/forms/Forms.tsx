import React, { FormEvent } from 'react';
import { Component } from 'react';
import style from './Forms.module.css';
import FormCard, { FormCardProps } from './FormCard';

type FormsProps = Record<string, never>;
type FormsState = {
  cards: FormCardProps[];
  isDisabled: boolean;
};
class Forms extends Component<FormsProps, FormsState> {
  inputName = React.createRef<HTMLInputElement>();
  inputDate = React.createRef<HTMLInputElement>();
  inputCheck = React.createRef<HTMLInputElement>();
  inputSelect = React.createRef<HTMLSelectElement>();
  radioOneRef = React.createRef<HTMLInputElement>();
  radioTwoRef = React.createRef<HTMLInputElement>();
  inputFile = React.createRef<HTMLInputElement>();
  formRef = React.createRef<HTMLFormElement>();
  constructor(props: FormsProps) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      cards: [],
      isDisabled: true,
    };
  }

  handleSubmit(event: FormEvent) {
    event.preventDefault();
    const newCard: FormCardProps[] = [
      {
        title: this.inputName.current?.value as string,
        date: this.inputDate.current?.value as string,
        category: this.inputSelect.current?.value as string,
        checkbox: this.inputCheck.current?.checked as boolean,
        gender: this.radioOneRef.current?.checked ? 'Man' : 'Female',
        file: URL.createObjectURL((this.inputFile.current?.files as FileList)[0]),
      },
    ];
    this.setState({ cards: [...this.state.cards, ...newCard] });
    this.reset();
    console.log(this.radioOneRef.current?.checked);
  }

  checkFormValidity() {
    if (this.formRef.current?.checkValidity()) {
      this.setState({ isDisabled: false });
    } else {
      this.setState({ isDisabled: true });
    }
  }

  reset() {
    (this.inputName.current as HTMLInputElement).value = '';
    (this.inputDate.current as HTMLInputElement).value = '';
    (this.inputSelect.current as HTMLSelectElement).value = '';
    (this.inputCheck.current as HTMLInputElement).checked = false;
    (this.inputFile.current as HTMLInputElement).value = '';
    (this.radioOneRef.current as HTMLInputElement).checked = false;
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
            <label>
              Date:
              <input type="date" ref={this.inputDate} />
            </label>
          </div>
          <div>
            <label>
              Pick category:
              <select ref={this.inputSelect}>
                <option></option>
                <option value="mentor">mentor</option>
                <option value="student1">student1</option>
                <option value="trainee">trainee</option>
                <option value="junior">junior</option>
                <option value="senior">senior</option>
                <option value="middle">middle</option>
              </select>
            </label>
          </div>
          <div className={style.switchField}>
            <input
              ref={this.radioOneRef}
              type="radio"
              id="radio-one"
              name="switch-one"
              value="Male"
              required
            />
            <label htmlFor="radio-one">Male</label>
            <input
              ref={this.radioTwoRef}
              type="radio"
              id="radio-two"
              name="switch-one"
              value="Female"
            />
            <label htmlFor="radio-two">Female</label>
          </div>
          <div>
            <input type="file" ref={this.inputFile} required />
          </div>
          <div>
            <input type="checkbox" ref={this.inputCheck} /> - Send card in sale
          </div>
          <div>
            <button type="submit" disabled={this.state.isDisabled} className={style.buttonSubmit}>
              <span>Submit</span>
            </button>
          </div>
        </form>
        <div className={style.cardsBlock}>
          {this.state.cards.map((card, index) => (
            <FormCard key={index} {...card} />
          ))}
        </div>
      </div>
    );
  }
}

export default Forms;
