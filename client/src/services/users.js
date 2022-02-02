import api from "./apiConfig";

export const ascend = async (credentials) => {
  try {
    const resp = await api.post("/ascend", credentials);
    localStorage.setItem("token", resp.data.token);
    localStorage.setItem("refresh", resp.data.refresh); // testing
    return resp;
  } catch (error) {
    throw error;
  }
};

export const plugIn = async (credentials) => {
  try {
    const resp = await api.post("plug-in", credentials);
    localStorage.setItem("token", resp.data.access);
    localStorage.setItem("refresh", resp.data.refresh);
    return resp;
  } catch (error) {
    throw error;
  }
};

export const unplug = async () => {
  try {
    localStorage.removeItem("token");
    localStorage.removeItem("refresh");
    return true;
  } catch (error) {
    throw error;
  }
};

export const changePassword = async (passwords, user) => {
  try {
    const resp = await api.post("/");
    return resp.data;
  } catch (error) {
    throw error;
  }
};

export const verifyUser = async () => {
  const refresh = localStorage.getItem("refresh");
  if (refresh) {
    const resp = await api.post("refresh-token", { refresh });
    localStorage.setItem("token", resp.data.access);
    return resp;
  }
  return false;
};

export const getUserNFT = async (userId, NFTId) => {
  try {
    const response = await api.get(`/users/${userId}/products/${NFTId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
