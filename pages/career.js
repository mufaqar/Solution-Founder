import Banner from './components/banner';
import Footer from './components/footer';
import Header from './components/header';
import { gql } from '@apollo/client';
import { client } from '../lib/apollo';
import Link from 'next/link';
import Head from 'next/head';

export default function Career({ jobs }) {
  let counter = 1;
  return (
    <div className="relative">
      <Head>
        <title>Career - Solution Founder</title>
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
        heading="WHAT'S YOUR NEXT DESTINATION?"
        sub_heading="Create a world where anyone can belong anywhere, Join the Team"
        icon="career-banner-img.png"
      />

      <section className="px-3 py-24">
        <div className="grid grid-cols-1 md:grid-cols-1 gap-4 max-w-[1200px] mx-auto ">
          <h2 className="md:text-4xl text-3xl leading-8 uppercase font-bold text-[#302E2E] text-center">
            INTERESTED? WE’RE HIRING.
          </h2>
          <p className="text-base font-medium text-center text-[#535353]">
            We’re always searching for amazing people to join our team. Take a
            look at our current openings.
          </p>
          {jobs.map((job) => (
            <div className="grid gap-4 accordion" key={job.node.id}>
              <div className="accordion__item">
                <input type="checkbox" id={`title${counter}`} />
                <label htmlFor={`title${counter}`} className="hover:text-white">
                  {job.node.title}
                </label>
                <div data={counter++} id="job_content" className="content">
                  <div
                    dangerouslySetInnerHTML={{ __html: job.node.content }}
                  ></div>

                  <Link href={job.node.uri} passHref>
                    <p className="text-xl mt-4 font-bold text-[#133C6D] cursor-pointer">
                      View Detail
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const GET_POSTS = gql`
    query GetAllJobs {
      jobs {
        edges {
          node {
            uri
            id
            title
            content
          }
        }
      }
    }
  `;
  const response = await client.query({
    query: GET_POSTS,
  });
  const jobs = response?.data?.jobs?.edges;
  return {
    props: {
      jobs,
    },
  };
}
