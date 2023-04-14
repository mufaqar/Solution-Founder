import Image from 'next/image';
import GlobalReach from '../../public/images/products.png';

export default function Cardnew(props) {
  const features = props.post;

  return (
    <>
      {features ? (
        features.map((feature, index) => (
          <>
            <div
              key={index}
              className="relative flex flex-col items-center px-6 space-y-4 bg-white rounded-md cursor-pointer hover:horder group justify-items-center py-11 shadow-sh hover:shadow-shl"
            >
              <figure className="absolute left-0 top-1">
                <Image
                  src="/images/F.png"
                  alt="F.png"
                  className="absolute top-0 left-0 rounded-md"
                  width={50}
                  height={50}
                />
              </figure>
              <Image
                // src={feature.icon.mediaItemUrl ? feature.icon.mediaItemUrl : ''}
                src = {GlobalReach}
                alt={feature.title}
                className="w-[32%] h-[48%] mb-4 group-hover:rotate-360 transition-all duration-200"
                width={155}
                height={55}
              />
              <h3 className="mt-4 text-center box-title">{feature.title}</h3>
            </div>
          </>
        ))
      ) : (
        <div className="relative flex flex-col items-center px-6 space-y-4 bg-white border border-gray-100 rounded-md cursor-pointer group new_card_wrapper justify-items-center py-11 shadow-sh hover:shadow-shl">
          <figure className="bg_wrapper ">
            <Image
              src="/images/F.png"
              alt="F.png"
              // className="absolute top-0 left-0 rounded-md"
              width={45}
              height={40}
            />
          </figure>
          <Image
            // src={props.icon}
            src = {GlobalReach}
            alt={props.title}
            className="w-[32%] h-[48%] mb-4 group-hover:rotate-360 transition-all duration-200"
            width={55}
            height={50}
          />
          <h3 className="text-center box-title">{props.title}</h3>
        </div>
      )}
    </>
  );
}
