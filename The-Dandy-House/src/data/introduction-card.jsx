import Beginner from "../assets/Beginner.png";
import Avarage from "../assets/Avarage.png";
import Expert from "../assets/Expert.png";

const IntroCardData = [
  {
    title: "The Beginner Program",
    paragraph: `Just starting out and looking to improve your skills? Our Beginner Program is designed to help you build a strong foundation while progressing at your own pace. 
    With structured guidance and engaging lessons, you'll gain confidence and develop essential techniques. Start your journey today!`,
    button: "Learn More",
    image: Beginner,
    alt: "Beginner",
    justifyContent: "space-around",
    cardBodyItems: "center",
    flexDirection: "column",
    margin: "30px 0 30px 0",
    background: "linear-gradient(90deg, #1147db 18%, #080f68 100%)",
    imgWidth: "80%",
    imgHeight: "48%",
    link: "/programs/Beginner",
  },
  {
    title: "The Avarage Program",
    paragraph: `Ready to go beyond the basics? Our Average Program is designed for those who have some experience and want to refine their skills. 
    With advanced techniques, strategic insights, and personalized guidance, you'll enhance your abilities and reach new heights. Keep improving and challenge yourself!`,
    button: "Learn More",
    image: Avarage,
    alt: "Avarage",
    justifyContent: "space-around",
    cardBodyItems: "center",
    flexDirection: "column",
    cardTitleColor: "#141414",
    cardPColor: "#141414",
    margin: "30px 0 30px 0",
    background: "linear-gradient(90deg, #b85b10 18%, #ec9c33 100%)",
    imgWidth: "80%",
    imgHeight: "50%",
    buttonBackColor: "#141414",
    buttonColor: "#dfdfdf",
    buttonHoverColor: "#353535",
    link: "/programs/Average",
  },
  {
    title: "The Expert Program",
  paragraph: `Ready to push your limits? Our Expert Program is tailored for those who have mastered the fundamentals and seek advanced challenges. 
  With high-level strategies, in-depth analysis, and intense training, you'll refine your skills and elevate your performance. 
  Whether you aim to compete at the top or simply reach your full potential, this program will take you there.`,
  button: "Learn More",
  image: Expert,
  alt: "Expert",
  justifyContent: "space-around",
  cardBodyItems: "center",
  flexDirection: "column",
  margin: "30px 0 0 0",
  background:
    "linear-gradient(90deg, rgba(41,55,10,1) 18%, rgba(76,91,14,1) 100%)",
  imgWidth: "80%",
  imgHeight: "51%",
  link: "/programs/Expert",

  },
];

export default IntroCardData;
