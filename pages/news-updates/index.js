import Banner from '../components/banner';
import Footer from '../components/footer';
import Header from '../components/header';
import { client } from '../../lib/apollo';
import { gql } from '@apollo/client';
import Link from 'next/link';
import Image from 'next/image';
import { SlideUp } from '../../animation';
import {motion} from 'framer-motion'
import Head from 'next/head';

export default function News_updates({ posts }) {
  return (
    <>
    <Head>
    <title>News & updates - Solution Founder</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta
      name="description"
      content="PROFESSIONAL ENTERPRISE AND BUSINESS SOLUTIONS"
    />
    <link rel="canonical" href="https://solutionfounder.com/" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Home - Solution Founder" />
    <meta
      property="og:description"
      content="PROFESSIONAL ENTERPRISE AND BUSINESS SOLUTIONS"
    />
    <meta property="og:url" content="https://solutionfounder.com/" />
    <meta property="og:site_name" content="Solution Founder" />
    <meta
      property="article:modified_time"
      content="2022-03-10T07:09:44+00:00"
    />
    <meta
      property="og:image"
      content="https://solutionfounder.com/wp-content/uploads/2020/07/home-banner-img.png"
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@odoo_solutions" />
    <link
      rel="icon"
      href="https://solutionfounder.com/wp-content/uploads/2020/07/SF-White-F.svg"
      sizes="32x32"
    />
  </Head>
      <Header />
      <Banner heading="SOLUTION FOUNDER NEWS CENTER" icon="news-img.png" />

      <section className="py-20 px-7">
        <h2 className="md:text-4xl text-3xl leading-8 uppercase font-bold text-[#302E2E] text-center mb-8">
          News And Update
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1200px] mx-auto mb-8">
          {posts?.map((data, index) => (
            <motion.div key={index} variants={SlideUp} initial="offScreen" whileInView="onScreen" viewport={{ once: true, amount: 0.1 }}>
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
            </motion.div>
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
