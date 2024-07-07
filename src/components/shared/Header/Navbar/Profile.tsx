import { SlUser } from "react-icons/sl";
import { Popover, PopoverContent, PopoverTrigger } from "../../../ui/popover";

const Profile = () => {
  return (
    <div>
      <Popover>
        <PopoverTrigger>
          <SlUser size={25} className="nav-icon" />
        </PopoverTrigger>
        <PopoverContent className="max-w-[150px] py-4 px-2">
          Menu
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default Profile;
