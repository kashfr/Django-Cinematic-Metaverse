import api from "./apiConfig";

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

export const createNFT = async nft => {
  try {
    const response = await api.post("/nfts", nft);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateNFT = async (id, nft) => {
  try {
    const response = await api.put(`/nfts/${id}`, nft);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteNFT = async (id) => {
  try {
    const response = await api.delete(`/nfts/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
