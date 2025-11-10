"use client";
import { Prosmini } from "./Prosmini";

const prosData = [
  {
    icon: "/vector/Vector.png",
    firstSentence: "Find your dream home for life",
    secondSentence: "Browse thousands of properties and find the perfect place",
  },
  {
    icon: "/vector/Vector (1).png",
    firstSentence: "Pre-Approved Loan $1 to $5",
    secondSentence: "Get pre-approved quickly and know your budget",
  },
  {
    icon: "/vector/Vector (2).png",
    firstSentence: "Commission free for life",
    secondSentence: "Save thousands with our commission-free model",
  },
];

export const Pros = (props) => {
  return (
    <div className="w-7xl h-[152px] border border-amber-600 flex flex-col items-center ">
      {prosData.map((item, index) => {
        return (
          <Prosmini
            key={index}
            icon={item.icon}
            firstSentence={item.firstSentence}
            secondSentence={item.secondSentence}
          />
        );
      })}
    </div>
  );
};
