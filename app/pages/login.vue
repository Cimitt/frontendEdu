<script setup lang="ts">
import { useAuth } from "~/composables/useAuth";
import { useRouter } from "vue-router";
import { reactive, ref } from "vue";

const router = useRouter();
const { login, loading } = useAuth();

//state form
const form = reactive({
  email: "",
  password: "",
});


//state ui
const errorMessage = ref("");
const successMessage = ref("");

const handleLogin = async () => {
  errorMessage.value = "";
  successMessage.value = "";

  try {
    await login({
      email: form.email,
      password: form.password,
    });

    successMessage.value = "Login berhasil! Mengalihkan ke dashboard...";

    setTimeout(() => {
      router.push("/loginas");
    }, 1200);

  } catch (error: any) {

    let message = "Terjadi kesalahan saat login.";

    if (error.errors) {
      const firstError = error.errors.email?.[0] || error.errors.password?.[0];
      message = firstError || error.message;
    } else if (error.message) {
      message = error.message;
    }

    if (error.statusCode === 401) {
      message = "Email atau password tidak valid. Silakan cek email dan password Anda.";
    }

    errorMessage.value = message;

  }
};
</script>

<template>
  <div class="min-h-screen flex items-center justify-center p-6 bg-slate-50">
    <div
      class="grid lg:grid-cols-2 items-center gap-10 max-w-6xl max-lg:max-w-lg w-full bg-white shadow-xl rounded-xl p-10 lg:p-0">

      <!-- Left section (desktop only) -->
      <div class="justify-center flex-col lg:text-left text-center lg:flex hidden p-10">
        <h1 class="lg:text-[42px] text-4xl font-bold text-slate-900 !leading-tight">
          Masuk untuk mengakses KelasMu
        </h1>
        <p class="text-[15px] mt-6 text-slate-600 leading-relaxed">
          <span class="font-semibold text-blue-700">Semua Orang Berhak Untuk Belajar </span>-KelasMu.
        </p>
        <p class="text-[15px] mt-6 lg:mt-12 text-slate-600">
          Belum memiliki akun?
          <NuxtLink to="/register" class="text-blue-600 font-medium hover:underline ml-1">Daftar disini</NuxtLink>
        </p>
      </div>

      <!-- login form -->
      <form class="lg:w-full lg:ml-auto max-sm:p-5 p-6" @submit.prevent="handleLogin">
        <h2 class="text-slate-900 text-3xl font-semibold mb-8 lg:text-left text-center">Login</h2>

        <!-- error message -->
        <div v-if="errorMessage" class="mb-4 p-3 text-sm text-red-700 bg-red-100 border border-red-300 rounded-lg">
          {{ errorMessage }}
        </div>

        <!-- succes message -->
        <div v-if="successMessage"
          class="mb-4 p-3 text-sm text-green-700 bg-green-100 border border-green-300 rounded-lg">
          {{ successMessage }}
        </div>

        <div class="space-y-6">
          <div>
            <label class="text-sm text-slate-900 font-medium mb-2 block">Email</label>
            <input v-model="form.email" type="email" required
              class="bg-slate-100 w-full text-sm text-slate-900 px-4 py-3 rounded-lg outline-0 border border-gray-200 focus:border-blue-600 focus:bg-white transition duration-150"
              placeholder="Masukkan Email" />
          </div>
          <div>
            <label class="text-sm text-slate-900 font-medium mb-2 block">Password</label>
            <input v-model="form.password" type="password" required
              class="bg-slate-100 w-full text-sm text-slate-900 px-4 py-3 rounded-lg outline-0 border border-gray-200 focus:border-blue-600 focus:bg-white transition duration-150"
              placeholder="Masukkan Password" />
          </div>
        </div>

        <div class="!mt-12">
          <button type="submit" :disabled="loading"
            class="w-full shadow-lg py-3 px-4 text-[15px] font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-150 disabled:bg-blue-400 disabled:cursor-not-allowed">
            <span v-if="loading" class="flex items-center justify-center">
              <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24">
                <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path class="opacity-75" fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                </path>
              </svg>
              Memproses...
            </span>
            <span v-else>Masuk</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>