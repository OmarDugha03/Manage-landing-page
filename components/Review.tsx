"use client";
import { avatar } from "@Images/index";
import { FC, useState } from "react";
import Card from "./Card";
import { Tab } from "@headlessui/react";
import classNames from "classnames";
import Image from "next/image";
import { motion as m } from "framer-motion";
interface reviewProps {}

const review: FC<reviewProps> = ({}) => {
  const list = [
    {
      id: "1",
      name: " Anisha Li",
      avatar: avatar,
      select: false,
      text: "  “Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.”",
    },
    {
      id: "2",
      name: "  Ali Bravo",
      avatar: avatar,
      select: false,
      text: " “We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.” ",
    },
    {
      id: "3",
      name: " Richard Watts",
      avatar: avatar,
      select: false,
      text: "  “Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!”",
    },
    {
      id: "4",
      name: "  Shanai Gough ",
      avatar: avatar,
      select: false,
      text: "  “Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.”",
    },
  ];
  const [selected, setSelected] = useState(list);

  return (
    <div className="flex flex-col items-center ">
      <h3 className="max-w-md py-4 text-3xl font-bold text-center">
        What they’ve said
      </h3>
      <div className="hidden grid-cols-1 py-12 pb-6 md:grid md:grid-cols-2 lg:grid-cols-4 ">
        {list.map((i) => (
          <Card key={i.name} name={i.name} text={i.text} avatar={i.avatar} />
        ))}
      </div>
      <button className="py-3 px-8 my-6 font-medium text-white hidden md:block transition-all duration-100 ease-linear delay-100 rounded-full shadow-xl bg-[#f44336] hover:bg-opacity-80 hover:text-white focus:outline-none focus:ring-1">
        Get Started
      </button>
      <Tab.Group as="div" className="p-4 mx-auto md:hidden">
        <Tab.Panels>
          {list.map((i) => (
            <Tab.Panel key={i.id}>
              <m.div
                initial={{ opacity: 0, translateX: -100 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.44 }}
                exit={{ translateX: 100 }}>
                <Card name={i.name} text={i.text} avatar={i.avatar} />
              </m.div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
        <Tab.List>
          {selected.map((i) => (
            <Tab
              key={i.id}
              className={({ selected }) =>
                classNames(
                  "  ml-11 ls:ml-14 w-4 h-4   rounded-full border-2 p-2   border-[#f44336] focus:outline-none",
                  " duration-200 ease-in-out delay-100",
                  selected ? " bg-[#f44336]" : ""
                )
              }></Tab>
          ))}
        </Tab.List>
      </Tab.Group>
      <button className="py-3 md:hidden px-8 my-6 font-medium text-white transition-all duration-100 ease-linear delay-100 rounded-full shadow-xl bg-[#f44336] hover:bg-opacity-80 hover:text-white focus:outline-none focus:ring-1">
        Get Started
      </button>
    </div>
  );
};

export default review;
