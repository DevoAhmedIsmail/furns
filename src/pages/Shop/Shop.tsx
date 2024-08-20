import { useEffect, useState } from "react";
import PageHeader from "../../components/shared/PageHeader/PageHeader";
import { useParams } from "react-router-dom";
import { TProduct } from "../../types";
import productsServices from "../../servcies/productsServices";
import ProductCard from "../../components/shared/ProductCard/ProductCard";
import ProductsLabel from "../../Data/ProductsLabel";
import { IoIosArrowBack } from "react-icons/io";
import Pagination from "react-js-pagination";

const Shop = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState<TProduct[]>([]);
  const [activePage, setActivePage] = useState(1);
  const [itemsCount, setItemsCount] = useState(0);

  const getProducts = async () => {
    try {
      const productsData = await productsServices.getProducts(activePage);
      console.log(productsData.data);
      setProducts(productsData.data.data);
      setItemsCount(productsData.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  const changeActivePage = (newPage: number)=> {
    setActivePage(newPage)
    document.getElementById("products-list")?.scrollIntoView({behavior: "smooth"})
  }

  useEffect(() => {
    getProducts();
  }, [activePage]);

  return (
    <div className="">
      <PageHeader
        title="Shop"
        links={[{ name: "Home", url: "/" }, { name: categoryName || "Shop" }]}
      />

      <section className="wrapper">
        <div className="grid grid-cols-4">
          {/* Filters */}
          <div className="col-span-1"></div>

          {/* Products Display */}
          <div className="col-span-3">
            <div className="grid grid-cols-3 gap-4" id="products-list">
              {products?.map((product) => (
                <ProductCard
                  key={product.id}
                  img={product.img}
                  price={product.price}
                  oldPrice={product["old-price"]}
                  title={product.name}
                  productLabel={product.add_new ?? ProductsLabel.newArrival.key}
                  discount={product.discount}
                />
              ))}
            </div>

            <Pagination
              activePage={activePage}
              itemsCountPerPage={8}
              hideFirstLastPages={true}
              prevPageText={
                <IoIosArrowBack className="w-6 h-3 rtl:rotate-180" />
              }
              nextPageText={
                <IoIosArrowBack className="w-6 h-3 rotate-180 rtl:rotate-0" />
              }
              totalItemsCount={itemsCount} //length
              pageRangeDisplayed={
                Math.ceil(itemsCount / 8) > 4 ? 5 : Math.ceil(itemsCount / 8)
              } // total tickets length / number of items per page to the nearist intiger
              onChange={(pageNumber: number) => changeActivePage(pageNumber)}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
