export default function Contact_form(props) {
  return (
    <>
      <form
        method="post"
        name="Contact Form"
        className="grid grid-cols-1 gap-5"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            type="text"
            name="first-name"
            id="first-name"
            placeholder="First Name"
            autoComplete=""
            required
            className="text-lg font-medium py-2 px-4 border-b border-[#818a91] text-[#FFFFFF] bg-transparent focus:outline-none focus:shadow-inpShadow"
          />
          <input
            type="text"
            name="last-name"
            id="last-name"
            placeholder="Last Name"
            autoComplete=""
            className="text-lg font-medium py-2 px-4 border-b border-[#818a91] text-[#FFFFFF] bg-transparent focus:outline-none focus:shadow-inpShadow"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            autoComplete="email"
            className="text-lg font-medium py-2 px-4 border-b border-[#818a91] text-[#FFFFFF] bg-transparent focus:outline-none focus:shadow-inpShadow"
          />
          <input
            type="tel"
            name="phone"
            id="phone"
            placeholder="Phone"
            autoComplete="phone"
            className="text-lg font-medium py-2 px-4 border-b border-[#818a91] text-[#FFFFFF] bg-transparent focus:outline-none focus:shadow-inpShadow"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <input
            type="url"
            name="website"
            id="website"
            placeholder="Website"
            autoComplete=""
            className="text-lg font-medium py-2 px-4 border-b border-[#818a91] text-[#FFFFFF] bg-transparent focus:outline-none focus:shadow-inpShadow"
          />
          <input
            type="text"
            name="company"
            id="company"
            placeholder="Company"
            autoComplete=""
            className="text-lg font-medium py-2 px-4 border-b border-[#818a91] text-[#FFFFFF] bg-transparent focus:outline-none focus:shadow-inpShadow"
          />
          <input
            type="text"
            name="designation"
            id="designation"
            placeholder="Designation"
            autoComplete=""
            className="text-lg font-medium py-2 px-4 border-b border-[#818a91] text-[#FFFFFF] bg-transparent focus:outline-none focus:shadow-inpShadow"
          />
        </div>
        <div className="grid grid-cols-1 gap-5">
          <textarea
            type="text"
            name="mesignation"
            id="message"
            placeholder="Message"
            autoComplete=""
            rows={5}
            className="text-lg font-medium py-2 px-4 border-b border-[#818a91] text-[#FFFFFF] bg-transparent focus:outline-none focus:shadow-inpShadow"
          ></textarea>
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              name="acceptance-field"
              id="acceptance-field"
              className=""
            />
            <span className="text-lg text-white font-medium ml-2">
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
