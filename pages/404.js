import Banner from '../components/banner';
import Footer from '../components/footer';
import Header from '../components/header';
import { gql } from '@apollo/client';
import { client } from '../../lib/apollo';
import Link from 'next/link';
import Image from 'next/image';

export default function Four_o_Four({}) {
  return (
    <>
      <Header />

      <Banner
        heading="SOLUTION FOUNDER 404 Page Not Found"
        icon="stories-banner-img.png"
      />

      <section className="py-20 px-7">
        <h2 className="md:text-4xl text-3xl leading-8 uppercase font-bold text-[#302E2E] text-center mb-8">
          404 Page not Found
        </h2>
      </section>

      <Footer />
    </>
  );
}
