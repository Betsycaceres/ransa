/* eslint-disable no-unused-vars */

// Importamos todas las funciones que vamos a usar
import homeController from './controllers/home.js';
import { redirect } from './utils.js';

export default () => {
  // Creamos nuestro router

  const routerSwitch = () => {
    // Obtenemos la dirección de la página actual
    const { hash } = window.location;
    const currentRoute = hash.replace('#', '');
    let next;
    switch (currentRoute) {
    case '/home':
      next = homeController;
      break;

    case '':
      redirect('home');
      return;
    default:
      document.getElementById('root').innerHTML = '404 not found';
      break;
    }

    next();
  };

  window.onload = () => routerSwitch();

  // Cambiamos la vista
  window.addEventListener('hashchange', () => {
    routerSwitch();
    console.log('controller');
  });

  routerSwitch();
};
