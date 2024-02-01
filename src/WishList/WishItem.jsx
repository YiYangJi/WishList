import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export default function WishItem({ wish, onCompletedChange }) {
  const [age, setAge] = useState(0);

  useEffect(() => {
    let ageInterval;
    if (wish.completed) {
      // Si el deseo es completado dejo de contar
      // y limpio el intervalo
      setAge(0);
      clearInterval(ageInterval);
    } else {
      // Si el deseo no está completado
      // creo un intervalo que inscrementa en 1
      // la edad del deseo cada 1000 milisegundos
      ageInterval = setInterval(() => {
        setAge((currentAge) => currentAge + 1);
      }, 1000);
    }
    // La función que devuelve return se ejecuta
    // solo cuando se desmonta el componente
    return () => clearInterval(ageInterval);
  }, [wish.completed]);

  return (
    <li
      className={`wish-list__item 
      ${wish.completed ? 'wish-list__item--done' : ''}
      ${age >= 5 && age < 10 ? 'wish-list__item--warn' : ''}
      ${age >= 10 ? 'wish-list__item--danger' : ''}
      `}
    >
      <input
        type="checkbox"
        id="{wish.id}"
        checked={wish.completed}
        onChange={(e) => {
          onCompletedChange(e.target.checked);
        }}
      />
      <label htmlFor="{wish.text}">{wish.text}</label>
    </li>
  );
}

WishItem.propTypes = {
  wish: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  onCompletedChange: PropTypes.func.isRequired,
};
