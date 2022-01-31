import api from "./apiConfig";

export const ascend = async (credentials) => {
  try {
    const resp = await api.post("/ascend", credentials);
    localStorage.setItem("token", resp.data.token);
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

export const verifyUser = async () => {
  const refresh = localStorage.getItem("refresh");
  if (refresh) {
    const resp = await api.post("api/token/refresh/", { refresh });
    localStorage.setItem("token", resp.data.access);
    return resp;
  }
  return false;
};
