import { Link } from "react-router-dom";
import { BsInstagram } from "react-icons/bs";

import "./InstagramCard.scss"

type InstagramCardProps = {
    img: string;
    link: string;
    id?: number | string;
}

const InstagramCard = ({img,link}: InstagramCardProps) => {
  return (
    <Link to={link} className="insta-card w-full h-[280px] overflow-hidden group">
      <img src={img} alt="instagram" className="object-cover w-full h-full transition duration-300 group-hover:scale-110 group-hover:rotate-3" />
      <BsInstagram className="icon" />
    </Link>
  )
}

export default InstagramCard
