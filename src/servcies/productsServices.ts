import Axios from "./axios";

const productsServices = {
  getProducts: async function () {
    const response = await Axios.get(`products`);
    return response;
  },
 
};

export default productsServices;
