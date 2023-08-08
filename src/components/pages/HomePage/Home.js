import React from "react";
import ApolloClient from "../../posts/apolloClient";
import { ApolloProvider } from "@apollo/client";
import HeroSection from "../../HeroSection";
import Posts from "../../posts/Posts";
import Pricing from "../../Pricing";
import Footer from "../Footer/Footer";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import Test from "../../posts/Test";

function Home() {
  return (
    <>
      <ApolloProvider client={ApolloClient}>
        <div className="App">
          <Test />
        </div>
      </ApolloProvider>
      {/* <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} /> */}
      {/* <Pricing /> */}
      {/* <HeroSection {...homeObjFour} /> */}
      <Footer />
    </>
  );
}

export default Home;
