import { t } from "i18next";

type IBadgeProps = {
  discount?: number | string;
  isNew?: boolean;
};

const Badge = ({ discount, isNew }: IBadgeProps) => {
  return (
    <div className="absolute flex flex-col items-center gap-2 left-4 top-4">
      {discount && (
        <span className="w-[46px] h-[26px] flex-center p-medium-14 text-white rounded-md bg-mainColor">
          -{discount}%
        </span>
      )}
      {isNew && (
        <span className="w-[46px] h-[26px] flex-center p-medium-14 text-white bg-green-700 rounded-md">
          {t("new")}
        </span>
      )}
    </div>
  );
};

export default Badge;
