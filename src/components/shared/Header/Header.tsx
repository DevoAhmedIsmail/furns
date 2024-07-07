import Navbar from "./Navbar/Navbar"
import NavbarLinks from "./NavbarLinks/NavbarLinks"
import SettingsBar from "./SettingsBar/SettingsBar"

const Header = () => {
  return (
    <div>
      <SettingsBar />
      <Navbar />
      <NavbarLinks />
    </div>
  )
}

export default Header
