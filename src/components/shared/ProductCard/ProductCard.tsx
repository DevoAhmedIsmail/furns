import { Link } from "react-router-dom";
import Badge from "./Badge";
import ProductsLabel from "../../../Data/ProductsLabel";
import ProductIcon from "./ProductIcon";
import { Button } from "../../ui/button";

import "./ProductCard.scss"
import { t } from "i18next";

type IProductCardProps = {
  img: string;
  oldPrice?: number;
  price: number;
  title: string;
  discount?: number | string;
  productLabel: string;
};
const ProductCard = ({
  img,
  price,
  title,
  discount,
  oldPrice,
  productLabel,
}: IProductCardProps) => {
  return (
    <Link to={`/product`} className="relative w-full product-card">
      <div className="relative h-[400px] w-full overflow-hidden shadow-md rounded-sm">
        <div className="absolute inset-0">
          <img src={img} alt={title} className="object-cover size-full" />
        </div>

        <Badge
          discount={discount}
          isNew={productLabel === ProductsLabel.newArrival.key}
        />

        {/* icons */}
        <div className="absolute right-4 top-4">
          <ProductIcon favouriteIcon  />
        </div>

        {/* Add To Cart */}
        <div className="absolute hidden w-full px-5 add-cart-btn bottom-5 flex-center">
          <Button className="w-full text-black bg-white hover:text-mainColor hover:bg-white">{t("add-to-cart")}</Button>
        </div>
      </div>

      <div className="mt-3 text-center">
        <p className="p-regular-20">{title}</p>
        <p className="gap-1 flex-center p-regular-18">
          <span>${price}</span>
          {oldPrice && (
            <span className="text-sm line-through text-slate-400">
              ${oldPrice}
            </span>
          )}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
