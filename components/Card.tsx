import Image from "next/image";
import { FC } from "react";

interface CardProps {
  name: string;
  text: string;
  avatar: any;
}

const Card: FC<CardProps> = ({ name, text, avatar }) => {
  return (
    <div className="flex flex-col items-center ">
      <Image src={avatar} alt="avatar" className="w-[30%]" />
      <h3 className="max-w-md py-2 text-3xl font-bold text-center">{name}</h3>
      <p className="max-w-md py-4 pb-6 mx-4 leading-relaxed text-center text-gray-500 ls:px-6">
        {text}
      </p>
    </div>
  );
};

export default Card;
