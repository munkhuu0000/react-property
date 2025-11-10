export const Offers = (props) => {
  return (
    <div className="w-[624px] h-[107px] flex flex-row">
      <div className="w-[92px] h-[107px] flex justify-center">
        <div className="w-10 h-10 rounded-full border-2 border-[#FF6900] flex justify-center items-center">
          <p className="text-base text-[#FF6900] font-normal ">
            {props.numbers}
          </p>
        </div>
      </div>
      <div className="w-[532px] h-[107px] flex flex-col gap-2">
        <p className="text-lg font-medium text-[#0A0A0A]">{props.offer}</p>
        <p className="text-base font-base text-[#4A5565]">{props.details}</p>
      </div>
    </div>
  );
};
