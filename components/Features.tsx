import { FC } from "react";

interface FeaturesProps {
  numb: string;
  heading: string;
  body: string;
}

const Features: FC<FeaturesProps> = ({ numb, heading, body }) => {
  return (
    <>
      <div className="w-full max-w-md ml-2 leading-relaxed">
        <div className="flex items-center bg-orange-200 rounded-l-full">
          <span className=" bg-[#f44336] rounded-full text-base px-6 mr-2 py-2 font-bold text-white">
            {numb}
          </span>
          <h3 className="py-2 text-sm font-bold ">{heading}</h3>
        </div>
        <p className="max-w-md py-4 pb-6 mx-4 leading-relaxed text-left text-gray-500 t">
          {body}
        </p>
      </div>
    </>
  );
};

export default Features;
