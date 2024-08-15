import welcomeImg from "../../../assets/images/about-us/section.jpg";

const WelcomeSection = () => {
  return (
    <div className=" wrapper">
      <div className="py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="w-full">
            <img
              src={welcomeImg}
              alt="Welcome"
              className="object-cover w-full h-full"
            />
          </div>

          <div className="">
            <h2 className="h3-medium">Welcome To Furns</h2>
            <br />
            <p className="p-regular-16 leading-[26px] text-[#474747]">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
              aperiam fugit consequuntur voluptatibus ex sint iure in,
              distinctio sed dolorem aspernatur veritatis repellendus dolorum
              voluptate, animi libero officiis eveniet accusamus recusandae.
              Temporibus amet ducimus sapiente voluptatibus autem dolorem magnam
              quas, porro suscipit. Quibusdam culpa asperiores exercitationem
              architecto quo distinctio sed dolorem!
            </p>
            <br />
            <p className="p-regular-16 leading-[26px] text-[#474747]">
              Sint voluptatum beatae necessitatibus quos mollitia vero, optio
              asperiores aut tempora iusto eum rerum, possimus, minus quidem ut
              saepe laboriosam. Praesentium aperiam accusantium minus
              repellendus laudantium provident quod recusandae exercitationem
              natus dignissimos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
