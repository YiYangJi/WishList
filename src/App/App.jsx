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

  // Esto es una funcion flecha que se ejecuta cuando se hace prop
  const onNewWish = (newWish) => {
    setWishes((currentWishes) => [...currentWishes, newWish]);
  };

  return (
    <div className="app">
      <h1>My Whishlist</h1>
      {/* Le pasamos una prop de cualquier nombre y
      le pasamos una funcion declarada anteriormente */}
      <WishInput onNewWish={onNewWish} />

      <WishList wishes={wishes} setWishes={setWishes} />
    </div>
  );
}
