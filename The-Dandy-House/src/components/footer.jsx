import styled from "styled-components";
import BrandImg from "./navbar/brand";
import BatImg from "../assets/flying-bat-svgrepo-com.svg";
import XIcon from "../assets/x-social-media-logo-icon.svg";
import FacebookIcon from "../assets/facebook-square-black-icon.svg";
import InstagramIcon from "../assets/black-instagram-icon.svg";
import YoutubeIcon from "../assets/black-and-white-youtube-icon.svg";

const FooterContainer = styled.div`
  width: 100%;
  height: 30%;
  background-color: #000000;
  padding: 80px 0;

  @media (max-width: 940px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const FooterWrapper = styled.div`
  margin: 0 136px;

  @media (max-width: 940px) {
    margin: 0;
  }
`;

const FooterUpperSection = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 940px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const FooterBrand = styled.div`
  color: ${({ theme }) => theme.textColors.primary};
  width: 50%;
  height: 100%;

  @media (max-width: 940px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;
    width: 100%;
  }

  @media (max-width: 460px) {
    padding: 16px;
  }
`;

const BrandWrapper = styled.div`
  display: flex;
`;

const BrandName = styled.h2`
  text-transform: uppercase;
  font-size: 2rem;
`;

const BrandP = styled.p`
  font-size: 1rem;
`;

const FooterNav = styled.div`
  width: 50%;
  height: 100%;

  @media (max-width: 940px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const FooterUl = styled.ul`
  list-style: none;
  text-transform: uppercase;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 0;
  width: 100%;

  @media (max-width: 1155px) {
    gap: 32px;
  }

  @media (max-width: 940px) {
    gap: 0;
  }

  @media (max-width: 600px) {
    width: 90%;
    display: flex;
    flex-direction: column;
  }
`;

const FooterLi = styled.li`
  width: 100%;
  text-align: center;
  border-bottom: none;

  @media (max-width: 601px) {
    &:not(:last-child) {
      border-bottom: 1px solid #acacac;
      margin-bottom: 16px;
    }
  }
`;

const LiTitle = styled.h3`
  color: ${({ theme }) => theme.textColors.primary};
  font-size: 1.4rem;
  margin-bottom: 16px;
  white-space: nowrap
`;

const LiLink = styled.a`
  color: #acacac;
  font-size: 1.2rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  text-decoration: none;

  &:hover {
    color: #acacac;
    cursor: pointer;
    text-decoration: underline;
  }

  @media (max-width: 1155px) {
    font-size: 1.1rem;
  }
`;

const FooterEnd = styled.div`
  width: 100%;
  padding-top: 32px;
  border-top: 1px solid #bdbdbd;
  display: flex;
  justify-content: space-between;
  padding: 8px 0 0 12px;

  @media (max-width: 1290px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

const FooterCredits = styled.p`
  color: #bdbdbd;
  font-size: 0.8rem;
  line-height: 2rem;
`;

const CreditsLink = styled.a`
  color: #d1d0d0;
  text-decoration: none;
  font-size: 0.8rem;
  margin: 0 8px;

  &:hover {
    color: #acacac;
    cursor: pointer;
    text-decoration: underline;
  }
`;

const FooterSocialUl = styled.ul`
  display: flex;
  list-style: none;

  @media (max-width: 1155px) {
    padding: 0;
  }
`;

const FooterSocialLi = styled.li`
  color: #d1d0d0;
  margin: 0 8px;
  width: 100%;

  @media (max-width: 1155px) {
    margin: 0 auto 0 0;
  }
`;

const SocialIcon = styled.img`
  width: ${({ $iconWidth }) => $iconWidth || "19px"};
  height: ${({ $iconHeight }) => $iconHeight || "19px"};
  margin: 8px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;

function Footer() {
  const footerLink = [
    {
      title: "Programs",
      links: ["Introduction", "Beginner", "Average", "Expert"],
    },
    {
      title: "Healthy living",
      links: ["Articles", "Recipes"],
    },
    {
      title: "Aiuto",
      links: ["Cacca", "Cacca", "Cacca"],
    },
  ];
  return (
    <>
      <FooterContainer>
        <FooterWrapper>
          <FooterUpperSection>
            <FooterBrand>
              <BrandWrapper>
                <BrandName>The Dandy Step</BrandName>
                <BrandImg src={BatImg} alt="Bat" />
              </BrandWrapper>
              <BrandP>Enjoy the ride, with ups and downs</BrandP>
            </FooterBrand>
            <FooterNav>
              <FooterUl>
                {footerLink.map((data, index) => (
                  <FooterLi key={index}>
                    <LiTitle>{data.title}</LiTitle>
                    {data.links.map((link, linkIndex) => (
                      <LiLink key={linkIndex} href={`/programs/${link.toLowerCase()}`}>
                        {link}
                      </LiLink>
                    ))}
                  </FooterLi>
                ))}
              </FooterUl>
            </FooterNav>
          </FooterUpperSection>
          <FooterEnd>
            <FooterCredits>
              Copyright © 2024 The Dandy Step. This website is create by
              Giuseppe Di Benedetto.{" "}
              <CreditsLink href="/">Terms of Use</CreditsLink>{" "}
              <CreditsLink href="/">Privacy Policy</CreditsLink>{" "}
              <CreditsLink href="/">Cookie Preferences</CreditsLink>
            </FooterCredits>
            <FooterSocialUl>
              <FooterSocialLi>
                <a href="">
                  <SocialIcon src={XIcon} alt="X" />
                </a>
                <a href="">
                  <SocialIcon src={FacebookIcon} alt="Facebook" />
                </a>
                <a href="">
                  <SocialIcon src={InstagramIcon} alt="Instagram" />
                </a>
                <a href="">
                  <SocialIcon
                    src={YoutubeIcon}
                    alt="Youtube"
                    $iconWidth={"23px"}
                  />
                </a>
              </FooterSocialLi>
            </FooterSocialUl>
          </FooterEnd>
        </FooterWrapper>
      </FooterContainer>
    </>
  );
}

export default Footer;