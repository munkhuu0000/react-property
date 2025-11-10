"use client";
import { Agents } from "./_component/Agents";
import { Buttons } from "./_component/Buttons";
import { HouseCard } from "./_component/HouseCard";
import { Offers } from "./_component/Offers";
import { Pros } from "./_component/Pros";

const houseData = [
  {
    image: "/house/house1.jpg",
    price: "216,000$",
    location: "Piney hills",
    bedrooms: "4 bedrooms",
    bathrooms: "2 bathrooms",
    sqr: "2,150sqft",
  },
  {
    image: "/house/house2.jpg",
    price: "450,000$",
    location: "River Oak",
    bedrooms: "3 bedrooms",
    bathrooms: "2 bathrooms",
    sqr: "1,800sqft",
  },
  {
    image: "/house/house3.jpg",
    price: "318,000$",
    location: "Maple Glen",
    bedrooms: "5 bedrooms",
    bathrooms: "3 bathrooms",
    sqr: "2,850 sqft",
  },
  {
    image: "/house/house4.jpg",
    price: "325,000$",
    location: "Forest Hill",
    bedrooms: "4 bedrooms",
    bathrooms: "2 bathrooms",
    sqr: "2,200 sqft",
  },
  {
    image: "/house/house5.jpg",
    price: "295,000$",
    location: "Cedar park",
    bedrooms: "3 bedrooms",
    bathrooms: "2 bathrooms",
    sqr: "1,650 sqft",
  },
  {
    image: "/house/house5.jpg",
    price: "425,000$",
    location: "Willow Greek",
    bedrooms: "4 bedrooms",
    bathrooms: "3 bathrooms",
    sqr: "2,650 sqft",
  },
];

const OffersData = [
  {
    numbers: "1",
    offer: "Browse Curated Homes",
    details:
      "Explore our carefully selected collection of properties that match your lifestyle and budget. Every listing is verified and includes detailed information.",
  },
  {
    numbers: "3",
    offer: "Browse Curated Homes",
    details:
      "Explore our carefully selected collection of properties that match your lifestyle and budget. Every listing is verified and includes detailed information.",
  },
  {
    numbers: "2",
    offer: "Browse Build a Tour Homes",
    details:
      "Explore our Schedule viewings at your convenience and visit multiple properties in one trip. Our team coordinates everything to save you time. selected collection of properties that match your lifestyle and budget. Every listing is verified and includes detailed information.",
  },

  {
    numbers: "4",
    offer: "Offer & Close",
    details:
      "Make confident offers with our support and navigate the closing process smoothly. We handle the paperwork so you can focus on moving in.",
  },
];

const buttons = [
  {
    buttonText: "House",
    isActive: true,
  },
  {
    buttonText: "Villa",
    isActive: false,
  },
  {
    buttonText: "Apartment",
    isActive: false,
  },
];

const agents = [
  {
    image: "/agents/agent1.jpg",
    name: "Micheal Chen",
    occupation: "Senior Real Estate Agent",
    numberOfSold: "24 properties sold",
  },
  {
    image: "/agents/agent2.jpg",
    name: "David Martinez",
    occupation: "Property Specialist",
    numberOfSold: "18 properties sold",
  },
  {
    image: "/agents/agent3.jpg",
    name: "Investment Advisor",
    occupation: "Investment Advisor",
    numberOfSold: "32 properties sold",
  },
  {
    image: "/agents/agent4.jpg",
    name: "Robert Thompson",
    occupation: "Luxury Home Expert",
    numberOfSold: "28 properties sold",
  },
];

