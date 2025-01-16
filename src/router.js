import { createRouter, createWebHistory } from 'vue-router';

// Définissez vos routes
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./views/Home.vue'), // Charge la vue Home
  },
  {
    path: '/realisations',
    name: 'Realisations',
    component: () => import('./views/Realisations.vue'), // Charge la vue Réalisations
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('./views/Contact.vue'), // Charge la vue Contact
  },
  {
    path: '/:pathMatch(.*)*', // Catch-all pour les 404
    name: 'NotFound',
    component: () => import('./views/NotFound.vue'),
  },
];

// Créez le routeur avec le mode `history`
const router = createRouter({
  history: createWebHistory(), // Utilise le mode `history` pour les routes propres
  routes,
});

export default router;
