import { t } from "i18next";
import { Link } from "react-router-dom";

type ICartItemSidebarProps = {
    img: string;
    title: string;
    quantity: number;
    price: number;
    id: string | number
}

const CartItemSidebar = ({img, title, quantity, price,id}: ICartItemSidebarProps) => {
  return (
    <div className="relative border-b py-7 ">
    <Link to={`/product/${id}`}>
        <div className="flex gap-5">
            <div>
                <img src={img} alt={title} className="w-[112px] h-[132px] object-cover" />
            </div>
            <div className={`flex flex-col gap-4 ${t("lang") === "ar" ? "text-end" : "text-start"}`} style={{direction: "ltr"}}>
                <p>{title}</p>
                <p>{quantity} x <span className="text-mainColor p-semibold-20">${price}</span></p>
            </div>
        </div>
    </Link>
    </div>
  )
}

export default CartItemSidebar
