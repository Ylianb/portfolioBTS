<script setup lang="ts">
const projects = [
  {
    name: 'GLPI',
    description: 'Mise en place et personnalisation d\'une solution de gestion de parc informatique',
    longDescription: `
      GLPI (Gestionnaire Libre de Parc Informatique) est une solution open-source de gestion de parc informatique 
      et de service desk. Le projet consistait à déployer et adapter GLPI aux besoins spécifiques d'une entreprise.
    `,
    technologies: ['PhpMyAdmin', 'GLPI', 'SQL', 'Apache', 'PHP'],
    features: [
      'Gestion des tickets d\'incident',
      'Gestion des utilisateurs et des droits',

    ],
    images: [
      '/1.png',
      '/2.png',
      '/3.png',
      '/4.png',
      '/5.png',
      '/6.png',
      '/7.png',
      '/8.png'
    ]
  },
  {
    name: 'MarieTeam',
    description: 'Application de gestion de liaisons maritimes et de réservations',
    longDescription: `
      MarieTeam est une application complète permettant la gestion des liaisons maritimes, 
      des réservations et du planning des traversées pour une compagnie maritime.
      'https://mariteam.vercel.app/'
    `,
    technologies: ['Next.js', 'React', 'Tailwind', 'Supabase'],
    features: [
      'Gestion des liaisons maritimes',
      'Système de réservation en ligne',
      'Interface d\'administration',
      'Gestion des horaires et des tarifs',
      'Statistiques et rapports'
    ],
    images: [
      '/M1.png',
      '/M2.png',
      '/M3.png'
    ]
  }
]
</script>

<template>
  <div class="min-h-screen">
    <!-- Introduction Section -->
    <section class="section bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5">
      <div class="max-w-4xl mx-auto text-center">
        <h1 class="text-4xl font-bold mb-6">Mes Réalisations</h1>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          Découvrez les projets sur lesquels j'ai travaillé
        </p>
      </div>
    </section>

    <!-- Projects Section -->
    <section class="section">
      <div class="max-w-6xl mx-auto space-y-16">
        <div v-for="project in projects" :key="project.name" class="space-y-8">
          <div class="card">
            <h2 class="text-3xl font-bold mb-4">{{ project.name }}</h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
              {{ project.description }}
            </p>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              {{ project.longDescription }}
            </p>

            <!-- Technologies -->
            <div class="mb-6">
              <h3 class="text-xl font-semibold mb-3">Technologies utilisées</h3>
              <div class="flex flex-wrap gap-2">
                <span 
                  v-for="tech in project.technologies" 
                  :key="tech"
                  class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Features -->
            <div class="mb-6">
              <h3 class="text-xl font-semibold mb-3">Fonctionnalités</h3>
              <ul class="space-y-2">
                <li 
                  v-for="feature in project.features" 
                  :key="feature"
                  class="flex items-start"
                >
                  <svg class="h-6 w-6 text-primary shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span class="ml-2">{{ feature }}</span>
                </li>
              </ul>
            </div>

            <!-- Screenshots -->
            <div>
              <h3 class="text-xl font-semibold mb-3">Captures d'écran</h3>
              <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
                <img 
                  v-for="(image, index) in project.images" 
                  :key="index"
                  :src="image"
                  :alt="`${project.name} screenshot ${index + 1}`"
                  class="rounded-lg shadow-md w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>