import { t } from "i18next"
import ProductsTabs from "./ProductsTabs/ProductsTabs"

const OurProducts = () => {
  return (
    <div className="py-5">
        <div className="wrapper">
            <div className="flex-col text-center flex-center">
                <h1 className="h3-bold">{t("our-products")}</h1>
                <p className="mt-2 max-w-[500px]">{t("section-subtitle")}</p>
            </div>

            <ProductsTabs />
        </div>
    </div>
  )
}

export default OurProducts
