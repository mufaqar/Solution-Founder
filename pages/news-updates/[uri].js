import { client } from '../../lib/apollo';
import { gql } from '@apollo/client';
import Header from '../components/header';
import Banner from '../components/banner';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '../components/footer';
import SeoMeta from '../components/seo';

export default function SlugPage({ post, posts }) {
  const { seo } = post;

  return (
    <>
      <SeoMeta
        title={post.title}
        description={post.postExtra.subHeading}
        url={`/news-updates/${post.slug}`}
      />

      <Header />
      <Banner
        heading={post.postExtra.subHeading}
        bannerURL={post.postExtra.bannerImage.mediaItemUrl}
      />
      <main
        className="container mb-20 news float-right bg-no-repeat bg-right bg-contain lg:h-[600px]"
        style={{ backgroundImage: `url(${post.postExtra.image.mediaItemUrl})` }}
      >
        <div className="p-5 lg:ml-20 lg:mt-28 lg:w-1/2">
          <h2 className="mb-4 text-4xl font-bold">{post.title}</h2>
          <p className="text-xl ">{post.postExtra.shortContent}</p>
        </div>
        <div></div>
      </main>

      <section className="py-20 px-7">
        <h2 className="md:text-4xl text-3xl leading-8 uppercase font-bold text-[#302E2E] text-center mb-8">
          News And Update
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1200px] mx-auto mb-8">
          {posts?.map((data, index) => (
            <div key={index}>
              <div className="relative flex flex-col w-full bg-white rounded-md shadow-sh hover:shadow-shl">
                <Image
                  src={data.featuredImage.node.mediaItemUrl}
                  alt={data.title}
                  className=""
                  width={500}
                  height={350}
                />
                <div className="p-5 space-y-1">
                  <h3 className="box-title">
                    <Link href={`/news-updates/${data.uri}/`}>
                      {data.title}
                    </Link>
                  </h3>
                </div>
                <div className="absolute bottom-0 right-0 flex justify-end">
                  <figure className="max-h-[18px]">
                    <Image
                      src="/images/color-bar-light.jpg"
                      alt="images/color-bar-light.jpg"
                      className="w-[55%] h-[10px]"
                      width={155}
                      height={10}
                    />
                  </figure>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

const GET_POST = gql`
  query GetPostByURI($id: ID!) {
    post(id: $id, idType: URI) {
      title
      id
      uri
      slug
      content
      seo {
        fullHead
        title
        metaDesc
      }
      featuredImage {
        node {
          mediaItemUrl
        }
      }
      postExtra {
        subHeading
        shortContent
        image {
          mediaItemUrl
        }
        bannerImage {
          mediaItemUrl
        }
      }
    }
    posts {
      nodes {
        title
        slug
        uri
        featuredImage {
          node {
            mediaItemUrl
          }
        }
      }
    }
  }
`;

export async function getStaticProps({ params }) {
  const response = await client.query({
    query: GET_POST,
    variables: {
      id: params.uri,
    },
  });
  // const response = await getPostByUri(params.uri)
  const post = response?.data?.post;
  const posts = response?.data?.posts?.nodes;
  return {
    props: {
      post,
      posts,
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
