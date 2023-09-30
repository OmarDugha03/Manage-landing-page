import Image from "next/image";
import { FC } from "react";
import { mobSection, descSection } from "@Images/index";
interface CTAProps {}

const CTA: FC<CTAProps> = ({}) => {
  return (
    <div className="relative pt-8 overflow-hidden lg:pt-12">
      <div className="absolute">
        <Image src={mobSection} alt="svg" className="lg:hidden" />
        <Image src={descSection} alt="svg" className="hidden lg:block" />
      </div>
      <div className="bg-[#f44336] w-full flex flex-col items-center py-12">
        <h3 className="max-w-md py-2 mx-4 text-5xl font-medium tracking-wide text-center text-white">
          Simplify how your team works today.{" "}
        </h3>
        <button className="px-8 py-3 my-6 font-medium text-[#f44336] transition-all duration-100 ease-linear delay-100 bg-white rounded-full shadow-xl hover:bg-opacity-80 hover:text-white focus:outline-none focus:ring-1">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default CTA;
