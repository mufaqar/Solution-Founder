import { FaUserAlt } from 'react-icons/fa';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { FaEnvelope } from 'react-icons/fa';
import { BiBuilding } from 'react-icons/bi';
import { MdLocationOn } from 'react-icons/md';
import { TiWorld } from 'react-icons/ti';
import { FaRegSun } from 'react-icons/fa';
import { FaUsers } from 'react-icons/fa';
import { FaRetweet } from 'react-icons/fa';
import { BsCheckLg } from 'react-icons/bs';
import { useState } from 'react';

export default function Form() {
  const [step1, setStep1] = useState(true);
  const [step2, setStep2] = useState(false);
  const [step3, setStep3] = useState(false);
  const [step4, setStep4] = useState(false);
  const [step5, setStep5] = useState(false);
  const [step6, setStep6] = useState(false);
  const [step7, setStep7] = useState(false);
  const [step8, setStep8] = useState(false);
  const [step9, setStep9] = useState(false);
  const [step10, setStep10] = useState(false);

  const [progress, setProgress] = useState('11%');

  const [formFiels, setFormField] = useState({
    first_name: '',
    phone: '',
    email: '',
    company_name: '',
    website: '',
    city: '',
    country: '',
    industryselect: '',
    buinsessneed: '',
    users: '',
    erpsystem: '',
    speak: '',
    team: '',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormField({ ...formFiels, [name]: value });
  };

  const handleStepOneNext = () => {
    if (formFiels.first_name === '') {
      alert('Your Name is Missing !');
    } else {
      setStep1(false);
      setStep2(true);
      setProgress('20%');
    }
  };
  const handleStepTwoPrevious = () => {
    setStep1(true);
    setStep2(false);
    setProgress('10%');
  };

  const handleStepTwoNext = () => {
    if (formFiels.phone === '') {
      alert('Your Phone is Missing');
    } else {
      setStep3(true);
      setStep2(false);
      setProgress('30%');
    }
  };

  const handleStepThreePrevious = () => {
    setStep3(false);
    setStep2(true);
    setProgress('20%');
  };

  const handleStepThreeNext = () => {
    if (formFiels.email === '') {
      alert('Your Email is Missing');
    } else {
      setStep3(false);
      setStep4(true);
      setProgress('40%');
    }
  };

  const handleStepFourPrevious = () => {
    setStep3(true);
    setStep4(false);
    setProgress('30%');
  };

  const handleStepFourNext = () => {
    if (formFiels.company_name === '' || formFiels.website === '') {
      alert('Your Data is Missing');
    } else {
      setStep4(false);
      setStep5(true);
      setProgress('50%');
    }
  };

  const handleStepFivePrevious = () => {
    setStep4(true);
    setStep5(false);
    setProgress('40%');
  };

  const handleStepFiveNext = () => {
    if (formFiels.city === '' || formFiels.country === '') {
      alert('Your City & Country is Missing');
    } else {
      setStep5(false);
      setStep6(true);
      setProgress('60%');
    }
  };

  const handleStepSixPrevious = () => {
    setStep5(true);
    setStep6(false);
    setProgress('50%');
  };

  const handleStepSixNext = () => {
    if (formFiels.industryselect === '') {
      alert('Select Industry');
    } else {
      setStep7(true);
      setStep6(false);
      setProgress('70%');
    }
  };

  const handleStepSevenPrevious = () => {
    setStep6(true);
    setStep7(false);
    setProgress('60%');
  };

  const handleStepSevenNext = () => {
    if (formFiels.buinsessneed === '') {
      alert('Select Business');
    } else {
      setStep8(true);
      setStep7(false);
      setProgress('80%');
    }
  };

  const handleStepEightPrevious = () => {
    setStep7(true);
    setStep8(false);
    setProgress('70%');
  };

  const handleStepEightNext = () => {
    if (formFiels.users === '') {
      alert('Data Missing');
    } else {
      setStep9(true);
      setStep8(false);
      setProgress('90%');
    }
  };

  const handleStepNinePrevious = () => {
    setStep8(true);
    setStep9(false);
    setProgress('80%');
  };

  const handleStepNineNext = () => {
    if (
      formFiels.erpsystem === '' ||
      formFiels.speak === '' ||
      formFiels.team === ''
    ) {
      alert('Data Missing');
    } else {
      setStep10(true);
      setStep9(false);
      setProgress('100%');
    }
  };

  return (
    <>
      <div className="w-[760px] mx-auto bg-white shadow-lg p-[2%]">
        <div className="signup_form">
          <div className="p-2">
            <ul className="flex items-center justify-center mb-8 progressbar">
              <li className="flex flex-col items-center justify-center w-[10%] text-gray-200">
                <span
                  className={`p-2 mb-2 text-white rounded-full ${
                    step1 ? 'bg-[#8DC63F]' : 'bg-gray-200'
                  }`}
                >
                  <FaUserAlt />
                </span>
                1
              </li>
              <li className="flex flex-col items-center justify-center w-[10%] text-gray-200">
                <span
                  className={`p-2 mb-2 text-white rounded-full ${
                    step2 ? 'bg-[#8DC63F]' : 'bg-gray-200'
                  }`}
                >
                  <BsFillTelephoneFill />
                </span>
                2
              </li>
              <li className="flex flex-col items-center justify-center w-[10%] text-gray-200">
                <span
                  className={`p-2 mb-2 text-white rounded-full ${
                    step3 ? 'bg-[#8DC63F]' : 'bg-gray-200'
                  }`}
                >
                  <FaEnvelope />
                </span>
                3
              </li>
              <li className="flex flex-col items-center justify-center w-[10%] text-gray-200">
                <span
                  className={`p-2 mb-2 text-white rounded-full ${
                    step4 ? 'bg-[#8DC63F]' : 'bg-gray-200'
                  }`}
                >
                  <BiBuilding />
                </span>
                4
              </li>
              <li className="flex flex-col items-center justify-center w-[10%] text-gray-200">
                <span
                  className={`p-2 mb-2 text-white rounded-full ${
                    step5 ? 'bg-[#8DC63F]' : 'bg-gray-200'
                  }`}
                >
                  <MdLocationOn />
                </span>
                5
              </li>
              <li className="flex flex-col items-center justify-center w-[10%] text-gray-200">
                <span
                  className={`p-2 mb-2 text-white rounded-full ${
                    step6 ? 'bg-[#8DC63F]' : 'bg-gray-200'
                  }`}
                >
                  <TiWorld />
                </span>
                6
              </li>
              <li className="flex flex-col items-center justify-center w-[10%] text-gray-200">
                <span
                  className={`p-2 mb-2 text-white rounded-full ${
                    step7 ? 'bg-[#8DC63F]' : 'bg-gray-200'
                  }`}
                >
                  <FaRegSun />
                </span>
                7
              </li>
              <li className="flex flex-col items-center justify-center w-[10%] text-gray-200">
                <span
                  className={`p-2 mb-2 text-white rounded-full ${
                    step8 ? 'bg-[#8DC63F]' : 'bg-gray-200'
                  }`}
                >
                  <FaUsers />
                </span>
                8
              </li>
              <li className="flex flex-col items-center justify-center w-[10%] text-gray-200">
                <span
                  className={`p-2 mb-2 text-white rounded-full ${
                    step9 ? 'bg-[#8DC63F]' : 'bg-gray-200'
                  }`}
                >
                  <FaRetweet />
                </span>
                9
              </li>
              <li className="flex flex-col items-center justify-center w-[10%] text-gray-200">
                <span
                  className={`p-2 mb-2 text-white rounded-full ${
                    step10 ? 'bg-[#8DC63F]' : 'bg-gray-200'
                  }`}
                >
                  <BsCheckLg />
                </span>
                10
              </li>
            </ul>

            {/* progress bar  */}
            <div className="w-full h-6 rounded-[4px] bg-slate-200">
              <div
                className={`flex rounded-[4px] justify-end h-6 bg-[#8DC63F] transition-all duration-500 progressBar`}
                style={{ width: progress }}
              >
                <p className="mr-2 text-white">{progress}</p>
              </div>
            </div>

            {/* step 1 */}
            <div id="fieldset1" className={step1 ? 'block' : 'hidden'}>
              <div className="grid mb-8 form-group">
                <label className="text-[#302E2E] text-2xl font-semibold py-5 uppercase">
                  Your Name:
                </label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  placeholder="Enter Your Name here"
                  value={formFiels.first_name}
                  onChange={handleChange}
                  className="py-2 px-4 border border-[#ccc] focus:outline-none focus:border-[#8DC63F] bg-[#eceff1] text-lg font-semibold text-[#302E2E]"
                ></input>
              </div>
              <div className="flex justify-end space-x-1">
                <button
                  onClick={handleStepOneNext}
                  className="bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center"
                >
                  Next
                </button>
              </div>
            </div>
            {/* step 2 */}
            <div id="fieldset2" className={step2 ? 'block' : 'hidden'}>
              <div className="grid mb-8 form-group">
                <label className="text-[#302E2E] text-2xl font-semibold py-5 uppercase">
                  HI {formFiels.first_name} whats your Phone Number
                </label>
                <input
                  type="number"
                  id="phone"
                  name="phone"
                  placeholder="Enter Your Phone "
                  value={formFiels.phone}
                  onChange={handleChange}
                  className="py-2 px-4 border border-[#ccc] focus:outline-none focus:border-[#8DC63F] bg-[#eceff1] text-lg font-semibold text-[#302E2E]"
                ></input>
              </div>
              <div className="flex justify-end space-x-1">
                <button
                  onClick={handleStepTwoPrevious}
                  className="bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center"
                >
                  Previous
                </button>
                <button
                  onClick={handleStepTwoNext}
                  className="bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center"
                >
                  Next
                </button>
              </div>
            </div>
            {/* step 3 */}
            <div id="fieldset3" className={step3 ? 'block' : 'hidden'}>
              <div className="grid mb-8 form-group">
                <label className="text-[#302E2E] text-2xl font-semibold py-5 uppercase">
                  And your Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formFiels.email}
                  onChange={handleChange}
                  placeholder="Please enter your Email address"
                  className="py-2 px-4 border border-[#ccc] focus:outline-none focus:border-[#8DC63F] bg-[#eceff1] text-lg font-semibold text-[#302E2E]"
                ></input>
              </div>
              <div className="flex justify-end space-x-1">
                <button
                  onClick={handleStepThreePrevious}
                  className="bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center"
                >
                  Previous
                </button>
                <button
                  onClick={handleStepThreeNext}
                  className="bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center"
                >
                  Next
                </button>
              </div>
            </div>
            {/* step 4 */}
            <div id="fieldset4" className={step4 ? 'block' : 'hidden'}>
              <div className="grid mb-8 form-group md:grid-cols-2">
                <div className="grid justify-between">
                  <label className="text-[#302E2E] text-2xl font-semibold py-5 uppercase">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company_name"
                    name="company_name"
                    placeholder="Company "
                    value={formFiels.company_name}
                    onChange={handleChange}
                    className="py-2 px-4 border border-[#ccc] focus:outline-none focus:border-[#8DC63F] bg-[#eceff1] text-lg font-semibold text-[#302E2E]"
                  ></input>
                </div>
                <div className="grid justify-between">
                  <label className="text-[#302E2E] text-2xl font-semibold py-5 uppercase">
                    Website
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    placeholder="https://company.com "
                    value={formFiels.website}
                    onChange={handleChange}
                    className="py-2 px-4 border border-[#ccc] focus:outline-none focus:border-[#8DC63F] bg-[#eceff1] text-lg font-semibold text-[#302E2E]"
                  ></input>
                </div>
              </div>
              <div className="flex justify-end space-x-1">
                <button
                  onClick={handleStepFourPrevious}
                  className="bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center"
                >
                  Previous
                </button>
                <button
                  onClick={handleStepFourNext}
                  className="bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center"
                >
                  Next
                </button>
              </div>
            </div>
            {/* step 5 */}
            <div id="fieldset5" className={step5 ? 'block' : 'hidden'}>
              <div className="grid mb-8 form-group md:grid-cols-2">
                <div className="grid justify-between">
                  <label className="text-[#302E2E] text-2xl font-semibold py-5 uppercase">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder="Lahore "
                    value={formFiels.city}
                    onChange={handleChange}
                    className="py-2 px-4 border border-[#ccc] focus:outline-none focus:border-[#8DC63F] bg-[#eceff1] text-lg font-semibold text-[#302E2E]"
                  ></input>
                </div>
                <div className="grid justify-between">
                  <label className="text-[#302E2E] text-2xl font-semibold py-5 uppercase">
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formFiels.country}
                    onChange={handleChange}
                    placeholder="Pakistan "
                    className="py-2 px-4 border border-[#ccc] focus:outline-none focus:border-[#8DC63F] bg-[#eceff1] text-lg font-semibold text-[#302E2E]"
                  ></input>
                </div>
              </div>
              <div className="flex justify-end space-x-1">
                <button
                  onClick={handleStepFivePrevious}
                  className="bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center"
                >
                  Previous
                </button>
                <button
                  onClick={handleStepFiveNext}
                  className="bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center"
                >
                  Next
                </button>
              </div>
            </div>
            {/* step 6 */}
            <div id="fieldset6" className={step6 ? 'block' : 'hidden'}>
              <div className="grid mb-8 form-group">
                <label className="text-[#302E2E] text-2xl font-semibold py-5 uppercase">
                  Your Industry is:
                </label>
                <ul>
                  <li>
                    <input
                      type="radio"
                      id="manufacturing"
                      name="industryselect"
                      value="Manufacturing"
                      onChange={handleChange}
                    ></input>
                    <label
                      htmlFor="manufacturing"
                      className="text-base font-medium"
                    >
                      Manufacturing
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="transportation_logistics"
                      name="industryselect"
                      value="Transportation & Logistics"
                      onChange={handleChange}
                    ></input>
                    <label
                      htmlFor="transportation_logistics"
                      className="text-base font-medium"
                    >
                      Transportation & Logistics
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      onChange={handleChange}
                      id="custom_clearance"
                      name="industryselect"
                      value="Custom Clearance"
                    ></input>
                    <label
                      htmlFor="custom_clearance"
                      className="text-base font-medium"
                    >
                      Custom Clearance
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      onChange={handleChange}
                      id="trading_distribution"
                      name="industryselect"
                      value="Trading and Distribution"
                    ></input>
                    <label
                      htmlFor="trading_distribution"
                      className="text-base font-medium"
                    >
                      Trading and Distribution
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      onChange={handleChange}
                      id="restaurants_food_services"
                      name="industryselect"
                      value="Restaurants and Food Services"
                    ></input>
                    <label
                      htmlFor="restaurants_food_services"
                      className="text-base font-medium"
                    >
                      Restaurants and Food Services
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      onChange={handleChange}
                      id="construction_contracting"
                      name="industryselect"
                      value="Construction and Contracting"
                    ></input>
                    <label
                      htmlFor="construction_contracting"
                      className="text-base font-medium"
                    >
                      Construction and Contracting
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      onChange={handleChange}
                      id="government_semi_government"
                      name="industryselect"
                      value="Government & Semi Government"
                    ></input>
                    <label
                      htmlFor="government_semi_government"
                      className="text-base font-medium"
                    >
                      Government & Semi Government
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      onChange={handleChange}
                      id="nonprofit"
                      name="industryselect"
                      value="Nonprofit"
                    ></input>
                    <label
                      htmlFor="nonprofit"
                      className="text-base font-medium"
                    >
                      Nonprofit
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      onChange={handleChange}
                      id="retail"
                      name="industryselect"
                      value="retail"
                    ></input>
                    <label htmlFor="retail" className="text-base font-medium">
                      Retail
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      onChange={handleChange}
                      id="education"
                      name="industryselect"
                      value="education"
                    ></input>
                    <label
                      htmlFor="education"
                      className="text-base font-medium"
                    >
                      Education
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      onChange={handleChange}
                      id="banking_finance_insurance"
                      name="industryselect"
                      value="Banking, Finance & Insurance"
                    ></input>
                    <label
                      htmlFor="banking_finance_insurance"
                      className="text-base font-medium"
                    >
                      Banking, Finance & Insurance
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      onChange={handleChange}
                      id="it_services"
                      name="industryselect"
                      value="IT Services"
                    ></input>
                    <label
                      htmlFor="it_services"
                      className="text-base font-medium"
                    >
                      IT Services
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      onChange={handleChange}
                      id="others"
                      name="industryselect"
                      value="Others"
                    ></input>
                    <label htmlFor="others" className="text-base font-medium">
                      Others
                    </label>
                  </li>
                </ul>
              </div>
              <div className="flex justify-end space-x-1">
                <button
                  onClick={handleStepSixPrevious}
                  className="bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center"
                >
                  Previous
                </button>
                <button
                  onClick={handleStepSixNext}
                  className="bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center"
                >
                  Next
                </button>
              </div>
            </div>
            {/* step 7 */}
            <div id="fieldset7" className={step7 ? 'block' : 'hidden'}>
              <div className="grid mb-8 form-group">
                <label className="text-[#302E2E] text-2xl font-semibold py-5 uppercase">
                  Your Buinsess Need is :
                </label>
                <ul>
                  <li>
                    <input
                      type="radio"
                      onChange={handleChange}
                      id="full_erp"
                      name="buinsessneed"
                      value="Full ERP"
                    ></input>
                    <label htmlFor="full_erp" className="text-base font-medium">
                      Full ERP
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      onChange={handleChange}
                      id="hrm_and_payroll"
                      name="buinsessneed"
                      value="HRM and Payroll"
                    ></input>
                    <label
                      htmlFor="hrm_and_payroll"
                      className="text-base font-medium"
                    >
                      HRM and Payroll
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      onChange={handleChange}
                      id="finance_and_accounting"
                      name="buinsessneed"
                      value="Finance and Accounting"
                    ></input>
                    <label
                      htmlFor="finance_and_accounting"
                      className="text-base font-medium"
                    >
                      Finance and Accounting
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      onChange={handleChange}
                      id="supply_chain_management"
                      name="buinsessneed"
                      value="Supply Chain Management"
                    ></input>
                    <label
                      htmlFor="supply_chain_management"
                      className="text-base font-medium"
                    >
                      Supply Chain Management
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      onChange={handleChange}
                      id="project_management"
                      name="buinsessneed"
                      value="Project Management"
                    ></input>
                    <label
                      htmlFor="project_management"
                      className="text-base font-medium"
                    >
                      Project Management
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      onChange={handleChange}
                      id="pos"
                      name="buinsessneed"
                      value="POS"
                    ></input>
                    <label htmlFor="pos" className="text-base font-medium">
                      POS
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      onChange={handleChange}
                      id="Other"
                      name="buinsessneed"
                      value="Other"
                    ></input>
                    <label htmlFor="Other" className="text-base font-medium">
                      Other
                    </label>
                  </li>
                </ul>
              </div>
              <div className="flex justify-end space-x-1">
                <button
                  onClick={handleStepSevenPrevious}
                  className="bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center"
                >
                  Previous
                </button>
                <button
                  onClick={handleStepSevenNext}
                  className="bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center"
                >
                  Next
                </button>
              </div>
            </div>
            {/* step 8 */}
            <div id="fieldset8" className={step8 ? 'block' : 'hidden'}>
              <div className="grid mb-8 form-group">
                <label className="text-[#302E2E] text-2xl font-semibold py-5 uppercase">
                  How many users you need
                </label>
                <input
                  type="number"
                  id="users"
                  name="users"
                  placeholder="10 "
                  value={formFiels.users}
                  onChange={handleChange}
                  className="py-2 px-4 border border-[#ccc] focus:outline-none focus:border-[#8DC63F] bg-[#eceff1] text-lg font-semibold text-[#302E2E]"
                ></input>
              </div>
              <div className="flex justify-end space-x-1">
                <button
                  onClick={handleStepEightPrevious}
                  className="bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center"
                >
                  Previous
                </button>
                <button
                  onClick={handleStepEightNext}
                  className="bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center"
                >
                  Next
                </button>
              </div>
            </div>
            {/* step 9 */}
            <div id="fieldset9" className={step9 ? 'block' : 'hidden'}>
              <div className="grid mb-8 form-group">
                <label className="text-[#302E2E] text-2xl font-semibold py-5 uppercase">
                  Have you worked on ERP system before?
                </label>
                <ul>
                  <li>
                    <input
                      type="radio"
                      id="yes_erp"
                      name="erpsystem"
                      onChange={handleChange}
                      value="Yes"
                    ></input>
                    <label htmlFor="yes_erp" className="text-base font-medium">
                      Yes
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="no_erp"
                      name="erpsystem"
                      onChange={handleChange}
                      value="No"
                    ></input>
                    <label htmlFor="no_erp" className="text-base font-medium">
                      No
                    </label>
                  </li>
                </ul>
                <label className="text-[#302E2E] text-2xl font-semibold py-5 uppercase">
                  Your Key People Can Speak English?
                </label>
                <ul>
                  <li>
                    <input
                      type="radio"
                      id="yes_english"
                      name="speak"
                      onChange={handleChange}
                      value="Yes"
                    ></input>
                    <label
                      htmlFor="yes_english"
                      className="text-base font-medium"
                    >
                      Yes
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="no_english"
                      onChange={handleChange}
                      name="speak"
                      value="No"
                    ></input>
                    <label
                      htmlFor="no_english"
                      className="text-base font-medium"
                    >
                      No
                    </label>
                  </li>
                </ul>
                <label className="text-[#302E2E] text-2xl font-semibold py-5 uppercase">
                  Do you have an IT team?
                </label>
                <ul>
                  <li>
                    <input
                      type="radio"
                      id="yes_it_team"
                      name="team"
                      onChange={handleChange}
                      value="Yes"
                    ></input>
                    <label
                      htmlFor="yes_it_team"
                      className="text-base font-medium"
                    >
                      Yes
                    </label>
                  </li>
                  <li>
                    <input
                      type="radio"
                      id="no_it_team"
                      name="team"
                      onChange={handleChange}
                      value="No"
                    ></input>
                    <label
                      htmlFor="no_it_team"
                      className="text-base font-medium"
                    >
                      No
                    </label>
                  </li>
                </ul>
              </div>
              <div className="flex justify-end space-x-1">
                <button
                  onClick={handleStepNinePrevious}
                  className="bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center"
                >
                  Previous
                </button>
                <button
                  onClick={handleStepNineNext}
                  className="bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center"
                >
                  Next
                </button>
              </div>
            </div>
            {/* step 10 */}
            <div id="fieldset10" className={step10 ? 'block' : 'hidden'}>
              <form className="form" id="addEducation" action="#">
                <div className="grid mb-8 form-group">
                  <input type="hidden" id="p_fname" name="fname"></input>
                  <input type="hidden" id="p_phone" name="phone"></input>
                  <input type="hidden" id="p_email" name="email"></input>
                  <input
                    type="hidden"
                    id="p_company_name"
                    name="company_name"
                  ></input>
                  <input type="hidden" id="p_website" name="website"></input>
                  <input type="hidden" id="p_city" name="city"></input>
                  <input type="hidden" id="p_country" name="country"></input>
                  <input
                    type="hidden"
                    id="p_industryselect"
                    name="industryselect"
                  ></input>
                  <input
                    type="hidden"
                    id="p_buinsessneed"
                    name="buinsessneed"
                  ></input>
                  <input type="hidden" id="p_users" name="users"></input>
                  <input
                    type="hidden"
                    id="p_erpsystem"
                    name="erpsystem"
                  ></input>
                  <input type="hidden" id="p_speak" name="speak"></input>
                  <input type="hidden" id="p_team" name="team"></input>
                  <h2 className="text-[#302E2E] text-3xl font-semibold py-5">
                    You Want to submit this form with this data ?
                  </h2>
                  <ul>
                    <li>
                      Your Name : <span>{formFiels.first_name}</span>
                    </li>
                    <li>
                      Your Number : <span>{formFiels.phone}</span>
                    </li>
                    <li>
                      Email : <span>{formFiels.email}</span>
                    </li>
                    <li>
                      Company Name : <span>{formFiels.company_name}</span>
                    </li>
                    <li>
                      Website : <span>{formFiels.website}</span>
                    </li>
                    <li>
                      City : <span>{formFiels.city}</span>
                    </li>
                    <li>
                      Country : <span>{formFiels.country}</span>
                    </li>
                    <li>
                      Your Industry is: <span>{formFiels.industryselect}</span>
                    </li>
                    <li>
                      Your Buinsess Need is :{' '}
                      <span>{formFiels.buinsessneed}</span>
                    </li>
                    <li>
                      How many users you need : <span>{formFiels.users}</span>
                    </li>
                    <li>
                      Have you worked on ERP system before? :
                      <span>{formFiels.erpsystem}</span>
                    </li>
                    <li>
                      Your Key People Can Speak English? :{' '}
                      <span>{formFiels.speak}</span>
                    </li>
                    <li>
                      Do You Have an It Team? : <span>{formFiels.team}</span>
                    </li>
                  </ul>
                </div>
                <div className="">
                  <button
                    type="submit"
                    className="bg-[#8DC63F] hover:bg-[#302E2E] text-xs font-bold text-white py-3 w-24 items-center"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
