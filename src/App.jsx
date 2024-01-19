import React from 'react';

const wishes = [
  { id: 0, text: 'Travel to the moon', completed: false },
  { id: 0, text: 'Travel to Barcelona', completed: true },
  { id: 0, text: 'Eat an hamburguer', completed: false },
];

export default function App() {
  return (
    <div>
      <h1>My Whishlist</h1>
      <fieldset>
        <legend>New Wish:</legend>
        <input type="text" placeholder="My new Wish" />
      </fieldset>

      <ul>
        {wishes.map((wish) => (
          <li key={wish.id}>
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
    </div>
  );
}
