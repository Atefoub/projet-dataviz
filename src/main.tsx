import { StrictMode } from 'react';                        // Importe StrictMode, un outil de React pour détecter les problèmes potentiels dans l'application
import { createRoot } from 'react-dom/client';             // Importe createRoot, la nouvelle API pour monter l'application React dans le DOM
import App from './App';                                   // Importe le composant principal App
import './styles/index.css';                               // Importe les styles globaux de l'application

createRoot(document.getElementById('root')!).render(       // Crée la racine React en ciblant l'élément HTML avec l'id "root" et démarre le rendu
  <StrictMode>                                             
    <App />                                                
  </StrictMode>                                            // Fin de StrictMode
);                                                         // Termine l'appel à render