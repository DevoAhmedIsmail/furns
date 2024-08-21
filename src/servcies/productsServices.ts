import Axios from "./axios";

const productsServices = {
  getProducts: async function (activePage: number, sortType: string) {
    const response = await Axios.get(`products?_page=${activePage}&_per_page=12&${sortType}`);
    return response;
  },
 
};

export default productsServices;
