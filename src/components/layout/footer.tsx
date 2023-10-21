import React, { useEffect, useState } from "react";
import { ThemeContext } from "../../context/themeProvider";

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
      <div onClick={copyWebsite} className="share-icon">
        <div
          className="copy-text"
          style={{
            backgroundColor: theme.colors.oppositeSecondary,
            color: theme.colors.secondary,
          }}
        >
          {copyStatus && "copied"}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
