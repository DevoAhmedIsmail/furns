import { useEffect, useState } from "react";
import PageHeader from "../../components/shared/PageHeader/PageHeader";
import { useParams } from "react-router-dom";
import { TProduct } from "../../types";
import productsServices from "../../servcies/productsServices";
import ProductCard from "../../components/shared/ProductCard/ProductCard";
import ProductsLabel from "../../Data/ProductsLabel";

const Shop = () => {
  const { categoryName } = useParams();
  const [products, setProducts] = useState<TProduct[]>([]);

  const getProducts = async () => {
    try {
      const productsData = await productsServices.getProducts();
      setProducts(productsData.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

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
          <div className="grid grid-cols-3 col-span-3 gap-4">
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
        </div>
      </section>
    </div>
  );
};

export default Shop;
