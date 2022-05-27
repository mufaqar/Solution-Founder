// import axios from "axios";
// import { useState, useEffect } from "react";
import Link from 'next/link';
import Image from 'next/image';


export default function LatestSuccessStories({data}) {

  // console.log('LatestSuccessStories', data);

  // const [querydata, setQueryData] = useState();


  // useEffect(() => {
  //   const axios = require("axios")
  //   axios({
  //     url: 'https://solutionfounder.com/graphql',
  //     method: 'post',
  //     data: {
  //       query: `
  //     query  GetAllSuccessStories {
  //       allSuccessStories(first: 4) {
  //         edges {
  //           node {
  //             title
  //             uri
  //             featuredImage {
  //               node {
  //                 mediaItemUrl
  //               }
  //             }
  //             successStoryExtra {
  //               shortInfo
  //             }
  //           }
  //         }
  //       }
  //     }
  //     `
  //     }
  //   }).then((result) => {
  //     const responseReslt = result.data.data.allSuccessStories.edges;
  //     setQueryData(responseReslt);
  //   });
  // }, []);


  return (
    
    <>
      <section className="py-28 px-7">
        <h2 className="md:text-4xl text-3xl leading-8 uppercase font-bold text-[#302E2E] text-center mb-8">
          OUR SUCCESS STORIES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-[1200px] mx-auto mb-8">
            {
              data.map((item, index) => (
                <div key={index} className='flex flex-col'>
                  <Image
                    src={item.node.featuredImage.node.mediaItemUrl}
                    alt={item.node.title}
                    width={500}
                    height={350}
                  />
                  <div className='relative p-1 shadow-sm'>
                    <div className="p-5 space-y-1">
                      <h3 className="box-title">
                        <Link href={item.node.uri}>{item.node.title}</Link>
                      </h3>
                      <p className="text-base font-medium text-[#535353]">
                        {item.node.successStoryExtra.shortInfo}
                      </p>
                    </div>
                    <div className="absolute bottom-0 right-0 flex justify-end">
                      <figure className="max-h-[18px]">
                        <Image
                          src="/images/color-bar-light.jpg"
                          alt="images/color-bar-light.jpg"
                          className="w-[55%] h-[10px]"
                          width={155}
                          height={8}
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>

      </section>
    </>
  );
}
