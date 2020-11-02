import wife from "../../assets/images/wife.jpeg";
import overlook from "../../assets/images/overlook.jpg";
import fam from "../../assets/images/fam.jpeg";
import kobemjbron from "../../assets/images/kobemjbron.jpg";
import music from "../../assets/images/music.jpeg";
import nipsey from "../../assets/images/nip.jpeg";
import tech from "../../assets/images/tech.jpg";

import { SiSoundcloud } from "react-icons/si";
import { SiInstagram } from "react-icons/si";

export const muses = [
  {
    title: "My Fiancée",
    pic: { url: wife, title: "Elliot's fiancée Wilma" },
    description:
      "Wilma is the true definition of 'a friend became the love of my life'. We were good friends throughout undergrad and started dating in 2016. Now we're engaged and are currently planning our wedding for Spring 2021. We do everything together from exploring different places around the city to sharing food while we watch television. She's extremely smart, a pleasure to be around, and has helped me improve in so many areas in my life.",
    socialMedia: {
      icon: SiInstagram,
      tooltip: "Wilma's Instagram page",
      link: "https://www.instagram.com/lavishbombs/",
    },
    fadeInDuration: 500,
  },
  {
    title: "Family",
    pic: { url: fam, title: "Elliot's parents" },
    description:
      "Making my family proud is the biggest motivator in life. They've been my biggest supporters and have always been there for me no matter what. Every move I make, I make sure to seek their advice and counsel. They've molded me to who I am today and they are the best parents I could ever ask for. Even though they're on the other side of the country, I think of them every single day. I am so grateful for them and love them so much.",
    fadeInDuration: 600,
  },
  {
    title: "I ♥️ L.A.",
    pic: { url: overlook, title: "Overlook of Los Angeles" },
    description:
      'Besides the nice weather, the Lakers, landscape, etc., the main thing I love about L.A. is that it helped me culminate a new definition of "success". I have developed a different outlook on it since moving here and I am more determined to be successful in my career. Even though it is a bit expensive to live in L.A., it is definitely a place I can see myself my settling and raising a family.',
    fadeInDuration: 700,
  },
  {
    title: "Nipsey Hussle",
    pic: { url: nipsey, title: "Nipsey Hussle" },
    description:
      'I became a fan of Nipsey Hussle when my fiancée and I moved to L.A in Fall 2018. His music helped ease my anxiety of moving here in the fashion we did and also helped me become more comfortable to call this place "home". Nipsey helped me see L.A. in a different light from what I saw on television. He also inspired me to stay dedicated to reach my goals and to keep striving because my hard work WILL pay off in the long run. Thank you Nipsey, The Marathon Continues 🕊.',
    fadeInDuration: 800,
  },
  {
    title: "Music",
    pic: { url: music, title: "Elliot holding a keyboard" },
    description:
      "Beat making has been a pasttime of mine for over 10 years now. I particularly love chopping up samples of older music and adding a new twist to it. Check out my Soundcloud to here some of my creations.",
    socialMedia: {
      icon: SiSoundcloud,
      tooltip: "My Soundcloud page",
      link: "https://soundcloud.com/thatsehannah/tracks",
    },
    fadeInDuration: 900,
  },
  {
    title: "Basketball",
    pic: { url: kobemjbron, title: "Kobe, MJ, Bron" },
    description:
      "Basketball was my first love; I fell in love with it in 4th grade, and I've been a fan ever since. I enjoy watching it as well as playing it. I'm pretty good at it I would think but that's another conversation. Basketball taught me discipline and gave me confidence to strive to be the best at any and everything I do. Well since you asked, my top 5 favorite players of all-time are LeBron James, Michael Jordan, Allen Iverson, Shaq, and the late-great Kobe Bryant. Rest in peace Kobe & Gianna. Mamba Forever.",
    fadeInDuration: 1000,
  },
  {
    title: "Technology",
    pic: { url: tech, title: "Workstation with code on computer" },
    description:
      "One of the biggest reasons why I wanted to become a developer is because of the ever-evolving capabilities of technology. Technology is without a doubt one of the most significant entities in our modern lives. I've always been attracted to how the IoT, such as computers and mobile phones, work behind the scenes. That solely drove me to learn how to code and want to continue to be hands-on with the growing world of tech.",
    fadeInDuration: 1100,
  },
];
