import React from "react";
import { useQuery } from "@apollo/client";
import { gql } from "graphql-tag";
import client from "./apolloClient";

const GET_ARTICLES = gql`
  query MyQuery {
    postsConnection {
      edges {
        cursor
        node {
          author {
            bio
            name
            id
            photo {
              url
            }
          }
          createdAt
          slug
          title
          excerpt
          featuredImage {
            url
          }
          categories {
            name
            slug
          }
        }
      }
    }
  }
`;

function Test() {
  const { loading, error, data } = useQuery(GET_ARTICLES, { client });

  console.log("*******************************************************");
  console.log(data);
  console.log("*******************************************************");
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <div>Author: {data?.postsConnection?.edges[0]?.node?.author?.name}</div>
      <div>{data?.postsConnection?.edges[0]?.node?.excerpt}</div>
    </>
  );
}

export default Test;
