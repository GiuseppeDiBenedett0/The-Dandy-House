import SlayerMain from "../assets/Slayer_Strive.webp";
import PotMeditation from "../assets/PotemkinY.png";
import NagoOut from "../assets/NagoriBaseball.png";
import Leo from "../assets/Coach Withefang.png";
import Zato1 from "../assets/GGST_Zato-1_Summon_Eddie.png";

const CardData = [
  {
    title: "Power Up with Slayer",
    paragraph: `Unlock your true potential with Slayer’s program, designed to strengthen both body and mind. 
    A perfect blend of discipline and determination, this journey will push you toward your ultimate fitness goals. Ready to elevate your strength and endurance?`,
    image: SlayerMain,
    alt: "Slayer",
    justifyContent: "space-around",
    cardBodyItems: "unset",
    flexDirection: "row",
    background: "linear-gradient(135deg, #5a002d, #88114d)",
    margin: "8px 0",
    textAlign: "left",
    mediatextAlign: "center",
    mediaCardTextItems: "center",
    cardTextItems: "unset",
    imgWidth: "40%",
    imgHeight: "95%",
    maxWidth: "940px",
    mediaContent: "center",
    mediaItems: "center",
    mediaDirection: "column",
    imageMaxWidth: "940px",
    imageWidth: "60%",
  },

  {
    title: "Test Your Skills!",
    paragraph: `Challenge yourself with our diverse fitness programs, tailored to help you exceed your limits.
    Whether you're just starting out or already experienced, our routines will push your endurance and strength further. Are you ready for the test?`,
    button: "Learn More",
    link: "/programs/introduction",
    image: PotMeditation,
    alt: "Potemkin",
    justifyContent: "space-around",
    cardBodyItems: "center",
    flexDirection: "column",
    background:
      "linear-gradient(90deg, rgba(41,55,10,1) 18%, rgba(76,91,14,1) 100%)",
    imgWidth: "100%",
    imgHeight: "48%",
  },

  {
    title: "Coach Insights",
    paragraph: `Gain wisdom from our expert coaches, who share essential training tips and motivational advice to help you succeed. 
    Learn how to improve your performance with knowledge and guidance from those who know best for your personal grow.`,
    button: "Learn More",
    link: "/healthy-living/articles",
    image: Leo,
    alt: "Leo",
    justifyContent: "space-around",
    cardBodyItems: "center",
    flexDirection: "column",
    background:
      "linear-gradient(90deg, rgba(69,45,0,1) 18%, rgba(119,78,1,1) 100%)",
    imgWidth: "50%",
    imgHeight: "51%",
  },

  {
    title: "Fuel Your Fitness",
    paragraph: `Maximize your results with the right nutrition. 
    Discover delicious recipes that fuel your body and help optimize performance, from high-protein meals to balanced recovery foods. 
    Whether you're looking to build muscle, boost endurance, or simply maintain a healthy lifestyle, 
    our expert team provides the guidance and inspiration you need to make every meal count.`,
    button: "Learn More",
    link: "/healthy-living/recipes",
    image: NagoOut,
    alt: "Nagoriyuki",
    justifyContent: "space-around",
    cardBodyItems: "center",
    flexDirection: "column",
    cardTitleColor: "#141414",
    cardPColor: "#141414",
    background:
      "linear-gradient(90deg, rgba(176,175,175,1) 18%, rgba(255,255,255,1) 100%)",
    imgWidth: "80%",
    imgHeight: "50%",
    buttonBackColor: "#141414",
    buttonColor: "#dfdfdf",
    buttonHoverColor: "#353535",
  },

  {
    title: "Our Rules",
    paragraph: `Want to bring your four-legged friend along? Check our pet policy to ensure a safe and welcoming space for everyone. 
    Understanding and following our simple and clear guidelines helps maintain a respectful and secure environment for all. 
    Learn more about our essential community rules, carefully designed to keep your training space enjoyable, fair, and effective.`,
    button: "Learn More",
    button: "Learn More",
    link: "/details/rules",
    image: Zato1,
    alt: "Zato",
    justifyContent: "space-around",
    cardBodyItems: "center",
    flexDirection: "column",
    background:
      "linear-gradient(90deg, rgba(69,0,0,1) 18%, rgba(139,0,0,1) 100%)",
    imgWidth: "64%",
    imgHeight: "50%",
  },
];

export default CardData;
