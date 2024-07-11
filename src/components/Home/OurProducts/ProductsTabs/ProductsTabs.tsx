import { useState } from "react";
import ProductsLabel from "../../../../Data/ProductsLabel";
import { t } from "i18next";
import ProductCard from "../../../shared/ProductCard/ProductCard";
import ProductsData from "../../../../Data/ProductsData";
import ProductsGrid from "../../../shared/ProductsGrid/ProductsGrid";

type ProductsLabelKey = keyof typeof ProductsLabel;
type Language = 'en' | 'ar';

const ProductsTabs = () => {
  const [selectedTab, setSelectedTab] =
    useState<ProductsLabelKey>("newArrival");

  return (
    <div className="my-8">
      <div className="flex-wrap gap-y-4 gap-x-8 flex-center">
        {(Object.keys(ProductsLabel) as ProductsLabelKey[]).map((key) => {
          return (
            <p
              className={`p-semibold-18 cursor-pointer 
                ${
                  selectedTab === ProductsLabel[key].key
                    ? "text-mainColor"
                    : "text-mainBlack"
                }`}
              onClick={() =>
                setSelectedTab(ProductsLabel[key].key as ProductsLabelKey)
              }
            >
              {ProductsLabel[key][t("lang") as Language]}
            </p>
          );
        })}
      </div>

        {/* Products Tabs */}
        <div className="mt-8">
            <ProductsGrid>
              {
                ProductsData.filter((product) => product.label === selectedTab).map((product) => (
                  <ProductCard
                    img={product.image}
                    title={product.title}
                    price={product.price}
                    discount={product.discount}
                    oldPrice={product.oldPrice}
                    productLabel={product.label}
                  />
                ))
              }
            </ProductsGrid>
        </div>
    </div>
  );
};

export default ProductsTabs;
