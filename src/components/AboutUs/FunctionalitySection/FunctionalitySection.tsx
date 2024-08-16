import ProgressBar from "../../shared/ProgressBar/ProgressBar";

const FunctionalitySection = () => {
  return (
    <section className="bg-[#f4f5f7]">
      <div className="wrapper">
        <div className="py-12">
          <div className="flex flex-col items-start justify-start gap-8 md:justify-center md:items-center md:flex-row">

            <div className="w-full">
              <h3 className="mb-4 h4-medium">Functionality meets perfection</h3>
              <p className="leading-[26px] text-[#474747]">
                In today’s day and age, one cannot underestimate the importance
                of design, the art of creating striking visuals to move and
                captivate your audience. And as the world becomes more and more
                digitized with each passing second, the importance of graphic
                design has been rocketed to the top.
              </p>
            </div>

            <div className="w-full">
                {/* Progress */}
                <ProgressBar title="UI/UX" percent={75} />
                <ProgressBar title="Ideas" percent={85} />
                <ProgressBar title="Design" percent={95} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunctionalitySection;
