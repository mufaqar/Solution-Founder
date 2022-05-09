export default function TeamSection() {
  return (
    <>
      <section className="">
        <div className="flex md:flex-row flex-col items-center max-w-[1200px] mx-auto md:space-x-16 space-x-0 md:space-y-0 space-y-10 md:px-6 px-3 py-16">
          <div className="md:w-1/2 w-full items-center space-y-5">
            <h2 className="md:text-4xl text-3xl leading-8 uppercase font-bold text-[#302E2E] mb-8">
              MEET OUR EXCEPTIONALLY TALENTED TEAM
            </h2>
            <p className="text-lg font-medium text-[#302E2E]">
              Our team draws on board vast industry experience to make best
              outcomes for our clients
            </p>
            <button className="text-[#133C6D] hover:text-white border border-[#133C6D] hover:bg-[#133C6D] text-sm font-bold py-4 px-5 rounded-md items-center">
              Meet The Team
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="inline-block w-4 h-4 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="3"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </button>
          </div>
          <div className="md:w-1/2 w-full items-baseline">
            <img
              src="/images/team-section.png"
              alt="team-section.png"
              className="md:float-right"
            />
          </div>
        </div>
      </section>
    </>
  );
}
