import Banner from './coponents/banner';
import Contact_form from './coponents/contact-form';
import Footer from './coponents/footer';
import Header from './coponents/header';
import Locations from './coponents/locations';
import StoryBox from './coponents/story-box';

export default function Contact_us() {
  return (
    <>
      <Header />

      <Banner
        heading="FIND AN SOLUTION FOUNDER OFFICE"
        sub_heading="The form below is the fastest way to get in touch with us. The more information we know, the better we’ll be prepared and able to help."
        icon="contact-banner-img.png"
      />

      <section className="pt-20 pb-9 px-2">
        <h2 className="md:text-4xl text-3xl leading-8 uppercase font-bold text-[#302E2E] text-center mb-8">
          OUR LOCATIONS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-[1200px] mx-auto mb-8">
          <Locations
            country="INDIA"
            states="Ahmedabad, Gujarat"
            phone="+91 84601 10120 "
          />
          <Locations
            country="Pakistan"
            states="Lahore, Karachi, Peshawar "
            phone="+92 312 40 43 429"
          />
          <Locations
            country="Saudi Arabia"
            states="Jeddah, Riyadh, Dammam"
            phone="+966 55 361 1503 "
            phone1="+966 570 786312"
          />
        </div>
      </section>

      <section className="px-2">
        <div className="md:py-12 md:px-10 p-5 max-w-[1200px] mx-auto mb-8 bg-[#133C6D]">
          <h2 className="md:text-2xl text-xl leading-8 uppercase font-bold text-white text-center mb-2">
            CONTACT US
          </h2>
          <p className="md:text-lg text-base uppercase font-light text-white text-center mb-5">
            We Value Your Time
          </p>
          <Contact_form />
        </div>
      </section>

      <section className="py-28 px-7">
        <h2 className="md:text-4xl text-3xl leading-8 uppercase font-bold text-[#302E2E] text-center mb-8">
          OUR SUCCESS STORIES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-[1200px] mx-auto mb-8">
          <StoryBox
            icon="Nawara-Transportation-dp.png"
            title="Nawara Transportation"
            description="Nawara is one of leading logistics company in Saudi Arabia with head..."
          />
          <StoryBox
            icon="HamatReady.png"
            title="Hamat Readymix"
            description="Hamat Readymix is Manufacturing company who manufacture different type of Readymix based on customer demand"
          />
          <StoryBox
            icon="Quality-Education-Holdings-dp.png"
            title="Quality Education Holdings"
            description="QEC was founded in the year 2001..."
          />
          <StoryBox
            icon="Unifood-dp.png"
            title="Unifood"
            description="Unifood (National Foodstuff Manufacturing Company Limited)..."
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
