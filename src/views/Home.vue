<script setup lang="ts">


const technologies = [
  { name: 'Python', category: 'Back-end' },
  { name: 'CSS', category: 'Front-end' },
  { name: 'JavaScript', category: 'Langages' },
  { name: 'HTML', category: 'Front-end' },
  { name: 'Java', category: 'Back-end' },
  { name: 'SQL', category: 'Base de données' },
  { name: 'Git', category: 'Outils' },
  { name: 'C#', category: 'Langages' },
]

const education = [
  {
    period: '2023 - 2025',
    title: 'BTS SIO option SLAM',
    school: 'Lycée Gaston Berger, Lille',
    description: 'Formation en développement d\'applications et services informatiques'
  },
  {
    period: '2023',
    title: 'Baccalauréat Général',
    school: 'Lycée Jean Perrin, Lambersart',
    description: 'Spécialités LLCER anglais, Numérique Sciences Informatiques et Sciences économiques et sociales'
  }
]
</script>

<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="section bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl sm:text-5xl font-bold mb-6">
          Ylian BERTRAND
        </h1>
        <p class="text-lg mb-8 text-gray-600 dark:text-gray-300">
          Développeur 
        </p>
        <a 
          href="/cv.pdf" 
          target="_blank"
          class="btn btn-primary inline-flex items-center"
        >
          Voir mon CV
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
            <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
          </svg>
        </a>
      </div>
    </section>

    <!-- Parcours Section -->
    <section class="section">
      <h2 class="text-3xl font-bold mb-8 text-center">Parcours Scolaire</h2>
      <div class="max-w-3xl mx-auto space-y-6">
        <div v-for="(item, index) in education" :key="index" class="card">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
            <h3 class="text-xl font-semibold">{{ item.title }}</h3>
            <span class="text-primary">{{ item.period }}</span>
          </div>
          <p class="text-gray-600 dark:text-gray-300 mb-2">{{ item.school }}</p>
          <p class="text-gray-500 dark:text-gray-400">{{ item.description }}</p>
        </div>
      </div>
    </section>

    <!-- Technologies Section -->
    <section class="section bg-gray-50 dark:bg-gray-800/50">
      <h2 class="text-3xl font-bold mb-8 text-center">Technologies Maîtrisées</h2>
      <div class="max-w-3xl mx-auto">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div v-for="tech in technologies" :key="tech.name" class="card text-center">
            <span class="font-medium text-lg">{{ tech.name }}</span>
            <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">{{ tech.category }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="section">
      <h2 class="text-3xl font-bold mb-8 text-center">Contact</h2>
      <div class="max-w-xl mx-auto card">
        <div class="space-y-4">
          <div class="flex items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
            <a href="mailto:contact@example.com" class="hover:text-primary">ylianbk@gmail.com</a>
          </div>
          <div class="flex items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
            </svg>
            <span>Lille, France</span>
          </div>
          <div class="flex items-center space-x-3">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-primary" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            <span>06 24 13 75 93</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>