export default function Home() {
  return (
    <div>
      <div className="bg-[#FFFFFF] w-screen h-[590px]  flex flex-col justify-center pt-16 pb-16">
        <div className="w-screen h-112px flex flex-col items-center gap-10 pb-10">
          <div className="w-screen h-18  flex flex-col items-center  ">
            <h1 className=" text-[24px] font-medium text-[#0A0A0A]">
              Smart tools
            </h1>
            <h1 className=" text-[24px] font-medium text-[#0A0A0A]">
              Real Experts, Easy Moves
            </h1>
          </div>
          <h3 className="text-[16px] font-normal text-[#4A5565]">
            Your journey to finding the perfect home starts here
          </h3>
        </div>
        <div className="w-screen h-[234px] gap-6  flex justify-center pl-20 pr-20">
          <div className="w-[410.67px] h-[234px] border border-[#0000001A] rounded-[14px] flex justify-center flex-col items-center p-[25px] gap-9 ">
            <div className="w-12 h-12 bg-[#FFEDD4] rounded-full flex justify-center items-center">
              <img src="/image.png" className="w-6 h-6" />
            </div>
            <div className="">
              <p className="text-[#0A0A0A] text-[24px] flex justify-center pb-9">
                Top-end curation
              </p>
              <p className="text-[14px] text-[#4A5565] flex justify-center text-center">
                Carefully selected properties that meet our high standards of
                quality
              </p>
            </div>
          </div>
          <div className="w-[410.67px] h-[234px] border border-[#0000001A] rounded-[14px] flex justify-center flex-col items-center p-[25px] gap-9 ">
            <div className="w-12 h-12 bg-[#FFEDD4] rounded-full flex justify-center items-center">
              <img src="/people.png" className="w-6 h-6" />
            </div>
            <div className="">
              <p className="text-[#0A0A0A] text-[24px] flex justify-center pb-9">
                Top-end curation
              </p>
              <p className="text-[14px] text-[#4A5565] flex justify-center text-center">
                Carefully selected properties that meet our high standards of
                quality
              </p>
            </div>
          </div>
          <div className="w-[410.67px] h-[234px] border border-[#0000001A] rounded-[14px] flex justify-center flex-col items-center p-[25px] gap-9 ">
            <div className="w-12 h-12 bg-[#FFEDD4] rounded-full flex justify-center items-center">
              <img src="/ligthning.png" className="w-6 h-6" />
            </div>
            <div className="">
              <p className="text-[#0A0A0A] text-[24px] flex justify-center pb-9">
                Top-end curation
              </p>
              <p className="text-[14px] text-[#4A5565] flex justify-center text-center">
                Carefully selected properties that meet our high standards of
                quality
              </p>
            </div>
          </div>
        </div>
        <div className="w-screen h-[140.36] flex justify-center pt-10">
          <button className="w-[140.34] h-9 bg-[#FF6900] rounded-lg">
            Get started
          </button>
        </div>
      </div>
      <div className="w-screen h-[474px] bg-[#F9FAFB] flex items-center flex-col pb-10 pt-10 gap-6 mb-[107px]">
        <div className="w-[213px] flex justify-center items-center">
          <p className="text-[#0A0A0A] font-medium text-[20px] text-center">
            Buying Doesn't Have to Be Overwhelming
          </p>
        </div>
        <p className="text-[#4A5565] font-normal text-base">
          Our streamlined process makes finding your dream home simple and
          stress-free
        </p>
        <div className="w-7xl h-[246px] grid grid-cols-2 grid-rows-2 gap-8">
          {OffersData.map((item, index) => {
            return (
              <Offers
                key={index}
                numbers={item.numbers}
                offer={item.offer}
                details={item.details}
              />
            );
          })}
        </div>
      </div>
      <div className="w-screen h-fit flex flex-col items-center">
        <div>
          <p className="text-[#0A0A0A] text-[24px] flex justify-center pb-9">
            ExploreProperties
          </p>
        </div>
        <div className="flex flex-row gap-2 h-[92px]">
          {buttons.map((el, i) => {
            return (
              <Buttons
                key={i}
                isActive={el.isActive}
                buttonText={el.buttonText}
              />
            );
          })}
        </div>
        <div className="w-7xl items-center grid grid-cols-3 grid-rows-2 gap-x-7 gap-y-6">
          {houseData.map((item, index) => {
            return (
              <HouseCard
                key={index}
                image={item.image}
                price={item.price}
                location={item.location}
                bedrooms={item.bedrooms}
                bathrooms={item.bathrooms}
                sqr={item.sqr}
              />
            );
          })}
        </div>
      </div>
      <div className="w-7xl h-[686px] flex flex-col justify-self-center items-center bg-[#F9FAFB] ">
        <div className="w-[178px] h-fit flex flex-wrap justify-center">
          <p className="text-xl text-[#0A0A0A] font-normal pt-10 text-center">
            Meet the People Behind the Process
          </p>
        </div>
        <p className="text-[#4A5565] font-normal text-base pt-4">
          Our experienced team is dedicated to helping you find your perfect
          home
        </p>
        <div className="w-7xl h-fit flex flex-row justify-center gap-6 pt-10 pb-11">
          {agents.map((item, index) => {
            return (
              <Agents
                key={index}
                image={item.image}
                name={item.name}
                occupation={item.occupation}
                numberOfSold={item.numberOfSold}
              />
            );
          })}
        </div>
        <button className="w-[140.34] h-9 bg-[#FF6900] rounded-lg">
          Meet the team
        </button>
      </div>
      <div className="w-fit h-fit flex justify-center items-center">
        <Pros />
      </div>
    </div>
  );
}
