import React, { useState } from "react";
import { ThemeContext } from "../../context/themeProvider";
import SocialIcons from "../../pages/Social";

const Footer: React.FC = () => {
  const { theme } = React.useContext(ThemeContext);
  const [copyStatus, setCopyStatus] = useState(false);
  const copyWebsite = () => {
    const href = typeof window !== "undefined" ? window.location.href : "";
    navigator.clipboard.writeText(href);
    setCopyStatus(true);
    setTimeout(() => {
      setCopyStatus(false);
    }, 1000);
  };

  return (
    <footer className="footer">
      <p style={{ color: theme.colors.oppositePrimary }}>
        All materials © Varshitha {new Date().getFullYear()}
      </p>
      <div className="share-icon">
      <SocialIcons />
    </div>
    </footer>
  );
};

export default Footer;
