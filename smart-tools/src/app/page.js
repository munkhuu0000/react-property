import { HouseCard } from "./_component/HouseCard";

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

const buttons = [{ buttonText: "House" }];

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
      <div className="w-screen h-[474px] border-2 border-black bg-[#F9FAFB] flex items-center flex-col pb-10 pt-10">
        <div>
          {" "}
          <p className="color-[#4A5565] text-x1">
            Buying Doesn't Have to Be Overwhelming
          </p>
        </div>
        <p className="color-[#4A5565] text-base">
          Our streamlined process makes finding your dream home simple and
          stress-free
        </p>
      </div>
      <div className="w-screen h-fit flex flex-col items-center">
        <div>
          <p className="text-[#0A0A0A] text-[24px] flex justify-center pb-9">
            ExploreProperties
          </p>
        </div>
        <div className="w-7xl items-center grid grid-cols-3 grid-rows-2 gap-x-7 gap-y-6 px-20">
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
    </div>
  );
}
