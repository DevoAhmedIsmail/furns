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
    </div>
  )
}

export default Aboutus
