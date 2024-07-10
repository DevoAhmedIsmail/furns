import { t } from "i18next"
import { Link } from "react-router-dom"

type TCategoryCardProps = {
  img: string,
  title: string,
  link: string
}

const CategoryCard = ({img, title, link}: TCategoryCardProps) => {
  return (
    <Link to={link} className="flex-center">
      <div className="w-[180px] h-[180px] border border-black rounded-full p-4 flex-center flex-col text-center gap-2 hover:border-mainColor hover:border-dashed transition-all duration-300">
        <img src={img} alt={title}  />
        <p className="capitalize p-medium-16">{t(title)}</p>
      </div>
    </Link>
  )
}

export default CategoryCard