import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        &copy; {new Date().getFullYear()}&nbsp; Made with ❤️ by{" "}
        <a
          href="https://pulkitkrverma.tech"
          className="portfolioLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          Pulkit K. Verma.
        </a>
      </p>
    </FooterContainer>
  );
};

export default Footer;
const FooterContainer = styled.div`
  background-color: rgba(40, 44, 52, 0.62);
  color: white;
  height: 40px;
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(4px);
  font-size: 14px;
  .portfolioLink {
    color: #61dafb;
    text-decoration: underline;
  }
`;
