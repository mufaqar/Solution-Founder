import Banner from "./components/banner";
import Footer from "./components/footer";
import Header from "./components/header";
import { GrClose } from "react-icons/gr";
import { gql } from "@apollo/client";
import { client } from "../lib/apollo";
import { useState } from "react";

export default function career({ jobs }) {
  const [poupUp, setPopUp] = useState(false);
  const [formField, setFormField] = useState({
    firstName: "",
    LastName: "",
    email: "",
    Phone: "",
    linkedinURL: "",
    skypeID: "",
    selectJob: "",
    cv: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormField({ ...formField, [name]: value });
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
                    className="text-xl font-bold text-[#133C6D] cursor-pointer"
                    onClick={() => setPopUp(true)}
                  >
                    Apply Now
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Apply for job Popup */}
      <section
        className={`fixed top-0 bottom-0 left-0 right-0 z-50 bg-gray-700 bg-opacity-60 ${
          poupUp ? "block" : "hidden"
        }`}
      >
        <div className="fixed p-10 transform bg-white translate-x-1/2 -translate-y-1/2 top-1/2 right-1/2 w-[700px]">
          <h2 className="text-4xl text-[#302E2E] font-bold">APPLY FOR Job</h2>
          <h3 className="mt-2">SUBMIT YOUR APPLICATION</h3>
          <form className="mt-5">
            <div className="flex flex-wrap -m-2">
              <div className="w-1/2 p-2">
                <div className="relative">
                  <input
                    type="text"
                    name="firstName"
                    value={formField.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <input
                    type="text"
                    name="LastName"
                    value={formField.LastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap mt-2 -m-2">
              <div className="w-1/2 p-2">
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formField.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <input
                    type="number"
                    name="Phone"
                    value={formField.Phone}
                    onChange={handleChange}
                    placeholder="Phone"
                    className="w-full px-3 py-1 text-base leading-8 text-gray-700 transition-colors duration-200 ease-in-out bg-gray-100 bg-opacity-50 border border-gray-300 rounded outline-none focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap mt-2 -m-2">
              <div className="w-1/2 p-2">
                <div className="relative">
                  <input
                    type="text"
                    name="linkedinURL"
                    value={formField.linkedinURL}
                    onChange={handleChange}
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
                    value={formField.skypeID}
                    onChange={handleChange}
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
                    onChange={handleChange}
                  >
                    {jobs.map((job) => (
                      <option key={job.node.id}>{job.node.title}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="w-1/2 p-2">
                <div className="relative">
                  <input
                    type="file"
                    name="cv"
                    onChange={handleChange}
                    placeholder="Skype ID"
                    value={formField.cv}
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
      </section>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
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
