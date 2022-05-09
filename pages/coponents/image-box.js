export default function ImageBox(props) {
  return (
    <>
      <div className="md:w-2/6 w-full flex items-center justify-items-center py-11 px-6 space-y-4 flex-col">
        <img
          src={`images/${props.icon}`}
          alt={`images/${props.icon}`}
          className="w-[15%]"
        />
        <h3 className="text-[#302E2E] text-xl font-medium">{props.title}</h3>
        <p className="text-base font-medium text-center text-[#535353]">
          {props.description}
        </p>
      </div>
    </>
  );
}
