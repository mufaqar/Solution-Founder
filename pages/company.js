import Banner from './components/banner';
import Footer from './components/footer';
import Header from './components/header';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gql, useQuery } from '@apollo/client';
import { client } from '../lib/apollo';
// images
import ibm from '../public/images/ibm-dark.png';
import odoo from '../public/images/odoo (1).png';
import microsoft from '../public/images/micro-dark.png';
import { SlideUp } from '../animation';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function Company({ posts }) {
  return (
    <>
      <Header />

      <Banner
        heading="SOLUTION FOUNDER BUILD YOUR IDEAS"
        sub_heading="For Those Who Shape The World We Are The Information Technology Company"
        icon="company-banner-img.png"
      />

      <section className="py-14">
        <div className="p-3 mx-auto mb-8 lg:w-2/3">
          <h2 className="md:text-4xl text-3xl leading-8 uppercase font-bold text-[#302E2E] text-center mb-8">
            ABOUT US
          </h2>
          <p className="text-base tracking-normal font-medium text-[#535353] text-center leading-6">
            Solution Founder has an extensive experience that was acquired
            through many years of engagement in the industry. We are among the
            contributors who shape tomorrow’s technology standards on global
            stage. From our head office in Jeddah ~ Saudi Arabia, and branch
            offices in Pakistan & India, the dedicated team of experienced
            Information Technology professionals provide our services to an
            extensive portfolio of corporate, public sector as well as
            non-profit organization clients throughout the globe. We have a
            recognized ability to deliver services and solutions, tailored to
            fit the unique needs of each organization according to its size and
            area of activity.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 max-w-[1200px] mx-auto mb-8 px-7">
          <div className="relative flex flex-col items-center px-6 space-y-4 bg-white rounded-md new_card_wrapper justify-items-center py-11 shadow-sh hover:shadow-shl">
            <figure className="bg_wrapper">
              <Image
                src="/images/F.png"
                alt="F.png"
                // className="absolute top-0 left-0 rounded-md"
                width={45}
                height={40}
              />
            </figure>
            <Image
              src={ibm}
              alt={ibm}
              className="w-[32%] h-[48%] mb-4"
              width={155}
              height={60}
            />
          </div>
          <div className="relative flex flex-col items-center px-6 space-y-4 bg-white rounded-md new_card_wrapper justify-items-center py-11 shadow-sh hover:shadow-shl">
            <figure className="bg_wrapper">
              <Image
                src="/images/F.png"
                alt="F.png"
                // className="absolute top-0 left-0 rounded-md"
                width={45}
                height={40}
              />
            </figure>
            <Image
              src={odoo}
              alt={odoo}
              className="w-[32%] h-[48%] mb-4"
              width={155}
              height={60}
            />
          </div>
          <div className="relative flex flex-col items-center px-6 space-y-4 bg-white rounded-md new_card_wrapper justify-items-center py-11 shadow-sh hover:shadow-shl">
            <figure className="bg_wrapper">
              <Image
                src="/images/F.png"
                alt="F.png"
                // className="absolute top-0 left-0 rounded-md"
                width={45}
                height={40}
              />
            </figure>
            <Image
              src={microsoft}
              alt={microsoft}
              className="w-[32%] h-[48%] mb-4"
              width={155}
              height={60}
            />
          </div>
        </div>
      </section>

      <section className="relative bg-center bg-no-repeat bg-cover bg-cta-banner py-14">
        <figure className="absolute top-20">
          <Image
            src="/images/f-large.png"
            alt="f-large.png"
            className="absolute top-[120px] left-0"
            width={250}
            height={210}
          />
        </figure>
        <div className="flex md:flex-row flex-col items-center max-w-[1200px] mx-auto md:px-6 px-3 py-28">
          <div className="items-center w-full space-y-6 md:w-1/2">
            <h2 className="text-3xl font-bold leading-8 text-white md:text-4xl">
              Our Mission
            </h2>
            <p className="text-base font-medium tracking-normal text-white">
              Our mission is to provide the best technology solution that will
              <br></br>contribute in our customer’s success and growth.
            </p>
            <h2 className="text-3xl font-bold leading-8 text-white md:text-4xl">
              Our Vision
            </h2>
            <p className="text-base font-medium tracking-normal text-white">
              To be the right technology enabler for world.
            </p>
            <Link href="/contact-us" className="items-center main-button">
              <a className="bg-[#8DC63F] hover:bg-black px-5 font-bold inline-block py-4 rounded-md text-white">
                LEARN MORE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block w-4 h-4 ml-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </a>
            </Link>
          </div>
          <div className="w-full md:w-1/2"></div>
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

      <section className="py-28 px-7">
        <h2 className="md:text-4xl text-3xl leading-8 uppercase font-bold text-[#302E2E] text-center mb-8">
          OUR SUCCESS STORIES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-[1200px] mx-auto mb-8">
          {posts.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col"
              variants={SlideUp}
              initial="offScreen"
              whileInView="onScreen"
              viewport={{ once: true, amount: 0.1 }}
            >
              <Link passHref href={item.node.uri}>
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
                    <Link passHref href={item.node.uri}>
                      {item.node.title}
                    </Link>
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

export async function getServerSideProps() {
  const GET_POSTS = gql`
    query GetAllStories {
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
