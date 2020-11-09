import React from "react";
import Styled from "./Sad";
import Layout from "../../components/shared/Layout/Layout";
import LogoBanner from "../../components/shared/LogoBanner/LogoBanner";

function SadToSeeYouGo() {
  return (
    <Layout>
      <LogoBanner title="Manage Your Account" />
      <Styled>
        <img src="https://i.imgur.com/q4DDzXT.png" alt="Sad Emoji" />
        <p className="sad">We’re sad to see you go!</p>
        <p className="although">Although you can’t engage with our commmunity <br /> anymore, you still have access to our ROOT <br /> <span>tools and resources!</span></p>
      </Styled>
    </Layout>
  );
}

export default SadToSeeYouGo;
