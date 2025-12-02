// composables/useAuth.ts (Lanjutan)

import { useApi } from './useApi'; // Pastikan Anda mengimpor useApi

// composables/useAuth.ts

// --- Tipe Data ---
interface User {
  id: number;
  name: string;
  email: string;
  // ... tambahkan properti lain yang dikembalikan API
}

// Tipe untuk data yang dikirim saat register
interface RegisterCredentials {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

// Tipe untuk data yang dikembalikan saat berhasil (biasanya user dan token/pesan)
interface AuthResponse {
  user: User;
  message: string;
  // Jika Anda mengembalikan token, tambahkan token: string;
}

export const useAuth = () => {
  const { raw, getCsrf } = useApi();
  const loading = ref(false);
  const user = useState<User | null>('auth-user', () => null); // State reaktif untuk menyimpan data user

  /**
   * Fungsi untuk mendaftarkan pengguna baru (Register)
   * Endpoint yang dipanggil: /api/register
   * @param credentials Data pendaftaran (name, email, password, password_confirmation)
   * @returns Promise dengan data AuthResponse
   */
  const register = async (credentials: RegisterCredentials) => {
    try {
      // 1. Ambil Cookie CSRF (Wajib untuk Sanctum SPA)
      await getCsrf();

      // 2. Kirim permintaan POST ke endpoint register
      const response = await raw<AuthResponse>('/register', {
        method: 'POST',
        body: credentials,
      });

      // 3. Simpan data user (jika berhasil)
      user.value = response.user;
      
      return response;

    } catch (error: any) {
      // Tangani error, misal: validation errors dari Laravel
      console.error('Registration failed:', error.data?.errors || error);
      throw error;
    }
  };

  /**
   * Fungsi Login (Sebagai contoh tambahan)
   * Endpoint yang dipanggil: /api/login
   */
  const login = async (credentials: Omit<RegisterCredentials, 'name' | 'password_confirmation'>) => {
    try {
      await getCsrf();
      
      const response = await raw<AuthResponse>('/login', {
        method: 'POST',
        body: credentials,
      });

      user.value = response.user;
      return response;

    } catch (error: any) {
      console.error('Login failed:', error.data?.errors || error);
      throw error;
    }
  };


  return {
    user,
    register,
    login,
    loading
  };
};

