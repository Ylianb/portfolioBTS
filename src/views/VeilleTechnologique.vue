<script setup lang="ts">
const months = [
  { name: 'Septembre 2024', pdf: '/veille/septembre-2024.pdf' },
  { name: 'Octobre 2024', pdf: '/veille/octobre-2024.pdf' },
  { name: 'Novembre 2024', pdf: '/veille/novembre-2024.pdf' },
  { name: 'Décembre 2024', pdf: '/veille/decembre-2024.pdf' },
  { name: 'Janvier 2025', pdf: '/veille/janvier-2025.pdf' },
  { name: 'Février 2025', pdf: '/veille/fevrier-2025.pdf' },
  { name: 'Mars 2025', pdf: '/veille/mars-2025.pdf' },
  { name: 'Avril 2025', pdf: '/veille/avril-2025.pdf' },
  { name: 'Mai 2025', pdf: '/veille/mai-2025.pdf' }
]

const springFeatures = [
  {
    title: 'Spring Boot 3',
    description: 'Dernière version majeure avec support natif pour Java 17 et améliorations des performances.'
  },
  {
    title: 'Spring Security 6',
    description: 'Nouvelles fonctionnalités de sécurité et support amélioré pour OAuth 2.0 et OpenID Connect.'
  },
  {
    title: 'Spring Cloud',
    description: 'Solutions pour les architectures distribuées et les microservices.'
  },
  {
    title: 'Spring Native',
    description: 'Compilation native GraalVM pour des applications plus rapides et plus légères.'
  }
]
</script>

<template>
  <div class="min-h-screen">
    <!-- Introduction Section -->
    <section class="section bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl font-bold mb-6">Veille Technologique</h1>
        <p class="text-lg mb-4 text-gray-600 dark:text-gray-300">
          La veille technologique est un processus crucial pour rester à jour avec les dernières évolutions du secteur informatique.
        </p>
        <p class="text-gray-500 dark:text-gray-400">
          Focus sur le framework Spring et son écosystème
        </p>
      </div>
    </section>

    <!-- Spring Framework Section -->
    <section class="section">
      <h2 class="text-3xl font-bold mb-8 text-center">Spring Framework</h2>
      <div class="max-w-4xl mx-auto">
        <div class="card mb-8">
          <h3 class="text-2xl font-bold mb-4">Pourquoi Spring ?</h3>
          <p class="text-gray-600 dark:text-gray-300 mb-4">
            Spring est l'un des frameworks Java les plus populaires pour le développement d'applications d'entreprise. 
            Il offre un écosystème complet pour créer des applications robustes et évolutives.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="feature in springFeatures" :key="feature.title" class="card">
            <h4 class="text-xl font-semibold mb-2">{{ feature.title }}</h4>
            <p class="text-gray-600 dark:text-gray-300">{{ feature.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Monthly Reports Section -->
    <section class="section bg-gray-50 dark:bg-gray-800/50">
      <h2 class="text-3xl font-bold mb-8 text-center">Rapports Mensuels</h2>
      <div class="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div v-for="month in months" :key="month.name" class="card">
          <h3 class="text-xl font-semibold mb-4">{{ month.name }}</h3>
          <a 
            :href="month.pdf"
            target="_blank"
            class="btn btn-primary w-full text-center"
          >
            Voir le rapport
          </a>
        </div>
      </div>
    </section>
  </div>
</template>