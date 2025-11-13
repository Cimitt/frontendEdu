<script setup lang="ts"></script>

<template>
  <section class="flex items-center justify-center min-h-screen">
  <div class="max-w-6xl mx-auto px-6 text-center">
    <h2 class="text-3xl font-bold text-gray-800 mb-12">Login Sebagai</h2>
    <div class="grid md:grid-cols-2 gap-10">
      <div class="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
        <nuxt-icon name="layout" class="text-blue-600 text-4xl mb-4" />
        <h3 class="text-xl font-semibold mb-2">Pembuat Materi</h3>
        <p class="text-gray-600">Login sebagai pembuat materi untuk membuat website pembelajaran digital.</p>
      </div>
      <div class="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-lg transition cursor-pointer">
        <nuxt-icon name="users" class="text-blue-600 text-4xl mb-4" />
        <h3 class="text-xl font-semibold mb-2">Siswa</h3>
        <p class="text-gray-600">Login sebagai siswa untuk mengakses pembelajaran digital.</p>
      </div>
    </div>
  </div>
</section>

</template>
