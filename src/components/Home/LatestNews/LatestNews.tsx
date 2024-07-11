import { t } from "i18next";
import LatestNewsSlider from "./LatestNewsSlider";

const LatestNews = () => {
  return (
    <div className="py-5">
      <div className="wrapper">
        <div className="flex-col text-center flex-center">
          <h1 className="h3-bold">{t("latest-news")}</h1>
          <p className="mt-2 max-w-[500px]">{t("section-subtitle")}</p>
        </div>

        <div className="mt-3">
          <LatestNewsSlider />
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
