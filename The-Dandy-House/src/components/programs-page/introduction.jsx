import styled from "styled-components";
import { motion } from "framer-motion";
import CardsComponent from "../home-page/cards-component";
import TipsSection from "../tips-section";
import IntroCardData from "../../data/introduction-card";

const Wrapper = styled(motion.div)`
  width: 85%;
  max-width: 1700px;
  margin: 132px auto 40px auto;
`;

const CustomTitle = styled.h1`
  font-size: 2.6rem;
  font-family: ${({ theme }) => theme.fonts.oswald};
  color: #f13932;
  margin-bottom: 50px;
`;

const CustomSubTitle = styled.h2`
  font-size: 2rem;
  font-family: ${({ theme }) => theme.fonts.oswald};
  color: #f13932;
  margin: 30px 0 30px 0;
  text-align: left;
`;

const Paragraph = styled.p`
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.fonts.oswald};
  color: #e0e0e0;
  text-align: left;
  line-height: 1.7;

  .bold {
    color: #f13932;
    font-weight: 600;
  }
`;

const CustomUl = styled.ul`
  padding-left: 20px;
  margin: 20px 0;
`;

const CustomLi = styled.li`
  font-size: 1.6rem;
  font-family: ${({ theme }) => theme.fonts.oswald};
  color: #e0e0e0;
  text-align: left;
  line-height: 1.7;
  padding: 16px;

  .section-title {
    color: #f13932;
    font-weight: 700;
  }
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardGrid = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px 0 60px 0;
  width: 65%;
`;

function Introduction() {
  const pageAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <Wrapper
      initial={"hidden"}
      animate={"visible"}
      transition={{ duration: 1, ease: "easeIn" }}
      variants={pageAnimation}
    >
      <CustomTitle>
        Welcome to the Training Level Introduction Page!
      </CustomTitle>
      <Paragraph>
        We know that every fitness journey is unique, just like everyone’s goals
        and needs. That’s why we’ve created a system that lets you choose the
        training program that best suits your current fitness level.
      </Paragraph>
      <Paragraph>
        <span className="bold">
          Whether you’re just starting out or already an experienced athlete,
          you’ll find the right program for you here!
        </span>
      </Paragraph>
      <Paragraph>Here’s what we’ve designed for each level:</Paragraph>

      <CustomUl aria-label="Training levels">
        <CustomLi>
          <span className="section-title">Beginner:</span> Perfect for those
          just starting their fitness journey, with simple and guided exercises.
          These workouts will help you build a strong foundation for a healthier
          body and a more motivated mindset. Don’t worry—everything is gradual
          and tailored to support you every step of the way.
        </CustomLi>
        <CustomLi>
          <span className="section-title">Avarage:</span> Designed for
          those familiar with physical activity and looking to take their
          training to the next level. You’ll find dynamic and more challenging
          exercises to improve your strength, endurance, and flexibility.
        </CustomLi>
        <CustomLi>
          <span className="section-title">Expert:</span> Intense and demanding
          workouts tailored for those ready to push their limits. If you’re
          prepared to test yourself and achieve extraordinary results, this is
          the level for you!
        </CustomLi>
      </CustomUl>
      <CustomSubTitle>How it works:</CustomSubTitle>
      <Paragraph>
        Choose the level that best matches your current fitness state and goals.
        This choice isn’t permanent—you can always adjust your level as you
        progress or if you want to try something new. 💡 Our advice: Always
        listen to your body and pick a level that challenges you but doesn’t
        overwhelm you. Progress comes from consistent and balanced effort!
      </Paragraph>
      <CustomSubTitle>📅 Ready to get started?</CustomSubTitle>
      <Paragraph>
        Don’t wait! Select your level and begin your journey toward a stronger,
        healthier, and happier you. Every step you take—big or small—brings you
        closer to your goal. We’re here to support you every step of the way. 💪
      </Paragraph>
      <CardContainer>
        <CardGrid>
          {IntroCardData.map((data, index) => {
            return (
              <CardsComponent
                key={index}
                title={data.title}
                paragraph={data.paragraph}
                button={data.button}
                image={data.image}
                alt={data.alt}
                $justifyContent={data.justifyContent}
                $cardBodyItems={data.cardBodyItems}
                $flexDirection={data.flexDirection}
                $background={data.background}
                $margin={data.margin}
                $maxWidth={data.maxWidth}
                $mediaContent={data.mediaContent}
                $mediaItems={data.mediaItems}
                $mediaDirection={data.mediaDirection}
                $cardTextItems={data.cardTextItems}
                $textAlign={data.textAlign}
                $mediaTextAlign={data.mediatextAlign}
                $mediaCardTextItems={data.mediaCardTextItems}
                $cardTitleColor={data.cardTitleColor}
                $cardPColor={data.cardPColor}
                $buttonBackgroundColor={data.buttonBackColor}
                $buttonTextColor={data.buttonColor}
                $buttonHover={data.butonHoverColor}
                $width={data.imgWidth}
                $height={data.imgHeight}
                $imageMaxWidth={data.imageMaxWidth}
                $imageWidth={data.imageWidth}
              />
            );
          })}
        </CardGrid>
      </CardContainer>
      <TipsSection/>
    </Wrapper>
  );
}

export default Introduction;
