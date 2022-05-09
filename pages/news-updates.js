import Banner from './coponents/banner';
import Footer from './coponents/footer';
import Header from './coponents/header';
import StoryBox from './coponents/story-box';

export default function News_updates() {
  return (
    <>
      <Header />
      <Banner heading="SOLUTION FOUNDER NEWS CENTER" icon="news-img.png" />

      <section className="py-20 px-7">
        <h2 className="md:text-4xl text-3xl leading-8 uppercase font-bold text-[#302E2E] text-center mb-8">
          News & Update
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1200px] mx-auto mb-8">
          <StoryBox
            icon="Awarded-as-Best-Starter-Partner-in-MENA.png"
            title="Awarded as Best Starter Partner in MENA"
          />
          <StoryBox
            icon="We-are-at-Odoo-Experience.png"
            title="We are at Odoo Experience"
          />
          <StoryBox
            icon="We-are-at-Odoo-Roadshow-Riyadh.png"
            title="We are at Odoo Roadshow Riyadh"
          />
        </div>
      </section>

      <Footer />
    </>
  );
}
