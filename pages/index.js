import Banner from './coponents/banner';
import Footer from './coponents/footer';
import Header from './coponents/header';
import Card from './coponents/card';
import ImageBox from './coponents/image-box';
import TeamSection from './coponents/team_section';
import CTA from './coponents/cta';
import StoryBox from './coponents/story-box';

export default function Home() {
  return (
    <>
      <Header />

      <Banner
        heading="PROFESSIONAL ENTERPRISE AND BUSINESS SOLUTIONS"
        sub_heading="Increase business ability get profitable growth. Enjoy freedom of open source. 123"
        icon="home-banner-img.png"
      />

      <Card />

      <section className="bg-[#DCE6F9] relative py-28 px-7">
        <div className="custom-shape-divider-top-1652087344">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <h2 className="md:text-4xl text-3xl leading-8 uppercase font-bold text-[#302E2E] text-center mb-8">
          WHY CHOOSE SOLUTION FOUNDER
        </h2>
        <div className="flex md:flex-row flex-col md:space-x-10 md:space-y-0 space-x-0 space-y-8 max-w-[1200px] mx-auto">
          <ImageBox
            className="bg-amber-200"
            icon="Award-winner.png"
            title="Award Winner"
            description="Teamwork makes dream works. Our efforts to make all projects successful is recognized by odoo and we have won the award of best tech startup company of mena 2019."
          />
          <ImageBox
            icon="Award-winner.png"
            title="Global Reach"
            description="Teamwork makes dream works. Our efforts to make all projects successful is recognized by odoo and we have won the award of best tech startup company of mena 2019."
          />
          <ImageBox
            icon="Award-winner.png"
            title="Trusted Security"
            description="Teamwork makes dream works. Our efforts to make all projects successful is recognized by odoo and we have won the award of best tech startup company of mena 2019."
          />
        </div>
        <div className="custom-shape-divider-bottom-1651145428">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      <TeamSection />

      <CTA />

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
