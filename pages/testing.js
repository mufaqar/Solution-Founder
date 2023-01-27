import React from 'react'
import { client } from '../lib/apollo';
import { gql } from '@apollo/client';


export default function Testing({post}) {
  console.log("🚀 ~ file: testing.js:4 ~ Testing ~ post", post)
  return (
    <div>T</div>
  )
}


const GET_POST = gql`
  query GetPostByURI($id : ID!) {
    post(id: $id, idType: URI) {
      title
      id
      uri
      content
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
  console.log("🚀 ~ file: testing.js:54 ~ getStaticProps ~ params", params)
  const response = await client.query({
    query: GET_POST,
    variables: {
      id: 'awarded-as-best-starter-partner-in-mena',
    },
  });
  // const response = await getPostByUri(params.uri)
  const post = response?.data?.post;
  console.log("🚀 ~ file: testing.js:62 ~ getStaticProps ~ post", post)
  const posts = response?.data?.posts?.nodes;
  return {
    props: {
      post,
      posts,
    },
  };
}

// export async function getStaticPaths() {
//   const paths = [];
//   return {
//     paths,
//     fallback: "blocking",
//   };
// }