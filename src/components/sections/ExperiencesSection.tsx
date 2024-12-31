import ExperiencesCarousel from "../ExperiencesCarousel";

const ExperiencesSection = () => {
  return (
    <div className="container flex min-h-screen flex-col md:gap-2 border-b-4 border-black">
      <h2 className="section-heading">Experiences</h2>
      <div className="grow flex justify-center items-center">
        <ExperiencesCarousel />
      </div>
    </div>
  );
};

export default ExperiencesSection;
