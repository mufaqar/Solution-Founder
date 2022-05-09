export default function Locations(props) {
  return (
    <>
      <div className="w-full relative md:py-10 md:px-16 p-5 space-y-8 border-4 border-[#133C6D]">
        <h3 className="text-[26px] text-[#302E2E] font-bold uppercase">
          {props.country}
        </h3>
        <ul className="space-y-5">
          <li className="text-[#535353] hover:text-[#8DC63F] text-base font-semibold">
            <a href="#">{props.states}</a>
          </li>
          <li className="text-[#535353] hover:text-[#8DC63F] text-base font-semibold">
            <a href="#">{props.phone}</a>
          </li>
          <li className="text-[#535353] hover:text-[#8DC63F] text-base font-semibold">
            <a href="#">{props.phone1}</a>
          </li>
          <li className="flex items-center space-x-2">
            <a
              href="#"
              className="bg-[#8DC63F] hover:bg-[#302E2E] text-white md:py-2 py-2 md:px-9 px-2 text-sm font-bold uppercase rounded"
            >
              Software Development{' '}
            </a>
            <a
              href="#"
              className="bg-[#585858] hover:bg-[#302E2E] text-white py-2 px-9 text-sm font-bold uppercase rounded"
            >
              R&D
            </a>
          </li>
        </ul>
        <img
          src="images/color-bar (1).jpg"
          alt="images/color-bar (1).jpg"
          className="w-[55%] absolute bottom-0 right-0"
        />
      </div>
    </>
  );
}
