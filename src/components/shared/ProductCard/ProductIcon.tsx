import { Button } from "../../ui/button";

import { CiHeart } from "react-icons/ci";

type IProductIconProps = {
  favouriteIcon?: boolean;
};

const ProductIcon = ({ favouriteIcon }: IProductIconProps) => {
  return (
    <Button className="size-[40px] bg-white text-black rounded-full flex-center p-0 m-0 hover:text-mainColor hover:bg-white">
      {favouriteIcon && <CiHeart size={20} />}
    </Button>
  );
};

export default ProductIcon;
