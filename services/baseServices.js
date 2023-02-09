import axios from "axios";

export const getRequest = async (url) => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.log("get request error", error.response);
    return error.response;
  }
};
export const postRequest = async (url, data) => {
  try {
    const response = await axios.post(url, data);
    return response;
  } catch (error) {
    console.log("get request error", error.response);
    return error.response;
  }
};
