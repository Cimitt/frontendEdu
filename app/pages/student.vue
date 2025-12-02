<script setup lang="ts">
const events = [
  {
  },
  {

  },
  {

  }

];
</script>

<template>
  <div class="flex min-h-screen bg-white max-h-screen max-w-screen mx-auto overflow-hidden">
    <SidebarStudent />
    <main class="flex-1 flex flex-col p-4">
      <header class="flex justify-between items-center mb-4 mx-4">
        <div class="flex items-center gap-2">
          <NuxtLink to="/" class="flex items-center gap-2">
            <Icon name="mdi:arrow-left" size="30" class="text-blue-600" />
            <span class="font-bold text-xl text-gray-800">Nama Users</span>
          </NuxtLink>
        </div>
        <div class="flex items-center space-x-3 cursor-pointer">
          <NuxtLink>
            <div class="w-8 h-8 bg-green-400 rounded-full overflow-hidden">
              <NuxtImg src="https://i.pravatar.cc/150?img=3" alt="User Avatar" class="w-full h-full object-cover" />
            </div>
          </NuxtLink>
        </div>
      </header>

      <section class="flex-1 flex flex-col md:flex-row gap-8">
        <div class="flex-1 flex-col mt-4 mx-[70px]">
          <h1 class="font-bold text-xl">Kelas</h1>
          <div class="bg-white overflow-hidden mx-auto mt-4 p-4">
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div v-for="envent in events"
                class="p-6 border rounded-lg shadow-sm flex flex-col justify-between">
                <div>
                  <h3 class="text-lg font-semibold">Nama Kelas</h3>
                  <p class="mt-2 text-sm text-slate-500 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
                    auctor arcu, at fermentum dui. Maecenas.
                  </p>
                </div>

                <button type="button"
                  class="mt-6 px-5 py-2 rounded-md text-white text-sm font-medium bg-blue-600 hover:bg-blue-700">
                  Masuk
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  </div>
</template>
