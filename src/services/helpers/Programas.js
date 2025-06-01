import api from '../api'

async function getProgramaById (idPrograma) {
  try {
    const response = await api.get(`podcasts/${idPrograma}`)
    return response.data
  } catch (error) {
    return null
  }
}

export { getProgramaById }
