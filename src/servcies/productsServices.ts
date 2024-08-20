import Axios from "./axios";

const productsServices = {
  getProducts: async function (activePage: number) {
    const response = await Axios.get(`products?_page=${activePage}&_per_page=12`);
    return response;
  },
 
};

export default productsServices;
