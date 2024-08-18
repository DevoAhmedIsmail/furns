import PersonalCard from "../../shared/PersonalCard/PersonalCard"
import userImg01 from "../../../assets/images/users/woman-1.webp"

const MeetTeam = () => {
  return (
    <div className="bg-[#f4f5f7]">
      <div className="wrapper">
        <div className="py-12">
            <h2 className="mb-12 text-center h3-bold">Meet Our Team</h2>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                <PersonalCard
                    img={userImg01}
                    job="Web Designer"
                    name="Ms. Veronica"
                    socialLinks={{
                        facebook: "https://www.facebook.com",
                        instagram: "https://www.instagram.com",
                        twitter: "https://www.twitter.com",
                        linkedin:"https://linkedin.com"
                    }}
                />
                <PersonalCard
                    img={userImg01}
                    job="Web Designer"
                    name="Ms. Veronica"
                    socialLinks={{
                        facebook: "https://www.facebook.com",
                        instagram: "https://www.instagram.com",
                        linkedin:"https://linkedin.com"
                    }}
                />
                <PersonalCard
                    img={userImg01}
                    job="Web Designer"
                    name="Ms. Veronica"
                    socialLinks={{
                        facebook: "https://www.facebook.com",
                        instagram: "https://www.instagram.com"
                    }}
                />
                <PersonalCard
                    img={userImg01}
                    job="Web Designer"
                    name="Ms. Veronica"
                    socialLinks={{
                        facebook: "https://www.facebook.com",
                        instagram: "https://www.instagram.com",
                        linkedin:"https://linkedin.com"
                    }}
                />
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default MeetTeam
