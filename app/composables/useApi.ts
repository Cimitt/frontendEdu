// composables/useApi.ts

export const useApi = () => {
    const config = useRuntimeConfig();
    const base = config.public.apiBase;

    // $fetch instance untuk route API (misal: /api/users)
    // $fetch.create akan mengembalikan instance yang di-typed dengan $Fetch<T>
    const api = $fetch.create({
        // Sesuaikan baseURL: Jika 'base' sudah mengandung '/api', cukup 'base'.
        // Jika 'base' adalah 'http://127.0.0.1:8000', maka '`${base}/api`' benar.
        // Saya asumsikan 'base' adalah 'http://127.0.0.1:8000/api'.
        baseURL: base, 
        credentials: "include",
        headers: {
            Accept: "application/json",
        },
    });

    const getCsrf = async () => {
        // CSRF-cookie tidak mengembalikan data yang berarti, hanya menyetel cookie.
        return await $fetch(`${base.replace('/api', '')}/sanctum/csrf-cookie`, { // Mengganti /api untuk mengakses /sanctum/csrf-cookie di base domain
            method: "GET",
            credentials: "include",
        });
    };

  const raw = async <T>(path: string, opts: Parameters<typeof $fetch>[1] = {}) => {
          // path harus berupa '/login', '/register', dll.
          // Hasilnya akan menjadi: http://127.0.0.1:8000/api/register
          return await $fetch<T>(`${base}${path}`, {
              credentials: "include",
              ...opts,
          });
      };

    return {
        api,
        getCsrf,
        raw,
    };
};