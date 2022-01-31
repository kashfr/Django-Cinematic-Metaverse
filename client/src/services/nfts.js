import api from "./apiConfig";

const getToken = () => {
  return new Promise((resolve) => {
    resolve(`Bearer ${localStorage.getItem("token") || null}`);
  });
};

export const getNFTs = async () => {
  try {
    const response = await api.get("/nfts");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getNFT = async (id) => {
  try {
    const response = await api.get(`/nfts/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createNFT = async (nft) => {
  try {
    const token = await getToken();

    const headers = {
      headers: {
        Authorization: token,
      },
    };

    const response = await api.post("/nfts", nft, headers);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateNFT = async (id, nft) => {
  try {
    const token = await getToken();

    const headers = {
      headers: {
        Authorization: token,
      },
    };

    const response = await api.put(`/nfts/${id}`, nft, headers);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteNFT = async (id) => {
  try {
    const token = await getToken();

    const headers = {
      headers: {
        Authorization: token,
      },
    };

    const response = await api.delete(`/nfts/${id}`, headers);
    return response.data;
  } catch (error) {
    throw error;
  }
};
