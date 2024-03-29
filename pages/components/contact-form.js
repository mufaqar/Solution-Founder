import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { useForm } from 'react-hook-form';
import Loader from '../components/Loader'
import { FaLaptopHouse } from 'react-icons/fa';
import ConfermationMessage from './confermationMessage';

export default function Contact_form(props) {
  const [loading, setLoding] = useState(false);
  const [formStatus, setFormStatus] = useState(false);
  console.log(formStatus)

  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (e) => {
    setLoding(true)
    emailjs
      .sendForm(
        'service_5zya9zm',
        'template_bmeqmt8',
        form.current,
        'S5LLZeQloy7_1AQCX'
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.text === 'OK') {
            setFormStatus(true)
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
    
      {
        formStatus ? <ConfermationMessage/> :
          loading ? <Loader />
            : <form
              method="post"
              name="Contact Form"
              className="grid grid-cols-1 gap-5"
              ref={form}
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="FirstName"
                    id="first-name"
                    placeholder="First Name"
                    autoComplete=""
                    {...register('FirstName', { required: true })}
                    className="text-lg font-medium py-2 px-4 border-b border-[#818a91] text-[#FFFFFF] bg-transparent focus:outline-none focus:shadow-inpShadow"
                  />
                  {errors.FirstName && (
                    <span className="block mt-1 text-red-400">
                      Name field is required<sup>*</sup>
                    </span>
                  )}
                </div>

                <div className="flex flex-col">
                  <input
                    type="text"
                    name="LastName"
                    id="last-name"
                    placeholder="Last Name"
                    {...register('LastName', { required: true })}
                    className="text-lg font-medium py-2 px-4 border-b border-[#818a91] text-[#FFFFFF] bg-transparent focus:outline-none focus:shadow-inpShadow"
                  />
                  {errors.LastName && (
                    <span className="block mt-1 text-red-400">
                      Name field is required<sup>*</sup>
                    </span>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="flex flex-col">
                  <input
                    type="email"
                    name="Email"
                    id="email"
                    placeholder="Email"
                    {...register('Email', { required: true })}
                    className="text-lg font-medium py-2 px-4 border-b border-[#818a91] text-[#FFFFFF] bg-transparent focus:outline-none focus:shadow-inpShadow"
                  />
                  {errors.LastName && (
                    <span className="block mt-1 text-red-400">
                      Name field is required<sup>*</sup>
                    </span>
                  )}
                </div>

                <div className="flex flex-col">
                  <input
                    type="tel"
                    name="Phone"
                    id="phone"
                    placeholder="Phone"
                    autoComplete="phone"
                    {...register('Phone', { required: true })}
                    className="text-lg font-medium py-2 px-4 border-b border-[#818a91] text-[#FFFFFF] bg-transparent focus:outline-none focus:shadow-inpShadow"
                  />
                  {errors.LastName && (
                    <span className="block mt-1 text-red-400">
                      Name field is required<sup>*</sup>
                    </span>
                  )}
                </div>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                <input
                  type="text"
                  name="Website"
                  id="website"
                  placeholder="Website"
                  autoComplete=""
                  {...register('Website')}
                  className="text-lg font-medium py-2 px-4 border-b border-[#818a91] text-[#FFFFFF] bg-transparent focus:outline-none focus:shadow-inpShadow"
                />
                <input
                  type="text"
                  name="Company"
                  id="company"
                  placeholder="Company"
                  autoComplete=""
                  {...register('Company')}
                  className="text-lg font-medium py-2 px-4 border-b border-[#818a91] text-[#FFFFFF] bg-transparent focus:outline-none focus:shadow-inpShadow"
                />
                <input
                  type="text"
                  name="Designation"
                  id="designation"
                  placeholder="Designation"
                  autoComplete=""
                  {...register('Designation')}
                  className="text-lg font-medium py-2 px-4 border-b border-[#818a91] text-[#FFFFFF] bg-transparent focus:outline-none focus:shadow-inpShadow"
                />
              </div>
              <div className="grid grid-cols-1 gap-5">
                <textarea
                  type="text"
                  name="Message"
                  id="message"
                  placeholder="Message"
                  autoComplete=""
                  rows={5}
                  {...register('Message', { required: true })}
                  className="text-lg font-medium py-2 px-4 border-b border-[#818a91] text-[#FFFFFF] bg-transparent focus:outline-none focus:shadow-inpShadow"
                ></textarea>
                {errors.Message && (
                  <span className="block mt-1 text-red-400">
                    Name field is required<sup>*</sup>
                  </span>
                )}

                {errors.Robort && (
                  <span className="block mt-1 text-red-400">
                    Varify you are not a robort<sup>*</sup>
                  </span>
                )}
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="Robort"
                    id="acceptance-field"
                    className=""
                    {...register('Robort', { required: true })}
                  />
                  <span className="ml-2 text-lg font-medium text-white">
                    I’m not a robot
                  </span>
                </label>

              </div>
              <div className="grid items-center justify-center ">
                <button type="submit" className="main-button hover:bg-[#302E2E] items-center" > Get Started </button>

              </div>
            </form>
      }
    </>
  );
}
