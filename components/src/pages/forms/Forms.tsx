import React, { FormEvent } from 'react';
import { Component } from 'react';
import style from './Forms.module.css';

class Forms extends Component {
  inputName = React.createRef<HTMLInputElement>();
  inputDate = React.createRef<HTMLInputElement>();
  inputCheck = React.createRef<HTMLInputElement>();
  inputSelect = React.createRef<HTMLSelectElement>();
  inputFile = React.createRef<HTMLInputElement>();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor(props: any) {
    super(props);
  }

  handleSubmit(event: FormEvent) {
    event.preventDefault();
  }
  render() {
    return (
      <div className={style.formContainer}>
        <div>Create card</div>
        <form onSubmit={this.handleSubmit}>
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
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default Forms;
