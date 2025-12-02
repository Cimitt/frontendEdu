<script setup lang="ts">

</script>

<template>
  <aside class="w-64 bg-white border-r border-gray-200 p-6 flex flex-col justify-between hidden lg:block">
    <div>
      <div class="flex items-center space-x-2 mb-8">
        <NuxtLink to="/" class="flex items-center gap-2">
          <Icon name="mdi:school" size="28" class="text-blue-600" />
          <h1 class="text-lg font-bold">KelasMu</h1>
        </NuxtLink>
      </div>

      <nav>
        <h2 class="text-blue-600 font-semibold mb-2 uppercase">• Home</h2>
        <ul class="mb-8 space-y-2">
          <li class="text-gray-600 hover:text-blue-600 cursor-pointer">
            <NuxtLink> Beranda </NuxtLink>
          </li>
        </ul>
        <h2 class="text-blue-600 font-semibold mb-2 uppercase">
          • chat
        </h2>
        <ul class="mb-8 space-y-2">
          <li class="text-gray-600 hover:text-blue-600 cursor-pointer">
            <NuxtLink> Chat </NuxtLink>
          </li>
        </ul>

      </nav>
    </div>
  </aside>
</template>
