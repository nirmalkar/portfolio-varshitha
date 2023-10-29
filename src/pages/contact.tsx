import React from "react";
import ContactFrom from "./ContactFrom";
import Layout from "../components/layout";

// import NavigationBar from "../components/Navigation"
// import Seo from "./SiteSeo"
// import Theme from "../components/Theme"

function Contact() {
  return (
    <>
      {/* <Seo title="Contact" /> */}
      {/* <NavigationBar /> */}
      <Layout>
        <p style={{ color: "#fff" }}>Contact!</p>
        <div>
          <ContactFrom />
        </div>
      </Layout>
    </>
  );
}

export default Contact;
