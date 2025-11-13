<template>
  <section class="bg-gray-50 min-h-[50vh] flex items-center">
    <div class="max-w-6xl mx-auto px-6 text-center md:text-left grid md:grid-cols-2 gap-12 items-center">
      <!-- Left Text -->
      <div>
        <h1 class="text-5xl md:text-6xl font-bold text-blue-600 mb-4">
          Selamat Datang di<span class="text-gray-900"> Pendidikan Masadepan</span>
        </h1>
        <p class="text-gray-600 text-lg mb-8">
          Platform pembelajaran modern yang membantu guru membangun pengalaman belajar digital yang menarik dan mudah digunakan.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button
            class="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all shadow-md"
          >
            <NuxtLink to="/loginas">
               Coba Sekarang 
            </NuxtLink>
          </button>
          <NuxtLink href="#about"
            class="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all"
          >
            Pelajari Lebih Lanjut
          </NuxtLink>
        </div>
      </div>

      <!-- Right Image -->
      <div class="hidden md:block flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
          alt="Education illustration"
          class="rounded-2xl shadow-lg max-w-full w-[480px] h-auto object-cover"
        />
      </div>
    </div>
  </section>
</template>
