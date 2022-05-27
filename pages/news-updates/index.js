import Banner from '../components/banner';
import Footer from '../components/footer';
import Header from '../components/header';
import { client } from '../../lib/apollo';
import { gql } from '@apollo/client';
import Link from 'next/link';
import Image from 'next/image';

export default function News_updates({ posts }) {
  return (
    <>
      <Header />
      <Banner heading="SOLUTION FOUNDER NEWS CENTER" icon="news-img.png" />

      <section className="py-20 px-7">
        <h2 className="md:text-4xl text-3xl leading-8 uppercase font-bold text-[#302E2E] text-center mb-8">
          News And Update
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1200px] mx-auto mb-8">
          {posts?.map((data, index) => (
            <div key={index}>
              <div className="relative flex flex-col w-full bg-white rounded-md shadow-sh hover:shadow-shl">
                <Image
                  src={data.featuredImage.node.mediaItemUrl}
                  alt={data.title}
                  className=""
                  width={500}
                  height={350}
                />

                <div className="p-5 space-y-1">
                  <h3 className="box-title">
                    <Link href={`news-updates/${data.uri}`}>{data.title}</Link>
                  </h3>
                </div>
                <div className="absolute bottom-0 right-0 flex justify-end">
                  <figure className="max-h-[18px]">
                    <Image
                      src="/images/color-bar-light.jpg"
                      alt="images/color-bar-light.jpg"
                      className="w-[55%] h-[10px]"
                      width={155}
                      height={10}
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
    query AllPostsQuery {
      posts {
        nodes {
          title
          slug
          uri
          featuredImage {
            node {
              mediaItemUrl
            }
          }
        }
      }
    }
  `;
  const response = await client.query({
    query: GET_POSTS,
  });
  const posts = response?.data?.posts?.nodes;
  return {
    props: {
      posts,
    },
  };
}
