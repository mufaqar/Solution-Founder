import Banner from './components/banner';
import Footer from './components/footer';
import Header from './components/header';
// import Team from "./components/team";
import { useEffect, useState } from 'react';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gql, useQuery } from '@apollo/client';
import { client } from '../lib/apollo';
// images
import ibm from '../public/images/ibm-dark.png';
import odoo from '../public/images/odoo (1).png';
import microsoft from '../public/images/micro-dark.png';
import all from '../public/images/all.svg';
import managementTeam from '../public/images/management-Team.svg';
import functionalTeam from '../public/images/functional-Team.svg';
import technicalTeam from '../public/images/technical-Team.svg';
import meeting from '../public/images/meeting.svg';
import { SlideUp } from '../animation';
import { motion } from 'framer-motion';
import Head from 'next/head';

const GET_POSTSS = gql`
  query GetAllTeam {
    allType {
      edges {
        node {
          team(where: { orderby: { field: DATE, order: ASC } }, first: 100) {
            edges {
              node {
                title
                featuredImage {
                  node {
                    mediaItemUrl
                  }
                }
                teamExtraInfo {
                  teamDesignation
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default function Company({ posts }) {
  const { data } = useQuery(GET_POSTSS);
  const [tab, setTab] = React.useState(1);
  const Admin = data?.allType.edges[0]?.node.team.edges;
  const allTeam = data?.allType.edges[1]?.node.team.edges;
  const BOD = data?.allType.edges[2]?.node.team.edges;
  const FunctionalTeam = data?.allType.edges[3]?.node.team.edges;
  const ManagementTeam = data?.allType.edges[4]?.node.team.edges;
  const TechnicalTeam = data?.allType.edges[5]?.node.team.edges;
  function Team({ name, designation, icon }) {
    return (
      <>
        <Head>
          <title>About us - Solution Founder</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
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
        <motion.div
          className="p-3 bg-white team shadow-teamShadow "
          variants={SlideUp}
          initial="offScreen"
          whileInView="onScreen"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="relative flex items-center justify-center">
            <Image
              src={icon}
              alt={name}
              className="object-cover object-center"
              width={500}
              height={500}
            />
            <figure className="absolute -bottom-2">
              <Image
                src="/images/img-curve-dark.png"
                alt="img-curve-dark.png"
                className="absolute bottom-0 center first"
                width={40}
                height={30}
              />
            </figure>
            <figure className="absolute -bottom-2">
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
              {name}
            </h2>
            <p className="text-[#8DC63F] text-sm font-normal">{designation}</p>
          </div>
        </motion.div>
      </>
    );
  }

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
    query GetAllTeam {
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
