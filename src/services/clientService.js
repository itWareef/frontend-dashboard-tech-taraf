// import axios from "axios";

// const clientApi = axios.create({
//   baseURL: "https://api.taraf.dashboard-tech.com/api",
// });

// export const request = async (options, token) => {
//   try {
//     const headers = {};

//     if (token) {
//       headers.Authorization = `Bearer ${token}`;
//     }

//     const res = await clientApi.request({
//       ...options,
//       headers,
//     });

//     return res;
//   } catch (error) {
//     console.error("Axios Error:", error.response?.data || error.message);
//     throw error;
//   }
// };

// export default clientApi;

import axios from "axios";

const clientApi = axios.create({
  baseURL: "https://api.taraf.dashboard-tech.com/api",
});
export const request = async (options, token) => {
  try {
    const headers = {
      Accept: "application/json",
    };

    if (!(options.data instanceof FormData)) {
      headers["Content-Type"] = "application/json";
    }

    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    const res = await clientApi.request({
      ...options,
      headers: {
        ...headers,
        ...(options.headers || {}),
      },
    });

    return res;
  } catch (error) {
    console.error("Axios Error:", error.response?.data || error.message);
    throw error;
  }
};
