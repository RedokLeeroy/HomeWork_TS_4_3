import PropTypes from 'prop-types';
import s from './Button.module.css';
import i from './Item.module.css';
import React from 'react';

export const Item = ({ name, phone, onDelete, id }: {name?:string, phone?:string, id?:string, onDelete: (id?:string)=> void} ):JSX.Element => {
  return (
    <li className={i.item}>
      <p className={i.P}>
        {name} : {phone}
      </p>
      <button className={s.button} onClick={() => onDelete(id)}>
        delete
      </button>
    </li>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
