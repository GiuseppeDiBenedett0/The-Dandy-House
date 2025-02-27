import slayerImage from "../assets/Slayer-run.png";
import faustEat from "../assets/Faust_Ground_Throw.png";
import johnnyPunch from "../assets/Johnny-punch.png";
import Hug from "../assets/hug.png";
import HoverSong1 from "../assets/Ups and Downs [With Lyrics] (Slayer Theme) - Guilty Gear Strive OST.mp3";
import HoverSong2 from "../assets/Alone Infection [With Lyrics] (Faust Theme) - Guilty Gear Strive OST.mp3";
import HoverSong3 from "../assets/Just Lean [With Lyrics] (Johnny Theme) - Guilty Gear Strive OST.mp3";
import HoverSong4 from "../assets/Armor-clad Faith [With Lyrics] (Potemkin Theme) - Guilty Gear Strive OST.mp3";

const TipsData = [
  {
    section: "Introduction",
    title: "Slayer daily tip",
    paragraph: `Use Pilebunker to deafet your enemies and claim the victory.`,
    image: slayerImage,
    imageAlt: "Slayer",
    song: HoverSong1,
    darkBackground: "#6a0dad",
    darkTitle: "#b10b05",
  },
  {
    section: "Beginner",
    title: "Faust daily tip",
    paragraph: `Eat light to keep yourself always active.`,
    image: faustEat,
    imageAlt: "Faust",
    song: HoverSong2,
    darkBackground: "#0e109c",
    darkTitle: "#b10b05",
  },
  {
    section: "Average",
    title: "Johnny daily tip",
    paragraph: `This fine big man never misses the target.`,
    image: johnnyPunch,
    imageAlt: "Johnny",
    song: HoverSong3,
    darkBackground: "#ad750d",
    darkTitle: "#b10b05",
  },
  {
    section: "Expert",
    title: "Potemkin daily tip",
    paragraph: `Love yourself first, then love others.`,
    image: Hug,
    imageAlt: "Potemkin",
    song: HoverSong4,
    darkBackground: "#2c520a",
    darkTitle: "#b10b05",
  },
];

export default TipsData;
