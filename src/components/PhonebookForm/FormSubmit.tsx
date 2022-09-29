import s from './Button.module.css';
import React from 'react';

export const FormSubmit = ({ title }: { title: string }): JSX.Element => {
  return (
    <button className={s.button} type="submit">
      {title}
    </button>
  );
};
