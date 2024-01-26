import React, { useState } from 'react';

import './App.css';
import WishInput from '../WishInput/WishInput';
import WishList from '../WishList/WishList';

const InitialWishes = [
  { id: 0, text: 'Travel to the moon', completed: false },
  { id: 0, text: 'Travel to Barcelona', completed: true },
  { id: 0, text: 'Eat an hamburguer', completed: false },
];

export default function App() {
  const [wishes, setWishes] = useState(InitialWishes);

  const onNewWish = (newWish) => {
    setWishes((currentWishes) => [...currentWishes, newWish]);
  };

  return (
    <div className="app">
      <h1>My Whishlist</h1>
      <WishInput onNewWish={onNewWish} />

      <WishList wishes={wishes} />
    </div>
  );
}
