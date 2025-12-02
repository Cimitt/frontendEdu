<script setup lang="ts">
</script>

<template>
  <div class="bg-gradient-to-b from-white to-gray-50">
    <Nav />
    <section id="home">
      <Greeting />
    </section>
    <section class="bg-trasnparent py-20 mx-8" id="features">
      <Features />
    </section>
    <section class="flex flex-col items-center py-5" id="about">
      <p class="text-sm font-semibold text-gray-600 tracking-wide mb-4">
        MISI KAMI
      </p>
      <h1 class="text-4xl md:text-5xl font-extrabold text-center text-gray-900 max-w-3xl mb-16 leading-tight">
        Pendidikan Di mana Saja <br /> Dan Kapan Saja
      </h1>
      <About />
    </section>
    <Footer />
  </div>
</template>
