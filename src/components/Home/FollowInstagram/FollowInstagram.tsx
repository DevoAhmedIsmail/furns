import { t } from "i18next";
import InstagramPhotosData from "../../../Data/InstagramPhotosData";
import InstagramCard from "../../shared/InstagramCard/InstagramCard";
import ProductsGrid from "../../shared/ProductsGrid/ProductsGrid";

const FollowInstagram = () => {
  return (
    <div className="py-5">
      <div className="wrapper">
        {/* section header */}
        <div className="flex-col text-center flex-center">
          <h1 className="h3-bold">{t("follow-us-insta")}</h1>
          <p className="mt-2 max-w-[500px]">{t("section-subtitle")}</p>
        </div>

        {/* section data */}
        <ProductsGrid className="mt-12">
          {InstagramPhotosData.map((item) => (
            <InstagramCard
              key={item.id}
              img={item.img}
              link={item.link}
              id={item.id}
            />
          ))}
        </ProductsGrid>
      </div>
    </div>
  );
};

export default FollowInstagram;
