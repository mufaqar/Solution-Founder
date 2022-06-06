import Stories from './components/Stories';
import retail from '../public/images/retail.svg';
import Image from 'next/image';
const svgToImg = require("svg-to-img");

(async () => {
  const image = await svgToImg.from("<svg xmlns='http://www.w3.org/2000/svg'/>").toPng();
  
  console.log(image);
})();


export default function HomeStories({ posts }) {



  return (
    <>
      <div className="grid">
        <h4>Testing</h4>
        <Image src={retail}
          width={200}
          height={200}
        ></Image>
      </div>
    </>
  );
}
