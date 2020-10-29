import api from './apiConfig'

export const getTransportationTypes = async () => {
  try {
      const response = await api.get('/transportationTypes')
      return response.data
  } catch (error) {
      throw error
  }
}

export const getTransportationType = async id => {
  try {
      const response = await api.get(`/transportationTypes/${id}`)
      return response.data
  } catch (error) {
      throw error
  }
}

export const createTransportationType = async transportationType => {
  try {
      const response = await api.post('/transportationTypes', transportationType)
      return response.data
  } catch (error) {
      throw error
  }
}

export const updateTransportationType = async (id, transportationType) => {
  try {
      const response = await api.put(`/transportationTypes/${id}`, transportationType)
      return response.data
  } catch (error) {
      throw error
  }
}

export const deleteTransportationType = async id => {
  try {
    const response = await api.delete(`/transportationTypes/${id}`)
    return response.data
  } catch (error) {
    throw error
  }
}