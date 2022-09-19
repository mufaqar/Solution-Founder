import { gql } from "@apollo/client";
import React, { useState } from 'react';
import { client } from '../lib/apollo';


export default function testing({allType}) {
  const [data, setdata] = useState(allType)
  console.log("🚀 ~ file: testing.js ~ line 6 ~ testing ~ allType 12", data)
  return (
    <div>
      {
        // allTeam.filter(item => item.teamExtraInfo.managementTeam === 'Management Team').map((team,index) => (
        //   <>
        //     <p>{team.title}</p>
        //   </>
        // ))
      }
    </div>
  );
}
// (where: {name: "Functional Team"}) 

export async function getStaticProps() {
  const GET_POSTS = gql`
    query GetAllTeam {
     
      allType(where: {name: "Functional Team"})  {
        edges {
          node {
            team(where: { orderby: { field: DATE, order: ASC } }, first: 50) {
              edges {
                node {
                  title
                  featuredImage {
                    node {
                      mediaItemUrl
                    }
                  }
                  teamExtraInfo {
                    teamDesignation
                  }
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

  const allType = response.data.allType.edges;

  return {
    props: {
 
      allType,
    
    },
  };
}
