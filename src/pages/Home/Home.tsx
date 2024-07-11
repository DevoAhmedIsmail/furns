import CategoriesSlider from "../../components/Home/CategoriesSlider/CategoriesSlider"
import FollowInstagram from "../../components/Home/FollowInstagram/FollowInstagram"
import HeroSection from "../../components/Home/HeroSection/HeroSection"
import LatestNews from "../../components/Home/LatestNews/LatestNews"
import OurProducts from "../../components/Home/OurProducts/OurProducts"

const Home = () => {
  return (
    <div>
      <HeroSection />
      <CategoriesSlider />
      <OurProducts />
      <LatestNews />
      <FollowInstagram />
    </div>
  )
}

export default Home
