import Banner from './components/banner';
import Footer from './components/footer';
import Header from './components/header';
import { GrClose } from 'react-icons/gr';
import { gql } from '@apollo/client';
import { client } from '../lib/apollo';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import ConfermationMessage from './components/confermationMessage';
import Loader from './components/Loader';
import Link from 'next/link';

export default function Career({ jobs }) {
  console.log(jobs);
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
    e.preventDefault();
    setLoding(true);
    emailjs
      .sendForm(
        'service_gvt30vq',
        'template_es5tmhh',
        e.target,
        'pzMV1U0WIjGl0M4ye'
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === 'OK') {
            setFormStatus(true);
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  let counter = 1;
  return (
    <div className="relative">
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
                  <p
                    className="text-xl mt-4 font-bold text-[#133C6D] cursor-pointer"
                    onClick={() => setPopUp(true)}
                  >
                    Apply Now
                  </p>
                  <Link
                    className="text-xl mt-4 font-bold text-[#133C6D] cursor-pointer"
                    href={job.node.uri}
                  >
                    View Detail
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Apply for job Popup */}
      <section
        className={`fixed top-0 bottom-0 left-0 right-0 z-50 bg-gray-700 bg-opacity-60 ${
          poupUp ? 'block' : 'hidden'
        }`}
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
                      {...register('firstName', { required: true })}
                      placeholder="First Name"
                      className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
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
                      {...register('LastName', { required: true })}
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
                      {...register('email', { required: true })}
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
                      {...register('Phone', { required: true })}
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
                      {...register('linkedinURL')}
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
                      {...register('skypeID')}
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
                      {...register('selectJob', { required: true })}
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
                      {...register('selectJob')}
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
