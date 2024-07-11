import CategoriesSlider from "../../components/Home/CategoriesSlider/CategoriesSlider"
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
    </div>
  )
}

export default Home
