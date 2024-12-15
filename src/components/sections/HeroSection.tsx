import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="border-b-4 border-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 min-h-[80vh]">
        <div className="border-black max-w-2xl w-full ml-auto order-2 sm:border-e-4 sm:order-1">
          Column 1
        </div>
        <div className="max-w-2xl w-full h-[50vh] mr-auto order-1 sm:h-[80vh] sm:order-2">
          <Image
            src="/assets/hero-image.webp"
            alt="Hero Image"
            width="0"
            height="0"
            className="w-auto h-full p-4 mx-auto"
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
