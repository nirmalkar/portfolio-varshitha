import React from "react";
import Layout from "../components/layout";

function About() {
  return (
    <>
      <Layout>
        <div className="about">
          <h2 style={{ color: "#fff" }}>About</h2>
          {/* <p style={{ color: "#fff" }}>Welcome to my portfolio! </p> */}
          <br />
          <p style={{ color: "#fff" }}>
            Hey there!👋 I am <b>Varshitha</b> aka <b>Varsh</b>.{" "}
          </p>
          <p style={{ color: "#fff" }}>
            Lets start from beginning, I was born in Channaraypatna,
            Hasssan(Karnataka). I am brought up in Bengaluru.{" "}
          </p>
          <p style={{ color: "#fff" }}>
            Started my schooling 📚 in RVPS(Lalbagh),Scase(Konankunate),
            completed my +1+2 at (DJS)Deeksha Jnana Sweekar in PCMB 🎒
            <p style={{ color: "#fff" }}>
              I have pursued my Bachelor’s in Information Science from SJB
              Institute of Technologies.👩‍🎓
            </p>
            Currently, working at a startup Trika Technologies on E-commerce
            domain.👩‍💻 <br />
            <br />
            <br />
            Family...
            <p style={{ color: "#fff" }}>
              We are family of four, mother is homemaker, Father works in
              Healthcare, I have an elder sister(Vas) I am the younger one,
              super pampered.
            </p>
            <br />I love...
            <p style={{ color: "#fff" }}>
              Watching stand-up Comedy , Sunsets, Music 🎵, Photography 📸.
            </p>
          </p>
        </div>
      </Layout>
    </>
  );
}

export default About;
