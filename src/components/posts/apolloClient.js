// src/apolloClient.js
import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-ap-south-1.hygraph.com/v2/clkzlewzr1bul01rs0kl64y6r/master",
  // uri: process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT, // Replace with your GraphCMS API URL
  cache: new InMemoryCache(),
});

export default client;
