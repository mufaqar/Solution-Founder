import Head from "next/head";
import { client } from "../../lib/apollo";
import { gql } from "@apollo/client";
import Header from "../components/header";
import Banner from "../components/banner";
import Footer from "../components/footer";
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import ConfermationMessage from '../components/confermationMessage';
import Loader from '../components/Loader';
import { GrClose } from 'react-icons/gr';


export default function SlugPage({ job,jobs, successStories }) {
  const [poupUp, setPopUp] = useState(false);
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loading, setLoding] = useState(false);
  const [formStatus, setFormStatus] = useState(false);

  const sendEmail = (e) => {
    setLoding(true);
    fetch('/api/sendmail', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(e)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setFormStatus(true);
  }
    })
  };






  return (
    <div>
      <Head>
        <title>Products - Solution Founder</title>
        {/* <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"/> */}
      </Head>

      <Header />

      <Banner
        heading={job.title}
        // sub_heading="Create a world where anyone can belong anywhere, Join the Team"
        icon="career-banner-img.png"
      />

      <section className="max-w-[1200px] _singlejob px-6 mx-auto">
        <div dangerouslySetInnerHTML={{ __html: job.content }}></div>
        <p
          className="text-xl mt-4 font-bold underline text-[#133C6D] cursor-pointer"
          onClick={() => setPopUp(true)}
        >
          Apply Now
        </p>
      </section>

      {/* Apply for job Popup */}
      <section
        className={`fixed top-0 bottom-0 left-0 right-0 z-50 bg-gray-700 bg-opacity-60 flex-col justify-center ${
          poupUp ? "block" : "hidden"    
        }`
      }
      >
        {formStatus ? (
          <ConfermationMessage />
        ) : loading ? (
          <Loader />
        ) : (
          <div className="fixed p-10 transform bg-white translate-x-1/2 -translate-y-1/2 top-1/2 right-1/2 w-[700px]">
            <h2 className="text-4xl text-[#302E2E] font-bold">APPLY FOR Job</h2>
            <h3 className="mt-2">SUBMIT YOUR APPLICATION</h3>

            <form
              className="mt-5"
              ref={form}
              onSubmit={handleSubmit(sendEmail)}
            >
              <div className="flex flex-wrap -m-2">
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <input
                      type="text"
                      name="firstName"
                      {...register("firstName", { required: true })}
                      placeholder="First Name"
                      className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-red-800 focus:bg-white focus:ring-2 focus:ring-red-500"
                    />
                    {errors.FirstName && (
                      <span className="block mt-1 text-red-400">
                        First Name field is required<sup>*</sup>
                      </span>
                    )}
                  </div>
                </div>
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <input
                      type="text"
                      name="LastName"
                      {...register("LastName", { required: true })}
                      placeholder="Last Name"
                      className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                    />
                    {errors.FirstName && (
                      <span className="block mt-1 text-red-400">
                        field is required<sup>*</sup>
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap mt-2 -m-2">
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      {...register("email", { required: true })}
                      placeholder="Email"
                      className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                    />
                    {errors.FirstName && (
                      <span className="block mt-1 text-red-400">
                        field is required<sup>*</sup>
                      </span>
                    )}
                  </div>
                </div>
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <input
                      type="number"
                      name="Phone"
                      {...register("Phone", { required: true })}
                      placeholder="Phone"
                      className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                    />
                    {errors.FirstName && (
                      <span className="block mt-1 text-red-400">
                        field is required<sup>*</sup>
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap mt-2 -m-2">
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <input
                      type="text"
                      name="linkedinURL"
                      {...register("linkedinURL")}
                      placeholder="Linkedin URL"
                      className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                    />
                  </div>
                </div>
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <input
                      type="text"
                      name="skypeID"
                      {...register("skypeID")}
                      placeholder="Skype ID"
                      className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap mt-2 -m-2">
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <select
                      className="block w-full px-3 py-2 m-0 text-base font-normal text-gray-700 transition ease-in-out bg-white bg-no-repeat border border-gray-300 border-solid rounded appearance-none form-select bg-clip-padding focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      aria-label="Default select example"
                      name="selectJob"
                      {...register("selectJob", { required: true })}
                    >
                      {jobs.map((job) => (
                        <option key={job.node.id}>{job.node.title}</option>
                      ))}
                    </select>
                    {errors.FirstName && (
                      <span className="block mt-1 text-red-400">
                        field is required<sup>*</sup>
                      </span>
                    )}
                  </div>
                </div>
                <div className="w-1/2 p-2">
                  <div className="relative">
                    <input
                      type="file"
                      name="cv"
                      {...register("cv")}
                      placeholder="Skype ID"
                      className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                    />
                  </div>
                </div>
              </div>

              <input
                type="submit"
                value="Submit Form"
                className="bg-[#8DC63E] text-white font-bold hover:bg-gray-800 mt-5 px-4 py-2"
              />
            </form>

            <GrClose
              size={18}
              className="absolute cursor-pointer right-2 top-2"
              onClick={() => setPopUp(false)}
            />
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
}

const GET_POST = gql`
  query GetProduct($id: ID!) {
    job(id: $id, idType: URI) {
      title
      id
      content
      uri
    }

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

export async function getStaticProps({ params }) {
  console.log("params", params);
  //  the params argument for this function corresponds to the dynamic URL segments
  //  we included in our page-based route. So, in this case, the `params` object will have
  //  a property named `uri` that contains that route segment when a user hits the page
  const response = await client.query({
    query: GET_POST,
    variables: {
      id: params.uri,
    },
  });
  // const response = await getPostByUri(params.uri)
  const job = response?.data?.job;
  const successStories = response.data.allSuccessStories.edges;
  const jobs = response?.data?.jobs?.edges;
  return {
    props: {
      job,
      jobs,
      successStories,
    },
  };
}

export async function getStaticPaths() {
  const paths = [];
  return {
    paths,
    fallback: "blocking",
  };
}
