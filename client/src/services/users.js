import api from "./apiConfig";
// import jwtDecode from "jwt-decode";

export const ascend = async (credentials) => {
  try {
    const resp = await api.post("/ascend", credentials);
    localStorage.setItem("token", resp.data.token);
    // const user = jwtDecode(resp.data.token);
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
    // const user = jwtDecode(resp.data.token);
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

// export const changePassword = async (passwords, user) => {
//   try {
//     const resp = await api.post("/");
//     return resp.data;
//   } catch (error) {
//     throw error;
//   }
// };

export const verifyUser = async () => {
  const refresh = localStorage.getItem("refresh");
  // const token = localStorage.getItem("token");
  if (refresh) {
    const resp = await api.post("api/token/refresh/", { refresh });
    // const res = await api.get("/verify");
    localStorage.setItem("token", resp.data.access);
    // return resp.data;
    return resp;
  }
  return false;
};

// export const getUserNFT = async (userId, nftId) => {
//   try {
//     const response = await api.get(`/users/${userId}/nfts/${nftId}`);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };
