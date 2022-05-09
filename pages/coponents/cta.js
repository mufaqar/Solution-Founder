export default function CTA() {
  return (
    <>
      <section className="bg-cta-banner relative bg-cover bg-center bg-no-repeat py-14">
        <img
          src="/images/f-large.png"
          alt="f-large.png"
          className="absolute top-[120px] left-0"
        />
        <div className="flex md:flex-row flex-col items-center max-w-[1200px] mx-auto md:px-6 px-3 py-28">
          <div className="md:w-1/2 w-full items-center space-y-6">
            <h2 className="md:text-4xl text-3xl leading-8 uppercase font-bold text-white">
              OUR PARTNERS
            </h2>
            <p className="sub-title">
              We care about your project on all levels, so we’ve made
              partnership agreements with companies that can help you to develop
              and expand your business.
            </p>
            <div className="flex flex-row items-center">
              <img
                src="/images/ibm-white.png"
                alt="ibm-white.png"
                className="w-[16%] h-[16%]"
              />
              <img
                src="/images/micro-white.png"
                alt="micro-white.png"
                className="w-[24%] h-[24%] ml-20"
              />
            </div>
          </div>
          <div className="md:w-1/2 w-full">
            <img
              src="/images/odoo.png"
              alt="odoo.png"
              className="md:float-right"
            />
          </div>
        </div>
      </section>
    </>
  );
}
