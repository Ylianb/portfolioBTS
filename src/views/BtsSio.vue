<script setup lang="ts">
const options = [
  {
    name: 'SLAM',
    title: 'Solutions Logicielles et Applications Métiers',
    description: 'Formation axée sur le développement d\'applications, la programmation et la gestion de projets informatiques.',
    skills: [
      'Développement d\'applications web et mobiles',
      'Programmation orientée objet',
      'Gestion de bases de données',
      'Analyse et conception de solutions logicielles',
      'Cybersécurité des solutions applicatives'
    ]
  },
  {
    name: 'SISR',
    title: 'Solutions d\'Infrastructure, Systèmes et Réseaux',
    description: 'Formation centrée sur l\'administration des réseaux et la gestion des infrastructures informatiques.',
    skills: [
      'Administration des systèmes',
      'Configuration des réseaux',
      'Sécurité des infrastructures',
      'Supervision et maintenance',
      'Virtualisation et cloud computing'
    ]
  }
]

const exams = [
  {
    name: 'E4 - Support et mise à disposition de services informatiques',
    coefficient: 4,
    description: 'Épreuve pratique et orale évaluant la capacité à assurer le support et la mise à disposition de services informatiques.'
  },
  {
    name: 'E5 - Administration des systèmes et des réseaux (SISR) / Conception et développement d\'applications (SLAM)',
    coefficient: 4,
    description: 'Épreuve pratique et orale spécifique à l\'option choisie.'
  },
  {
    name: 'E6 - Cybersécurité des services informatiques',
    coefficient: 4,
    description: 'Épreuve écrite et pratique sur la sécurisation des services informatiques.'
  }
]
</script>

<template>
  <div class="min-h-screen">
    <!-- Introduction Section -->
    <section class="section bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl font-bold mb-6">BTS SIO</h1>
        <p class="text-lg mb-4 text-gray-600 dark:text-gray-300">
          Le Brevet de Technicien Supérieur Services Informatiques aux Organisations est un diplôme reconnu qui forme les étudiants aux métiers de l'informatique.
        </p>
        <p class="text-gray-500 dark:text-gray-400">
          Formation en 2 ans avec deux options au choix : SLAM ou SISR
        </p>
      </div>
    </section>

    <!-- Options Section -->
    <section class="section">
      <h2 class="text-3xl font-bold mb-8 text-center">Les Options</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div v-for="option in options" :key="option.name" class="card">
          <h3 class="text-2xl font-bold mb-2 text-primary">{{ option.name }}</h3>
          <h4 class="text-lg font-medium mb-4">{{ option.title }}</h4>
          <p class="mb-6 text-gray-600 dark:text-gray-300">{{ option.description }}</p>
          <ul class="space-y-2">
            <li v-for="skill in option.skills" :key="skill" class="flex items-start">
              <svg class="h-6 w-6 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-2">{{ skill }}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Examens Section -->
    <section class="section bg-gray-50 dark:bg-gray-800/50">
      <h2 class="text-3xl font-bold mb-8 text-center">Les Épreuves informatiques</h2>
      <div class="max-w-4xl mx-auto space-y-6">
        <div v-for="exam in exams" :key="exam.name" class="card">
          <div class="flex flex-col sm:flex-row justify-between mb-2">
            <h3 class="text-xl font-semibold">{{ exam.name }}</h3>
            <span class="text-primary">Coefficient {{ exam.coefficient }}</span>
          </div>
          <p class="text-gray-600 dark:text-gray-300">{{ exam.description }}</p>
        </div>
      </div>
    </section>
  </div>
</template>