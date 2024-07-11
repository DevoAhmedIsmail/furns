type IBadgeProps = {
  discount?: number | string;
  isNew?: boolean;
};

const Badge = ({ discount, isNew }: IBadgeProps) => {
  return (
    <div className="absolute flex flex-col gap-2 left-4 top-4">
      {discount && (
        <span className="px-2 py-1 text-sm text-white rounded-md bg-mainColor">
          -{discount}%
        </span>
      )}
      {isNew && (
        <span className="px-2 py-1 text-sm text-white bg-green-700 rounded-md">
          New
        </span>
      )}
    </div>
  );
};

export default Badge;
