import api from "./apiConfig";

export const getObservations = async () => {
  try {
    const response = await api.get("/observations");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getObservation = async (id) => {
  try {
    const response = await api.get(`/observations/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createObservation = async (observation) => {
  try {
    const response = await api.post("/observations", observation);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateObservation = async (id, observation) => {
  try {
    const response = await api.put(`/observations/${id}`, observation);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteObservation = async (id) => {
  try {
    const response = await api.delete(`/observations/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
