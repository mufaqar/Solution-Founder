import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import { gql } from "@apollo/client";
import { client } from "../../lib/apollo";
import Link from "next/link";
import Image from "next/image";

export default function Products({ products }) {
  // console.log('product single', products)
  return (
    <>
      <Header />
      
      <Banner
        heading="SOLUTION FOUNDER CASE STUDIES"
        icon="stories-banner-img.png"
      />

      <section className="py-20 px-7">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 max-w-[1200px] mx-auto mb-8">
          {products.map((story, index) => (
            <>
              <div
                key={index}
                className="relative flex flex-col w-full bg-white rounded-md shadow-sh hover:shadow-shl"
              >
                {/* <Image
                  src={story.node.featuredImage.node.mediaItemUrl}
                  alt="img"
                  className=""
                  width={400}
                  height={300}
                /> */}
                <div className="p-5 space-y-1">
                  <h3 className="box-title">
                    <Link href={story.node.uri}>{story.node.title}</Link>
                  </h3>
                  <p className="text-base font-medium text-[#535353]">
                    short discription
                  </p>
                </div>
                <div className="absolute bottom-0 right-0 flex justify-end">
                  <Image
                    src="/images/color-bar-light.jpg"
                    alt="images/color-bar-light.jpg"
                    className="w-[55%] h-[10px]"
                    width={160}
                    height={8}
                  />
                </div>
              </div>
            </>
          ))}
        </div>
      </section>

      {/* {
          products.filter(category => category.node.categories.edges[0].node.name === 'ERP Solutions').reverse().map((nav,index)=>(
            <p>{nav.node.title}</p>
          ))
        } */}

      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const GET_POSTS = gql`
    query GetProducts {
      products(first: 40) {
    edges {
      node {
        uri
        title
        id
        featuredImage {
          node {
            mediaItemUrl
          }
        }
        productsFields {
          subTitle
          bannerContent
          features {
            title
            icon {
              mediaItemUrl
            }
          }
        }
      }
    }
  }
    }

  `;
  const response = await client.query({
    query: GET_POSTS,
  });
  const products = response.data.products.edges;
  return {
    props: {
      products,
    },
  };
}
