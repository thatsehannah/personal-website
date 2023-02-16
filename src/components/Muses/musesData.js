import { SiSoundcloud } from 'react-icons/si';
import { SiInstagram } from 'react-icons/si';

export const muses = [
  {
    title: 'My Wife',
    pic: { url: '/assets/images/bride.jpeg', title: "Elliot's wife Wilma" },
    description:
      "Wilma is the true definition of 'a friend became the love of my life'. We started out as good friends throughout undergrad, which led to us tying the knot in April 2021. She's the best and most supportive wife a husband can ask for. She's extremely smart, beautiful, energetic, and has helped me improve in so many areas in my life. I love her so much.",
    fadeInDuration: 500,
  },
  {
    title: 'Family',
    pic: { url: '/assets/images/fam.jpeg', title: "Elliot's parents" },
    description:
      "Making my family proud is the biggest motivator in life. They've supported me throughout my entire journey in life. Every move I make, I make sure to seek their advice and counsel. They've molded me to who I am today and they are the best parents I could ever ask for. I am so grateful for them and love them so much.",
    fadeInDuration: 600,
  },
  {
    title: 'Sneaker Reselling',
    pic: {
      url: '/assets/images/kixnplay.jpeg',
      title: 'Kix N Play logo',
    },
    description:
      "Kix N Play is a sneaker reselling business I started in 2021 where I resell sneakers at unbeatable prices if you beat me in NBA 2K. If you're looking to buy some kicks and think you can beat me in 2K, head to Kix N Play's Instagram page now to see what's available.",
    socialMedia: {
      type: 'Instagram',
      title: 'My Business',
      icon: SiInstagram,
      tooltip: "Kix N Play's Instagram page",
      link: 'https://www.instagram.com/kixnplay/',
    },
    fadeInDuration: 700,
  },
  {
    title: 'Unapologetically Black',
    pic: {
      url: '/assets/images/blm.jpeg',
      title: 'Black lives matter protest sign',
    },
    description:
      "I am an influential, innovative, resilient, powerful, and - most of all - fearless Black man. Being Black is beautiful, yet it's a shame that we still have to endure blatant racial injustices, profiling, marginalization, and oppression (just to name a few) from those who see us as 'inferior'. Nonetheless, I am PROUD to be Black and always will be ✊🏾.",
    fadeInDuration: 800,
  },
  {
    title: 'Nipsey Hussle',
    pic: { url: '/assets/images/nipseyhussle.jpeg', title: 'Nipsey Hussle' },
    description:
      'I became a fan of Nipsey Hussle when my wife and I moved to L.A in Fall 2018. His music helped ease my anxiety of moving here in the fashion we did and also helped me become more comfortable to call L.A. "home". Nipsey inspired me to stay dedicated to reach my goals and to keep striving because my hard work WILL pay off in the long run. Rest in peace Nipsey. The Marathon Continues 🏁.',
    fadeInDuration: 900,
  },
  {
    title: 'Music',
    pic: {
      url: '/assets/images/music.jpeg',
      title: 'Elliot holding a keyboard',
    },
    description:
      'Beat making has been a pasttime of mine for over 10 years now. I particularly love chopping up samples of older music and adding a new twist to it. Check out my Soundcloud to here some of my creations.',
    socialMedia: {
      icon: SiSoundcloud,
      title: 'Muse Music',
      type: 'Soundcloud',
      tooltip: 'My Soundcloud page',
      link: 'https://soundcloud.com/thatsehannah/tracks',
    },
    fadeInDuration: 1000,
  },
  {
    title: 'Basketball',
    pic: { url: '/assets/images/kobemjbron.jpeg', title: 'Kobe, MJ, Bron' },
    description:
      "Basketball was my first love. I enjoy watching it as well as playing it. It taught me discipline and gave me confidence to strive to be the best at any and everything I do. Well since you asked, my top 5 favorite players of all-time are LeBron James, Michael Jordan, Allen Iverson, Shaq, and the late-great Kobe Bryant. Rest in peace Kobe & Gianna. Mamba Forever.",
    fadeInDuration: 1100,
  },
  {
    title: 'Technology',
    pic: {
      url: '/assets/images/tech.jpeg',
      title: 'Workstation with code on computer',
    },
    description:
      "Two of the biggest reasons why I am passionate about technology is because of the ever-evolving capabilities of technology and the reward of producing quality products. This passion solely drove me to learn how to code and want to continue to be hands-on with the growing world of tech.",
    fadeInDuration: 1200,
  },
  {
    title: 'I ♥️ L.A.',
    pic: {
      url: '/assets/images/overlook.jpeg',
      title: 'Overlook of Los Angeles',
    },
    description:
      "Besides the nice weather, the Lakers, landscape, etc., the main thing I love about L.A. is that it helped me culminate a new definition of 'success'. I have developed a different outlook on it since moving here and I am more determined to be successful in my career. Since relocating to Houston, I find myself missing L.A quite often. But I absolutely do not miss the cost of living 😩.",
    fadeInDuration: 1300,
  },
];
