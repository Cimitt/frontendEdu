export const useAuth = () => {
    const config = useRuntimeConfig()
    const api = config.public.apiBase
    const user = useState('user', () => null)
    const token = useCookie('token')

    const register = async (register: any) => {
    const res = await $fetch(`${api}/register`, {
      method: "POST",
      body: register 
    })
    return res
  }

  const login = async (payload: any) => {
    const res = await $fetch(`${api}/login`, {
        method: 'POST',
        body: payload
    })
  }
  return { user, token, register, login }
}