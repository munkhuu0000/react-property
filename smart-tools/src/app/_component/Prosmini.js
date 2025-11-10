export const Prosmini = (props) => {
  <div className="w-[334px] h-[152px] flex flex-col items-center">
    <div className="w-16 h-16 flex justify-center items-center">
      <img
        className="w-8 h-8 flex justify-center items-center"
        src={props.icon}
      />
    </div>
    <p className="text-base text-[#0A0A0A] font-normal">
      {props.firstSentence}
    </p>
    <p className="text-sm text-[#4A5565] font-normal">{props.secondSentence}</p>
  </div>;
};
