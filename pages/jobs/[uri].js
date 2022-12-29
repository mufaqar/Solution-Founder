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

export default function SlugPage({ job, successStories }) {
  console.log('story Banner', job);

  return (
    <div>
      <Head>
        <title>Products - Solution Founder</title>
        {/* <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"/> */}
      </Head>

      <Header />

      

      

      <Footer />
    </div>
  );
}

const GET_POST = gql`
  query GetProduct($id: ID!) {
    job(id: $id, idType: URI) {
      title
      id
      content
      uri
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
  console.log('params',params)
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
  const job = response?.data?.job;
  const successStories = response.data.allSuccessStories.edges;
  return {
    props: {
      job,
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
