import React from 'react';

export default function Team(props) {
  return (
    <>
      <div className="team bg-white p-3 shadow-teamShadow ">
        <div className="relative items-center flex justify-center">
          <img
            src={`images/${props.icon}`}
            alt={`images/${props.icon}`}
            className="object-cover object-center"
          />
          <img
            src="/images/img-curve-dark.png"
            alt="img-curve-dark.png"
            className="absolute bottom-0 center first"
          />
          <img
            src="/images/img-curve.png"
            alt="img-curve.png"
            className="absolute bottom-0 center"
          />
        </div>
        <div className="p-4 items-center flex flex-col justify-center">
          <h2 className="text-[#0261A3] text-xl font-bold flex items-center">
            {props.name}
          </h2>
          <p className="text-[#8DC63F] text-sm font-normal">
            {props.designation}
          </p>
        </div>
      </div>
    </>
  );
}
