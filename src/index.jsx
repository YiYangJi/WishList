import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App/App';

// Capturamos el contenedor root que hay en el html
const container = document.getElementById('root');
// root es la raiz de la aplicacion que se monta en el div#root
const root = createRoot(container); // createRoot(container!) if you use TypeScript
// Renderiza algo en la raiz de la aplicacion
// Ponemos el React.StrictMode para que nos deje inspeccionar los elementos
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
