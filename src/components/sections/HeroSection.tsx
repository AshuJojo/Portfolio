import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="border-b-4 border-black">
      <div className="grid grid-cols-1 sm:grid-cols-2 min-h-[80vh]">
        <div className="border-black max-w-2xl w-full ml-auto order-2 content-center sm:border-e-4 sm:order-1">
          <div className="justify-items-center p-4 sm:justify-items-start xl:w-4/5">
            <p className="text-center text-sm font-extrabold sm:text-start xl:text-md  ">
              Hello Surfer! Welcome to my slice of Internet.
            </p>
            <p className="text-center text-lg font-extrabold leading-6 mt-1 mb-4 sm:text-start xl:leading-7 xl:text-xl">
              Let&apos;s turn your ideas into something the internet can&apos;t
              ignore!
            </p>
            <p className="text-center text-sm  font-medium sm:text-start xl:text-md">
              I&apos;m Ashutosh Sharma, a Fullstack Engineer who writes code
              that sometimes works on the first try. Turning caffeine into code
              and ideas into impact!
            </p>
            <Button className="mx-auto my-4 text-black" dropShadow="sm">
              <Link href="#">Download Resume</Link>
            </Button>
          </div>
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
