export const Agents = (porps) => {
  return (
    <div className="w-[302px] h-[390px] flex  flex-col border rounded-[14px] pt-0 border-[#0000001A]">
      <img
        className="w-[302px] h-64 rounded-t-[14px] object-cover"
        src={porps.image}
      />
      <div className="flex justify-center flex-col gap-2 items-center pt-7">
        <p className="text-base text-[#0A0A0A] font-normal">{porps.name}</p>
        <p className="text-sm text-[#4A5565] font-normal">{porps.occupation}</p>
        <p className="text-sm text-[#FF6900] font-normal">
          {porps.numberOfSold}
        </p>
      </div>
    </div>
  );
};
