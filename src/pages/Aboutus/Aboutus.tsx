import AboutAlbum from "../../components/AboutUs/AboutAlbum/AboutAlbum"
import FunctionalitySection from "../../components/AboutUs/FunctionalitySection/FunctionalitySection"
// import MeetTeam from "../../components/AboutUs/MeetTeam/MeetTeam"
import WelcomeSection from "../../components/AboutUs/WelcomeSection/WelcomeSection"
import PageHeader from "../../components/shared/PageHeader/PageHeader"

const Aboutus = () => {
  return (
    <div>
      <PageHeader
        title="About Us"
        links={[{ name: "Home", url: "/" }, { name: "About Us" }]}
      />
      <WelcomeSection />
      <FunctionalitySection  />
      <AboutAlbum />
      {/* <MeetTeam /> */}


    </div>
  )
}

export default Aboutus
