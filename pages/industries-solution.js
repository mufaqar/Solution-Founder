import Banner from './components/banner';
import Footer from './components/footer';
import Header from './components/header';
import TabsSection from './components/tabs';
import IntrustedDepartment from './components/intrusted-department';
import { gql } from '@apollo/client';
import { client } from '../lib/apollo';
import Link from 'next/link';
import Image from 'next/image';

export default function IndustriesSolution({ posts }) {
  return (
    <>
      <Header />

      <Banner
        heading="INDUSTRIES SOLUTION"
        sub_heading="Solution Founder offers proven solutions for all your industry needs and goals so your business can run better, faster, and more profitably, now and in the future."
        icon="industries-banner.png"
      />

      <TabsSection />

      <IntrustedDepartment />

      <section className="py-28 px-7">
        <h2 className="md:text-4xl text-3xl leading-8 uppercase font-bold text-[#302E2E] text-center mb-8">
          OUR SUCCESS STORIES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-[1200px] mx-auto mb-8">
          {posts.map((item, index) => (
            <div key={index} className="flex flex-col">
              <Link href={item.node.uri}>
                <Image
                  src={item.node.featuredImage.node.mediaItemUrl}
                  alt={item.node.title}
                  width={500}
                  height={350}
                />
              </Link>
              <div className="relative p-1 shadow-sm">
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
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const GET_POSTS = gql`
    query GetAllSuccessStories {
      allSuccessStories(first: 4) {
        edges {
          node {
            title
            uri
            featuredImage {
              node {
                mediaItemUrl
              }
            }
            successStoryExtra {
              shortInfo
            }
          }
        }
      }
    }
  `;
  const response = await client.query({
    query: GET_POSTS,
  });
  const posts = response.data.allSuccessStories.edges;
  return {
    props: {
      posts,
    },
  };
}
