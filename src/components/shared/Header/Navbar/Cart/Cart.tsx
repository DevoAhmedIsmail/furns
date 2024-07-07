import { t } from "i18next";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../../../ui/sheet";

// Icons
import { IoBagOutline } from "react-icons/io5";

// Images
import chair1Img from "../../../../../assets/images/products/chair.webp";
import chair2Img from "../../../../../assets/images/products/chair-2.webp";
import sofaImg from "../../../../../assets/images/products/sofa.webp";
import CartItemSidebar from "./CartItemSidebar";

const Cart = () => {
  const checkoutData = {
    subTotal: 523.3,
    vat: 104.66,
    shipping: 10.0,
    total: 637.96,
  };

  const cartData = [
    {
      id: 123,
      img: chair1Img,
      title: t("wal-cut-board"),
      quantity: 1,
      price: 91.86,
    },
    {
      id: 124,
      img: chair2Img,
      title: t("lucky-wooded-elephant"),
      quantity: 1,
      price: 453.28,
    },
    {
      id: 125,
      img: sofaImg,
      title: t("fish-cut"),
      quantity: 1,
      price: 87.34,
    },
    {
      id: 126,
      img: chair2Img,
      title: t("lucky-wooded-elephant"),
      quantity: 1,
      price: 453.28,
    },
    {
      id: 127,
      img: sofaImg,
      title: t("fish-cut"),
      quantity: 1,
      price: 87.34,
    },
  ];
  return (
    <div className="">
      <Sheet>
        <SheetTrigger>
          <IoBagOutline size={28} className="nav-icon" />
        </SheetTrigger>

        <SheetContent
          side={t("lang") === "en" ? "right" : "left"}
          className="max-h-screen overflow-auto"
        >
          <SheetHeader>
            <SheetTitle asChild>
              <h2 className="p-bold-24">{t("cart")}</h2>
            </SheetTitle>
            <div className="">
              {cartData?.map((item) => (
                <CartItemSidebar
                  key={item.id}
                  img={item.img}
                  title={item.title}
                  quantity={item.quantity}
                  price={item.price}
                  id={item.id}
                />
              ))}

              <div className="flex flex-col gap-2 py-5 p-regular-20">
                <div className="text-[22px] flex items-center">
                  <p className="flex-1">Sub-total</p>
                  <p>${checkoutData.subTotal}</p>
                </div>
                <div className="text-[22px] flex items-center">
                  <p className="flex-1">Vat(20%)</p>
                  <p>${checkoutData.vat}</p>
                </div>
                <div className="text-[22px] flex items-center">
                  <p className="flex-1">Shipping</p>
                  <p>${checkoutData.shipping}</p>
                </div>
                <div className="text-[22px] flex items-center">
                  <p className="flex-1">Total</p>
                  <p className="text-mainColor">${checkoutData.total}</p>
                </div>
              </div>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Cart;
