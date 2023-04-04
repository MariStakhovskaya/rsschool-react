import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import style from './Forms.module.css';
import FormCard, { FormCardProps } from './FormCard';

type FormData = {
  title: string;
  date: string;
  category: string;
  isMale: string;
  file: string;
  inSale: boolean;
};

function Forms() {
  const [cards, setCards] = useState<Array<FormCardProps>>([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const newCard: FormCardProps[] = [
      {
        title: data.title,
        date: data.date,
        category: data.category,
        checkbox: data.inSale ? 'yes' : 'no',
        gender: data.isMale,
        file: URL.createObjectURL((data.file as unknown as FileList)[0]),
      },
    ];

    setCards([...cards, ...newCard]);
    alert('The card has been created');
    reset();
  };

  return (
    <div className={style.formContainer}>
      <div>Create card</div>
      <form onSubmit={handleSubmit(onSubmit)} data-testid="Form">
        <div>
          <label>Title:</label>
          <input
            type="text"
            data-testid="title"
            aria-label="title"
            id="title"
            {...register('title', {
              required: 'Enter title',
              minLength: {
                value: 3,
                message: 'Title must be more than 3 characters',
              },
              maxLength: {
                value: 15,
                message: 'Title must be less than 15 characters',
              },
            })}
          />
          <div className={style.errorRed}>{errors.title?.message}</div>
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            {...register('date', { required: 'Date is required' })}
            aria-label="date"
          />
          <div className={style.errorRed}>{errors.date?.message}</div>
        </div>
        <div>
          <label>Pick category:</label>
          <select {...register('category', { required: 'Category is required' })}>
            <option></option>
            <option value="mentor">mentor</option>
            <option value="student1">student1</option>
            <option value="trainee">trainee</option>
            <option value="junior">junior</option>
          </select>
          <div className={style.errorRed}>{errors.category?.message}</div>
        </div>
        <div>
          <label htmlFor="field-man">
            <input
              {...register('isMale', { required: 'Radio is required' })}
              type="radio"
              value="male"
              id="field-male"
            />
            Male
          </label>
          <label htmlFor="field-female">
            <input {...register('isMale')} type="radio" value="female" id="field-female" />
            Female
          </label>
          <div className={style.errorRed}>{errors.isMale?.message}</div>
        </div>
        <div>
          <input type="file" {...register('file', { required: 'File is required' })} />
          {errors.file && <div className={style.errorRed}>{errors.file?.message}</div>}
        </div>
        <div>
          <label htmlFor="inSale">Send card in sale</label>
          <input
            type="checkbox"
            aria-label="checkbox"
            {...register('inSale', { required: 'Check is required' })}
          />
        </div>
        <div>
          <button type="submit" disabled={!isValid}>
            Send
          </button>
        </div>
      </form>
      <div className={style.cardsBlock}>
        {cards.map((card, index) => (
          <FormCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
}

export default Forms;
