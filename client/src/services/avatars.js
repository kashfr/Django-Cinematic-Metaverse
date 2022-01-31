import api from "./apiConfig";

const getToken = () => {
  return new Promise((resolve) => {
    resolve(`Bearer ${localStorage.getItem("token") || null}`);
  });
};

export const getAvatars = async () => {
  try {
    const response = await api.get("/avatars");
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getAvatar = async (id) => {
  try {
    const response = await api.get(`/avatars/${id}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const createAvatar = async (avatar) => {
  try {
    const token = await getToken();

    const headers = {
      headers: {
        Authorization: token,
      },
    };

    const response = await api.post("/avatars", avatar, headers);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const updateAvatar = async (id, avatar) => {
  try {
    const token = await getToken();

    const headers = {
      headers: {
        Authorization: token,
      },
    };

    const response = await api.put(`/avatars/${id}`, avatar, headers);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const deleteAvatar = async (id) => {
  try {
    const token = await getToken();

    const headers = {
      headers: {
        Authorization: token,
      },
    };

    const response = await api.delete(`/avatars/${id}`, headers);
    return response.data;
  } catch (error) {
    throw error;
  }
};

///// testing

// import api from "./apiConfig";

// export const getAvatars = async () => {
//   try {
//     const response = await api.get("/avatars");
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const getAvatar = async (id) => {
//   try {
//     const response = await api.get(`/avatars/${id}`);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const createAvatar = async (avatar) => {
//   try {
//     const response = await api.post("/avatars", avatar);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const updateAvatar = async (id, avatar) => {
//   try {
//     const response = await api.put(`/avatars/${id}`, avatar);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };

// export const deleteAvatar = async (id) => {
//   try {
//     const response = await api.delete(`/avatars/${id}`);
//     return response.data;
//   } catch (error) {
//     throw error;
//   }
// };
