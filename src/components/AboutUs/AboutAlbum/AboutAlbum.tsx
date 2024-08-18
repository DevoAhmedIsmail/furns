import albumImg01 from "../../../assets/images/about-us/album-1.jpg"
import albumImg02 from "../../../assets/images/about-us/album-2.webp"
import albumImg03 from "../../../assets/images/about-us/album-3.webp"

const AboutAlbum = () => {
  return (
    <div className="wrapper">
      <div className="py-12">
        <div className="flex flex-col gap-4 md:flex-row">
            <div>
                <img src={albumImg01} alt="Album" className="object-cover w-full h-full" />
            </div>
            <div className="flex flex-col gap-4">
                <img src={albumImg02} alt="Album" className="object-cover w-full h-full" />
                <img src={albumImg03} alt="Album" className="object-cover w-full h-full" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutAlbum
