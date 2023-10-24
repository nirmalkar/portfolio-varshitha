import React from "react";
import Layout from "../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import SocialIcons from "../components/Social";

type Props = {};

function Home({}: Props) {
  return (
    <Layout>
      <div style={{ color: "#fff" }}></div>
      <div className="varsh_bio">
        <StaticImage
          src="../assets/profile1.jpg"
          height={200}
          width={400}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt="Varshitha BR"
          // imgStyle={{ borderRadius: "50%" }}
          // style={{ borderRadius: "50%" }}
        />
        <div className="varsh_bio" style={{ color: "#fff" }}>
          <h2>Hi,&thinsp;I'm Varshitha</h2>
          <h3>
            I am a Software Developer, who is passionate about learning new
            technologies, based in Bangalore. I work on building websites.
          </h3>
          <SocialIcons />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
