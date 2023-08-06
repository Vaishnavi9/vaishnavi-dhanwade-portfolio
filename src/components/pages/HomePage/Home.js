import React from "react";
import HeroSection from "../../HeroSection";
import Posts from "../../posts/Posts";
import Pricing from "../../Pricing";
import Footer from "../Footer/Footer";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Data";

function Home() {
  return (
    <>
      <Posts />
      {/* <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjTwo} /> */}
      {/* <Pricing /> */}
      {/* <HeroSection {...homeObjFour} /> */}
      {/* <Footer /> */}
    </>
  );
}

export default Home;
