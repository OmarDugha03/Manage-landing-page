import { FC } from "react";
import { heroSvg, intro } from "@Images/index";
import Image from "next/image";
interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <>
      <div className="relative overflow-x-clip">
        <div className="absolute left-12 lg:left-[700px]  overflow-hidden w-full -z-10  md:-top-96 -top-36">
          <Image src={heroSvg} alt="svg" className="" />
        </div>
      </div>
      <div className="relative flex flex-col items-center lg:items-start lg:justify-evenly lg:flex-row-reverse ">
        <Image src={intro} alt="Hero Images" />
        <div className="flex flex-col items-center p-4 m-4 lg:py-24 lg:items-start">
          <h1 className="max-w-md py-2 text-3xl font-bold text-center lg:text-left">
            {" "}
            Bring everyone together to build better products.
          </h1>
          <p className="max-w-md py-4 pb-6 mx-4 leading-relaxed text-center text-gray-500 lg:text-left">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>

          <button className="py-3 px-8 my-6 font-medium text-white transition-all duration-100 ease-linear delay-100 rounded-full shadow-xl bg-[#f44336] hover:bg-opacity-80 hover:text-white focus:outline-none focus:ring-1">
            Get Started
          </button>
        </div>
      </div>
      <div className="relative overflow-x-clip">
        <div className="absolute overflow-hidden left-52 m-0 md:w-[40%] md:top-[500px] md:left-[650px]  w-full -z-10 -top-64 lg:-left-72">
          <Image src={heroSvg} alt="svg" />
        </div>
      </div>
    </>
  );
};

export default Hero;
