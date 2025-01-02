import PotMeditation from "../assets/PotemkinY.png";
import NagoOut from "../assets/NagoriBaseball.png";
import Leo from "../assets/GGST_Leo_Whitefang_Portrait.png";

const IntroCardData = [
  {
    title: "Potemkin",
    paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut mauris vestibulum elit imperdiet cursus. Nunc eu imperdiet nulla.`,
    button: "Cliccami",
    image: PotMeditation,
    alt: "Potemkin",
    justifyContent: "space-around",
    cardBodyItems: "center",
    flexDirection: "column",
    margin: "30px 0 30px 0",
    background:
      "linear-gradient(90deg, rgba(41,55,10,1) 18%, rgba(76,91,14,1) 100%)",
    imgWidth: "100%",
    imgHeight: "48%",
    link: "/programs/Beginner"
  },
  {
    title: "Nagoriyuki",
    paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut mauris vestibulum elit imperdiet cursus. Nunc eu imperdiet nulla.`,
    button: "Cliccami",
    image: NagoOut,
    alt: "Nagoriyuki",
    justifyContent: "space-around",
    cardBodyItems: "center",
    flexDirection: "column",
    cardTitleColor: "#141414",
    cardPColor: "#141414",
    margin: "30px 0 30px 0",
    background:
      "linear-gradient(90deg, rgba(176,175,175,1) 18%, rgba(255,255,255,1) 100%)",
    imgWidth: "80%",
    imgHeight: "50%",
    buttonBackColor: "#141414",
    buttonColor: "#dfdfdf",
    buttonHoverColor: "#353535",
    link: "/programs/Average"
  },
  {
    title: "Coach Whitefang",
    paragraph: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut mauris vestibulum elit imperdiet cursus. Nunc eu imperdiet nulla.`,
    button: "Cliccami",
    image: Leo,
    alt: "Leo",
    justifyContent: "space-around",
    cardBodyItems: "center",
    flexDirection: "column",
    margin: "30px 0 0 0",
    background:
      "linear-gradient(90deg, rgba(69,45,0,1) 18%, rgba(119,78,1,1) 100%)",
    imgWidth: "50%",
    imgHeight: "51%",
    link: "/programs/Expert"
  },
];

export default IntroCardData;