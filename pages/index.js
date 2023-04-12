import Banner from './components/banner';
import Footer from './components/footer';
import Header from './components/header';
import Card from './components/card';
import ImageBox from './components/image-box';
import TeamSection from './components/team_section';
import CTA from './components/cta';
// importing images
import AwardWinner from '../public/images/Award-winner.png';
import { gql } from '@apollo/client';
import { client } from '../lib/apollo';
import Link from 'next/link';
import Image from 'next/image';
import GlobalReach from '../public/images/Global-Reach.svg';
import TrustedSecurity from '../public/images/Trusted-Security.svg';
import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-hook-inview'; // use current active screen Area
import Head from 'next/head';

export default function Home({ posts }) {
  const [ref, inView] = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        scale: 1,
        transition: {
          delay: 0.6,
        },
      });
    } else {
      animation.start({
        opacity: 0,
        scale: 0.7,
      });
    }
  }, [inView, animation]);

  return (
    <>
    <Head>
    <title>Home - Solution Founder</title>
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

      <Banner
        heading="PROFESSIONAL ENTERPRISE AND BUSINESS SOLUTIONS"
        sub_heading="Increase business ability get profitable growth. Enjoy freedom of open source."
        icon="home-banner-img.png"
      />

      <Card />

      <section className="bg-[#DCE6F9] relative py-28 px-7">
        <div className="custom-shape-divider-top-1652087344">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <h2 className="md:text-4xl text-3xl leading-8 uppercase font-bold text-[#302E2E] text-center mb-8">
          WHY CHOOSE SOLUTION FOUNDER
        </h2>
        <div className="flex md:flex-row flex-col md:space-x-10 md:space-y-0 space-x-0 space-y-8 max-w-[1200px] mx-auto">
          <ImageBox
            className="bg-amber-200"
            icon={AwardWinner}
            title="Award Winner"
            description="Teamwork makes dream works. Our efforts to make all projects successful is recognized by odoo and we have won the award of best tech startup company of mena 2019."
          />
          <ImageBox
            icon={GlobalReach}
            title="Global Reach"
            description="Teamwork makes dream works. Our efforts to make all projects successful is recognized by odoo and we have won the award of best tech startup company of mena 2019."
          />
          <ImageBox
            icon={TrustedSecurity}
            title="Trusted Security"
            description="Teamwork makes dream works. Our efforts to make all projects successful is recognized by odoo and we have won the award of best tech startup company of mena 2019."
          />
        </div>
        <div className="custom-shape-divider-bottom-1651145428">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      <TeamSection />

      <CTA />

      <section className="py-28 px-7">
        <h2 className="md:text-4xl text-3xl leading-8 uppercase font-bold text-[#302E2E] text-center mb-8">
          OUR SUCCESS STORIES
        </h2>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-[1200px] mx-auto mb-8"
        >
          {posts?.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col"
              animate={animation}
            >
              <Link href={item?.node?.uri}>
                <Image
                  src={item?.node?.featuredImage?.node.mediaItemUrl}
                  alt={item?.node?.title}
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
