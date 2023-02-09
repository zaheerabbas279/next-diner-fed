import { getRequest, postRequest } from "./baseServices";

import { configURL } from "./config";

export const getAllRestaurants = async () => {
  const response = await getRequest(configURL.getAllProducts);
  if (response) {
    return response;
  } else {
    console.log("error getting the data");
  }
};
export const postNewRestaurant = async (payload) => {
  const response = await postRequest(configURL.postRestaurant, payload);
  if (response) {
    return response;
  } else {
    console.log("error getting the data");
  }
};

export const getRestaurantDataById = async (id) => {
  const response = await getRequest(`${configURL.getRestaurantDataById}/${id}`);
  if (response) {
    return response;
  } else {
    console.log("error getting the data");
  }
};
