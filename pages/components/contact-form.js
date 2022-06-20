import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact_form(props) {

  const [fieldData, setFieldData] = useState({
    FirstName :  "",
    LastName : '',
    Email : '',
    Phone : '',
    Website : '',
    Company : '',
    Designation : '',
    Message : '',
  });
  const [term, setTerm] = useState(false);
  const [Message, setmessage] = useState('');

  const CheckedHandle = event => {
    if (event.target.checked) {
      console.log('✅ Checkbox is checked');
      setmessage('');
    } else {
      console.log('⛔️ Checkbox is NOT checked');
      setmessage('Please Checked Terms')
    }
    setTerm(current => !current);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFieldData({ ...fieldData, [name]: value });
  }


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_gvt30vq',
        'template_c7nv8ra',
        e.target,
        'pzMV1U0WIjGl0M4ye'
      )
      .then(
        (result) => {
          console.log(result.text);
          alert('Message Successfully Transfer');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  

  return (
    <>
      <form
        method="post"
        name="Contact Form"
        className="grid grid-cols-1 gap-5"
        onSubmit={sendEmail}
      >
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <input
            type="text"
            name="FirstName"
            id="first-name"
            placeholder="First Name"
            autoComplete=""
            value={fieldData.FirstName}
            onChange = {handleChange}
            className="text-lg font-medium py-2 px-4 border-b border-[#818a91] text-[#FFFFFF] bg-transparent focus:outline-none focus:shadow-inpShadow"
          />
          <input
            type="text"
            name="last-name"
            id="last-name"
            placeholder="Last Name"
            value={fieldData.LastName}
            onChange = {handleChange}
            className="text-lg font-medium py-2 px-4 border-b border-[#818a91] text-[#FFFFFF] bg-transparent focus:outline-none focus:shadow-inpShadow"
          />
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            value={fieldData.Email}
            onChange = {handleChange}
            className="text-lg font-medium py-2 px-4 border-b border-[#818a91] text-[#FFFFFF] bg-transparent focus:outline-none focus:shadow-inpShadow"
          />
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone"
            autoComplete="phone"
            value={fieldData.Phone}
            onChange = {handleChange}
            className="text-lg font-medium py-2 px-4 border-b border-[#818a91] text-[#FFFFFF] bg-transparent focus:outline-none focus:shadow-inpShadow"
          />
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          <input
            type="url"
            name="website"
            id="website"
            placeholder="Website"
            autoComplete=""
            value={fieldData.Website}
            onChange = {handleChange}
            className="text-lg font-medium py-2 px-4 border-b border-[#818a91] text-[#FFFFFF] bg-transparent focus:outline-none focus:shadow-inpShadow"
          />
          <input
            type="text"
            name="company"
            id="company"
            placeholder="Company"
            autoComplete=""
            value={fieldData.Company}
            onChange = {handleChange}
            className="text-lg font-medium py-2 px-4 border-b border-[#818a91] text-[#FFFFFF] bg-transparent focus:outline-none focus:shadow-inpShadow"
          />
          <input
            type="text"
            name="designation"
            id="designation"
            placeholder="Designation"
            autoComplete=""
            value={fieldData.Designation}
            onChange = {handleChange}
            className="text-lg font-medium py-2 px-4 border-b border-[#818a91] text-[#FFFFFF] bg-transparent focus:outline-none focus:shadow-inpShadow"
          />
        </div>
        <div className="grid grid-cols-1 gap-5">
          <textarea
            type="text"
            name="message"
            id="message"
            placeholder="Message"
            autoComplete=""
            rows={5}
            value={fieldData.Message}
            onChange = {handleChange}
            className="text-lg font-medium py-2 px-4 border-b border-[#818a91] text-[#FFFFFF] bg-transparent focus:outline-none focus:shadow-inpShadow"
          ></textarea>
          <p className='text-red-500'>{Message}</p>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="acceptance-field"
              id="acceptance-field"
              className=""
              value={term}
              onChange={CheckedHandle}
            />
            <span className="ml-2 text-lg font-medium text-white">
              I’m not a robot
            </span>
          </label>
        </div>
        <div className="grid items-center justify-center ">
          <button
            type="submit"
            className="main-button hover:bg-[#302E2E] items-center"
          >
            Get Started
          </button>
        </div>
      </form>
    </>
  );
}
