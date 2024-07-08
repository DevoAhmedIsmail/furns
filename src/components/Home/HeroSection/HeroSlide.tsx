import { Button } from "../../ui/button";

type THeroSliderProps = {
    label: string;
    title: string;
    description: string;
    img: string;
}

const HeroSlide = ({title, description, img, label}: THeroSliderProps) => {
  return (
    <div className="h-screen  bg-[#e7e7e7]">
        <div className="flex items-center justify-center h-full wrapper">
            <div className="flex items-center justify-center gap-5">
                <div className="w-1/2">
                    <div className="flex flex-col gap-2 mb-12">
                        <p className="p-medium-24 ">{label}</p>
                        <h1 className="h1-bold">{title}</h1>
                        <p className="p-regular-16">{description}</p>
                    </div>
                    <Button className="rounded-[3px] bg-mainColor" size="lg">Shop Now</Button>
                </div>
                <div className="w-1/2">
                    <img src={img} alt="title" className="object-contain w-full h-96" />
                </div>
            </div>

        </div>
    </div>
  )
}

export default HeroSlide
