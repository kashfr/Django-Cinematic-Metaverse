import api from "./apiConfig";

const getToken = () => {
  return new Promise((resolve) => {
    resolve(`Bearer ${localStorage.getItem("token") || null}`);
  });
};

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
    const token = await getToken();

    const headers = {
      headers: {
        Authorization: token,
      },
    };

    const response = await api.post("/observations", observation, headers);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateObservation = async (id, observation) => {
  try {
    const token = await getToken();

    const headers = {
      headers: {
        Authorization: token,
      },
    };

    const response = await api.put(`/observations/${id}`, observation, headers);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteObservation = async (id) => {
  try {
    const token = await getToken();

    const headers = {
      headers: {
        Authorization: token,
      },
    };

    const response = await api.delete(`/observations/${id}`, headers);
    return response.data;
  } catch (error) {
    throw error;
  }
};
