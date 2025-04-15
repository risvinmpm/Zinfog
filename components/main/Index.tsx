import React from "react";
import Brand from "./Brand";
import WhoWeAre from "./WhoWeAre";
import Services from "./Services";

const Index = () => {
  return (
    <>
      <div className="main-padding">
        <Brand />
        <WhoWeAre />
      </div>
      <Services />
    </>
  );
};

export default Index;
