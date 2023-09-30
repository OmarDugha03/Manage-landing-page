import { FC } from "react";
import Features from "./Features";

interface MainSecProps {}

const MainSec: FC<MainSecProps> = ({}) => {
  const list = [
    {
      num: "01",
      heading: "Track company-wide progress",
      body: " See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
    },
    {
      num: "02",
      heading: "Advanced built-in reports",
      body: "  Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
    },
    {
      num: "03",
      heading: "Everything you need in one place",
      body: "  Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution. ",
    },
  ];
  return (
    <div className="flex flex-col items-center lg:pt-20 lg:grid lg:grid-cols-2 lg:mx-20 lg:items-start">
      <div className="">
        <h2 className="max-w-md py-2 pt-12 mx-4 text-3xl font-bold text-center lg:text-left">
          What’s different about Manage?
        </h2>
        <p className="max-w-md py-4 pb-6 mx-4 leading-relaxed text-center text-gray-500 lg:text-left">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
      <div>
        {list.map((i) => (
          <Features numb={i.num} heading={i.heading} body={i.body} />
        ))}
      </div>
    </div>
  );
};

export default MainSec;
