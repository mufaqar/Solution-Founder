import Head from 'next/head';
import { client } from '../../lib/apollo';
import { gql } from '@apollo/client';
import Header from '../components/header';
import Banner from '../components/banner';
import Cardnew from '../components/card-new';
import Footer from '../components/footer';


export default function SlugPage({ post }) {
  return (
    <div>
      <Head>
        {/* <title>{post.title}</title> */}
        <link rel="icon" href="favicon.ico"></link>
      </Head>
      <Header />

      <Banner
        heading={post.title}
        sub_heading={post.successStoryExtra.bannerSubHeading}
        bannerURL={post.successStoryExtra.bannerImage.mediaItemUrl}
      />

      <div className="grid justify-center grid-cols-2 gap-2 px-4 mx-auto md:mt-16 md:gap-8 md:w-1/2">
        <Cardnew post={post.successStoryExtra.appFeatures} />
      </div>

      <div
        className="mx-auto mt-10 md:w-1/2 inner-text px-4"
        dangerouslySetInnerHTML={{
          __html: post.successStoryExtra.detailContent,
        }}
      ></div>

      <h2 className="my-8 font-sans p-4 text-4xl font-bold text-center md:mt-16">
        Solution Founder Custom Apps for <br /> {post.title}
      </h2>
      <div className="grid justify-center grid-cols-2 gap-2 px-4 mx-auto mt-8 mb-10 lg:grid-cols-4 lg:px-48 lg:container md:mt-16 md:gap-8 md:w-1/2">
        <Cardnew post={post.successStoryExtra.appIndustry} />
      </div>
      
     <Footer/> 
    </div>
    
  );
}
const GET_POST = gql`
  query getSingleStory($id: ID!) {
    successStories(id: $id, idType: URI) {
      uri
      title
      id
      successStoryExtra {
        shortInfo
        detailContent
        bannerSubHeading
        bannerImage {
          mediaItemUrl
        }
        appFeatures {
          icon {
            mediaItemUrl
          }
          title
        }
        appIndustry {
          title
          icon {
            mediaItemUrl
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
  const post = response?.data?.successStories;
  return {
    props: {
      post,
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
