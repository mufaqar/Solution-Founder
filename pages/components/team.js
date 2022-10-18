import Image from 'next/image'

export default function Team(props) {
  
  return (
    <>
      <div className="p-3 bg-white team shadow-teamShadow ">
        <div className="relative flex items-center justify-center">
          <Image
            src={props.icon}
            alt={props.title}
            className="object-cover object-center"
            width={500}
            height={500}
          />
          <figure className='absolute -bottom-2'>
            <Image
              src="/images/img-curve-dark.png"
              alt="img-curve-dark.png"
              className="absolute bottom-0 center first"
              width={40}
              height={30}
            />
          </figure>
          <figure className='absolute -bottom-2'>
            <Image
              src="/images/img-curve.png"
              alt="img-curve.png"
              className="absolute bottom-0 center"
              width={40}
              height={30}
            />
          </figure>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
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
