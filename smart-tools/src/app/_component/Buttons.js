export const Buttons = (props) => {
  return (
    <div className="w-fit h-9 flex flex-row justify-center bg-[#FF6900] px-2 py-3 items-center rounded-full">
      {props.buttonText}
    </div>
  );
};
