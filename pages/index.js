import Banner from './components/banner';
import Footer from './components/footer';
import Header from './components/header';
import Card from './components/card';
import ImageBox from './components/image-box';
import TeamSection from './components/team_section';
import CTA from './components/cta';
// importing images
import AwardWinner from '../public/images/Award-winner.png';
import { gql } from '@apollo/client';
import { client } from '../lib/apollo';



export default function Home({ posts }) {
  console.log('index', posts);
  return (
    <>
      <Header />

      <Banner
        heading="PROFESSIONAL ENTERPRISE AND BUSINESS SOLUTIONS"
        sub_heading="Increase business ability get profitable growth. Enjoy freedom of open source."
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
            icon={AwardWinner}
            title="Award Winner"
            description="Teamwork makes dream works. Our efforts to make all projects successful is recognized by odoo and we have won the award of best tech startup company of mena 2019."
          />
          <ImageBox
            icon={AwardWinner}
            title="Global Reach"
            description="Teamwork makes dream works. Our efforts to make all projects successful is recognized by odoo and we have won the award of best tech startup company of mena 2019."
          />
          <ImageBox
            icon={AwardWinner}
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

      <h2>Lates Success Stories</h2>
      {posts?.map((story, index) => (
        <div key={index}>
          <p>{story.node.title}</p>
        </div>
      ))}
      
      <Footer />
    </>
  );
}





export async function getStaticProps() {
  const GET_POSTS = gql`
    query GetAllSuccessStories {
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
  const response = await client.query({
    query: GET_POSTS,
  });
  const posts = response.data.allSuccessStories.edges;
  return {
    props: {
      posts,
    },
  };
}
