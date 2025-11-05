export const HouseCard = (props) => {
  return (
    <div className=" h-[370px] border rounded-[14px] border-[#0000001A] flex flex-col gap-6">
      <img className=" h-[192] object-cover" src={props.image} />
      <div className="w-[406px] h-[152px] p-4 gap-[11px]">
        <p className="text-[#FF6900] text-base font-normal">{props.price}</p>
        <p className="text-[#0A0A0A] text-base font-normal">{props.location}</p>
        <p className="text-[#4A5565] text-base font-normal">{props.bedrooms}</p>
        <div className="w-[305px] h-5 flex flex-row gap-4">
          <p className="text-[#4A5565] text-base font-normal">
            {props.bathrooms}
          </p>
          <p className="text-[#4A5565] text-base font-normal">{props.sqr}</p>
        </div>
      </div>
    </div>
  );
};
