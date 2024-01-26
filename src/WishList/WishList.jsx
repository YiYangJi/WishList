import React from 'react';
import PropTypes from 'prop-types';

export default function WishList({ wishes }) {
  return (
    <ul className="wish-list">
      {wishes.map((wish) => (
        <li
          key={wish.id}
          className={`wish-list__item ${
            wish.completed ? 'wish-list__item--done' : ''
          }`}
        >
          <input
            type="checkbox"
            name=""
            id="{wish.id}"
            checked={wish.completed}
          />
          <label htmlFor="{wish.text}">{wish.text}</label>
        </li>
      ))}
    </ul>
  );
}

WishList.propTypes = {
  wishes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string,
      completed: PropTypes.bool,
    }),
  ),
};

WishList.defaultProps = {
  wishes: [],
};
