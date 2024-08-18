import { FaFacebookF, FaLinkedin, FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

type PersonalCardProps = {
  img: string;
  name: string;
  job: string;
  socialLinks: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
  };
};

const PersonalCard = ({ img, name, job, socialLinks }: PersonalCardProps) => {
  return (
    <div className="flex flex-col items-center p-8 bg-white rounded shadow-sm group">
      <div className="w-[200px] h-[200px] rounded-full overflow-hidden mb-8">
        <img src={img} alt="personal" className="object-cover w-full h-full" />
      </div>

      <div className="text-center">
        <p className="mb-1 p-medium-18">{name}</p>
        <p className="transition-opacity duration-300 p-regular-14 group-hover:opacity-0">{job}</p>
      </div>

      <div className="flex items-center justify-center gap-3 translate-y-2 opacity-0 group-hover:translate-y-[-15px] group-hover:opacity-100 transition-all duration-300">
        {socialLinks?.facebook && (
          <Link className="flex items-center gap-2" to={socialLinks.facebook} target="_blank">
            <FaFacebookF />
          </Link>
        )}
        {socialLinks?.twitter && (
          <Link className="flex items-center gap-2" to={socialLinks.twitter}>
            <FaTwitter />
          </Link>
        )}
        {socialLinks?.instagram && (
          <Link className="flex items-center gap-2" to={socialLinks.instagram}>
            <FaInstagram />
          </Link>
        )}
        {socialLinks?.linkedin && (
          <Link className="flex items-center gap-2" to={socialLinks.linkedin}>
            <FaLinkedin />
          </Link>
        )}
      </div>
    </div>
  );
};

export default PersonalCard;
