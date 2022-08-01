import Footer from './components/footer';
import Header from './components/header';
import Banner from './components/banner';

export default function pagenotfound() {
  return (
    <>
      <Header />

      <Banner heading="404 Page not found" sub_heading=" " icon="term.png" />

      <section className="py-20 px-7">
        <h2 className="md:text-4xl text-3xl leading-8 uppercase font-bold text-[#302E2E] text-center mb-8">
          404 Page not Found !
        </h2>
      </section>

      <Footer />
    </>
  );
}
