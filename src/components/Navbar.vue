<script setup lang="ts">
import { ref } from 'vue'
import { useThemeStore } from '../stores/theme'
import { SunIcon, MoonIcon, Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const isOpen = ref(false)
const themeStore = useThemeStore()

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <nav class="bg-white dark:bg-gray-800 shadow-lg fixed w-full top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <router-link to="/" class="flex items-center">
            <span class="text-xl font-bold text-primary">Ylian BERTRAND</span>
          </router-link>
        </div>

        <!-- Desktop Menu -->
        <div class="hidden sm:flex sm:items-center sm:space-x-4">
          <router-link to="/" class="nav-link" active-class="active">Accueil</router-link>
          <router-link to="/bts-sio" class="nav-link" active-class="active">BTS SIO</router-link>
          <router-link to="/veille-technologique" class="nav-link" active-class="active">Veille Technologique</router-link>
          <router-link to="/realisations" class="nav-link" active-class="active">Réalisations</router-link>
          <button @click="themeStore.toggleTheme" class="nav-link">
            <SunIcon v-if="themeStore.isDark" class="h-5 w-5" />
            <MoonIcon v-else class="h-5 w-5" />
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="flex items-center sm:hidden">
          <button @click="toggleMenu" class="nav-link">
            <Bars3Icon v-if="!isOpen" class="h-6 w-6" />
            <XMarkIcon v-else class="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-show="isOpen" class="sm:hidden">
      <div class="pt-2 pb-3 space-y-1">
        <router-link to="/" class="nav-link block" active-class="active">Accueil</router-link>
        <router-link to="/bts-sio" class="nav-link block" active-class="active">BTS SIO</router-link>
        <router-link to="/veille-technologique" class="nav-link block" active-class="active">Veille Technologique</router-link>
        <router-link to="/realisations" class="nav-link block" active-class="active">Réalisations</router-link>
        <button @click="themeStore.toggleTheme" class="nav-link w-full text-left">
          <span v-if="themeStore.isDark">Mode clair</span>
          <span v-else>Mode sombre</span>
        </button>
      </div>
    </div>
  </nav>
</template>