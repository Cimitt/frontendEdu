<template>
  <header class="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-sm z-50">
    <nav class="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <NuxtLink to="/" class="flex items-center gap-2">
          <Icon name="mdi:school" size="28" class="text-blue-600" />
          <span class="font-bold text-xl text-gray-800">EduBuilder</span>
        </NuxtLink>
      </div>

      <!-- Menu -->
      <ul class="hidden md:flex items-center gap-8 text-gray-700 font-medium">
        <li><a href="/#home" class="hover:text-blue-600 transition-colors">Home</a></li>
        <li><a href="/#features" class="hover:text-blue-600 transition-colors">Features</a></li>
        <li><a href="/#about" class="hover:text-blue-600 transition-colors">About</a></li>
        <li><a href="#contact" class="hover:text-blue-600 transition-colors">Contact</a></li>
      </ul>

      <!-- Button -->
      <div class="hidden md:block">
        <a
          href="#start"
          class="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition-all"
        >
          Coba Sekarang
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="md:hidden">
        <Icon name="mdi:menu" size="28" class="text-gray-700" />
      </button>
    </nav>

    <transition name="fade">
      <div
        v-if="isOpen"
        class="md:hidden bg-white shadow-lg flex flex-col items-center py-4 space-y-4"
      >
        <a href="/#home" class="hover:text-blue-600" @click="toggleMenu">Home</a>
        <a href="/#features" class="hover:text-blue-600" @click="toggleMenu">Features</a>
        <a href="/#about" class="hover:text-blue-600" @click="toggleMenu">About</a>
        <a href="/#contact" class="hover:text-blue-600" @click="toggleMenu">Contact</a>
        <a
          href="#start"
          class="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition-all"
          @click="toggleMenu"
        >
          Get Started
        </a>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
const isOpen = ref(false)
const toggleMenu = () => (isOpen.value = !isOpen.value)

onMounted(() => {
  if (process.client) {
    document.documentElement.style.scrollBehavior = 'smooth'
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
