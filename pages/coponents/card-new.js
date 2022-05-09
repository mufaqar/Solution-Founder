export default function Cardnew(props) {
  //console.table(props);
  return (
    <div className=" relative flex items-center justify-items-center py-11 px-6 space-y-4 rounded-md flex-col shadow-sh hover:shadow-shl bg-white">
      <img
        src="/images/F.png"
        alt="F.png"
        className="absolute top-0 left-0 rounded-md"
      />
      <img
        src={`images/${props.icon}`}
        alt={`images/${props.icon}`}
        className="w-[32%] h-[48%] mb-4"
      />
      <h3 className="box-title text-center">{props.title}</h3>
    </div>
  );
}
