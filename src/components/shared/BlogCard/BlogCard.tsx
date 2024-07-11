import { Link } from "react-router-dom"
import { Button } from "../../ui/button"
import { t } from "i18next"

type TBlogCardProps = {
  img: string,
  title: string,
  id?: string | number,
  link: string,
  date: string,
  description: string
}
const BlogCard = ({img,link,title, date,description}: TBlogCardProps) => {
  return (
    <div className="w-full">
      <Link to={link} className="h-[300px] min-[630px]:h-[420px] w-full">
        <img src={img} alt={title} className="object-cover size-full" />
      </Link>

      <div className="flex flex-col gap-3 mt-4">
        <p className="text-mainColor p-medium-18">{t(date)}</p>
        <p className="p-medium-24 line-clamp-1">{t(title)}</p>
        <p className="line-clamp-3">{t(description)}</p>
        <Button className="bg-[#4d4d4d] text-white hover:bg-[#4d4d4d] hover:text-white w-[130px] h-[45px] rounded-[3px] mt-3">{t("read-more")}</Button>
      </div>

    </div>
  )
}

export default BlogCard
