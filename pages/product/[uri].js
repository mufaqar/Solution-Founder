import Head from 'next/head';
import { client } from '../../lib/apollo';
import { gql } from '@apollo/client';
import Header from '../components/header';
import Banner from '../components/banner';
import Cardnew from '../components/card-new';
import IntrustedDepartment from '../components/intrusted-department';
import Footer from '../components/footer';
import Link from 'next/link';
import Image from 'next/image';


export default function SlugPage({ post, successStories }) {
  // console.log('story Banner', successStories);

  return (
    <div>
      <Head>
        <title>Products - Solution Founder</title>
        <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
      </Head>

      <Header />

      <Banner
        heading={post.productsFields.subTitle}
        sub_heading={post.productsFields.bannerContent}
        bannerURL={post.featuredImage.node.mediaItemUrl}
      />

      <section className="py-28 px-7">
        <h2 className="md:text-4xl text-3xl leading-8 uppercase font-bold text-[#302E2E] text-center mb-8">
          FEATURES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-7 max-w-[1200px] mx-auto mb-8">
          {
            post.productsFields.features.map((item, index) => (
              <div key={index}>
                <Cardnew title={item.title} icon={item.icon.mediaItemUrl} />
              </div>
            ))
          }

        </div>
      </section>

      <IntrustedDepartment />

      <section className="py-28 px-7">
        <h2 className="md:text-4xl text-3xl leading-8 uppercase font-bold text-[#302E2E] text-center mb-8">
          OUR SUCCESS STORIES
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-[1200px] mx-auto mb-8">
          {
            successStories.map((item, index) => (
              <div key={index} className='flex flex-col'>
                <Image
                  src={item.node.featuredImage.node.mediaItemUrl}
                  alt={item.node.title}
                  width={500}
                  height={350}
                />
                <div className='relative p-1 shadow-sm'>
                  <div className="p-5 space-y-1">
                    <h3 className="box-title">
                      <Link href={item.node.uri}>{item.node.title}</Link>
                    </h3>
                    <p className="text-base font-medium text-[#535353]">
                      {item.node.successStoryExtra.shortInfo}
                    </p>
                  </div>
                  <div className="absolute bottom-0 right-0 flex justify-end">
                    <figure className="max-h-[18px]">
                      <Image
                        src="/images/color-bar-light.jpg"
                        alt="images/color-bar-light.jpg"
                        className="w-[55%] h-[10px]"
                        width={155}
                        height={8}
                      />
                    </figure>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </section>



      <Footer />

    </div>
  );
}







const GET_POST = gql`
  query GetProduct($id: ID!) {
    product(id: $id, idType: URI) {
      title
      id
      uri
      content
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
    allSuccessStories(first: 4) {
        edges {
          node {
            title
            uri
            featuredImage {
              node {
                mediaItemUrl
              }
            }
            successStoryExtra {
              shortInfo
            }
          }
        }
      }

  }
`;

export async function getStaticProps({ params }) {
  //  the params argument for this function corresponds to the dynamic URL segments
  //  we included in our page-based route. So, in this case, the `params` object will have
  //  a property named `uri` that contains that route segment when a user hits the page
  const response = await client.query({
    query: GET_POST,
    variables: {
      id: params.uri,
    },
  });
  // const response = await getPostByUri(params.uri)
  const post = response?.data?.product;
  const successStories = response.data.allSuccessStories.edges;
  return {
    props: {
      post,
      successStories,
    },
  };
}

export async function getStaticPaths() {
  const paths = [];
  return {
    paths,
    fallback: 'blocking',
  };
}
