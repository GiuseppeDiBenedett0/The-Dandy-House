const AboutUsData = [
  {
    mainTitle: "Passion for fitness, commitment to you!",
    introduction: `We are here to help you achieve your fitness goals with personalized 
                    workout plans, expert nutrition tips, and a supportive community 
                    that keeps you motivated every step of the way.`,
    initial: { opacity: 0, x: -300 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.8 },
    sections: [
      {
        title: "Our Story",
        content: `Our journey began in 1960 with a simple yet powerful vision: to 
                    create a fitness platform that inspires, educates, and empowers 
                    people to achieve their health and wellness goals. Frustrated by the 
                    lack of accessible and personalized fitness guidance, we set out to 
                    build a space where everyone, regardless of experience level, can 
                    find the support and motivation they need to succeed.`,
        initial: { opacity: 0, x: 300 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.8 },
      },
      {
        title: "Our Mission",
        content: `At The Dandy Step, our mission is to make fitness accessible, 
                    enjoyable, and sustainable for everyone. We believe that achieving a 
                    healthier lifestyle shouldn’t be complicated or overwhelming.`,
        initial: { opacity: 0, x: -300 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.8 },
      },
      {
        title: "Meet Our Team",
        content: `Our team is made up of passionate fitness enthusiasts, certified 
                    trainers, and nutrition experts dedicated to helping you achieve 
                    your goals.`,
        initial: { opacity: 0, x: 300 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.8 },
      },
      {
        title: "Our Values",
        content: `At the core of The Dandy Step, we uphold key values that shape 
                    everything we do: Inclusivity, Education, Motivation, Authenticity, 
                    and Growth.`,
        initial: { opacity: 0, x: -300 },
        animate: { opacity: 1, x: 0 },
        transition: { duration: 0.8 },
      },
    ],
  },
];

export default AboutUsData;
