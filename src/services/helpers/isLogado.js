export default async function isLogado () {
  try {
    const id = await localStorage.getItem('@sctv/userId')
    const token = localStorage.getItem('@sctv/token') ||
      localStorage.getItem('@sctv/tokenAdm')

    if (!id || !token) return false
    return { id, token }
  } catch (error) {
    return false
  }
}
