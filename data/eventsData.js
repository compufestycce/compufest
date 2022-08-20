import Fotofreaks from "../public/assets/imgs/events/fotofreaks.png";
import WebDev from "../public/assets/imgs/events/webdev.png";
import WriterQue from "../public/assets/imgs/events/writerque.png";
import Droid from "../public/assets/imgs/events/droid.png";
import Graphix from "../public/assets/imgs/events/graphix.png";
import BeTheOne from "../public/assets/imgs/events/beTheOne.png";
import BrilliantWithBrushes from "../public/assets/imgs/events/brilliantWithBrushes.png";
import SmartKid from "../public/assets/imgs/events/smartKid.png";
import GetSetCode from "../public/assets/imgs/events/getSetCode.png";
import posterPoster from "../public/assets/imgs/events/posterMaking.png";

import getPhotoURL from "../utils/getPhotoUrl";

const events = [
  {
    img: Droid,
    title: "Chronowar",
    category: "Robotic Race",
    desc: "CHRONOWAR is the ROBOTIC event for Engineers to showcase their skills & talent. This is the event where one have to build the machine in order to race on the given runway track and reach the finishing line in minimum time. Awaiting to see the best talents amongst you!!",
    cta: "Submit Now",
    ctaLink: "https://forms.gle/V6sKFXFA2tiqZdKN9",
    ctaMore: "Submit before: 2nd of September, 9 am",
    isCTAClosed: true,
    CTAClosedMsg: "Submission Closed",
    organizers: [
      {name: "Nikhil Tamrakar", number: "", photo:getPhotoURL("defaultAvatar")},
    ],
  },
  {
    img: WriterQue,
    title: "Computing Technologies",
    category: "MLSA Workshop",
    desc: `Learning is unifying seemingly divergent ideas and data. 
    Knowing is not enough; we must apply. Willing is not enough; we must do. It’s a chance to interact with the Microsoft Ambassadors LIVE!!!
    Microsoft Learn Student Ambassadors from all over the world and the Program Administrator will be there to share their knowledge on Cloud Computing and Computer Vision on MS Azure. 
    “Tell me and I forget. Teach me and I remember. Involve me and I learn…”
    Hands on sessions by Microsoft Ambassadors for leveraging the learning by doing approach. You will get a closure on overall contents of Cloud and Azure.    Knowledge is power but Enthusiasm pulls the switch. If you are Enthusiastic about learning some exciting unknown applications of Cloud and Azure this is the Chance to expand your knowledge and get a mastery in Cloud and Azure. A verified  Certificate from Microsoft will be given to all the attendees…`,
    cta: "Submit Now",
    ctaLink: "https://forms.gle/4wxCA4bQjQ4bdqwD9",
    ctaMore: "Submit before: 1st September, 2 pm",
    isCTAClosed: true,
    CTAClosedMsg: "Submission Closed",
    organizers: [
      {name: "Sakshi Kokardekar", number: "", photo:getPhotoURL("defaultAvatar")},
    ],
  },
  {
    img: Fotofreaks,
    title: "Codigo",
    category: "Competition",
    desc: "Codigo is an online coding competition organized by the CodeChef YCCE Chapter. It's a battle for those who are interested in solving energizing problems. Here, participants will have the opportunity to develop and test their programming skills. No matter whether you are a beginner or an experienced coder, the only prerequisite is that the contestant should be familiar with the CodeChef platform.",
    cta: "Submit Now",
    ctaLink: "https://forms.gle/quABaShQTLXK4DoQ6",
    ctaMore: "Submit before: 1st of Sept., 9 am",
    isCTAClosed: true,
    CTAClosedMsg: "Submission Closed",
    organizers: [
      {name: "Hazziq", number: "", photo:getPhotoURL("defaultAvatar")},
    ],
  },
  {
    img: BrilliantWithBrushes,
    title: "Reverse Coding",
    category: "Competition",
    desc: "Reverse Coding is a coding contest organised by CodeChef YCCE Chapter for the first time in its history. It's not that orthodox coding of writing a code for the given problem statement. But, as the name suggests, we are actually going to do the reverse of it. Here, the participants will be provided with Input, Output, constraints and some sample test cases, no problem statement mentioned, and the participants will have to write the code based on the given conditions. This event will help you in analysing your strengths in the world of programming and to have fun while learning this new approach.",
    cta: "Submit Now",
    ctaMore: "Submit before: 1st of Sept., 10 am",
    ctaLink: "https://forms.gle/MhyzCoT8RQasJgHi9",
    isCTAClosed: true,
    CTAClosedMsg: "Submission Closed",
    organizers: [
      {name: "Bhushan Naidu", number: "", photo:getPhotoURL("defaultAvatar")},
    ],
  },
  {
    img: posterPoster,
    title: "Gamathon JS",
    category: "Workshop",
    desc: "Nowadays, game designing and development has become a trend. It is the art for applying design aesthetics to give birth to a game for different purposes. And developing a game emphasizes on programming. So, we bring to you a workshop “GAMATHON JS” which will provide the participants deep knowledge regarding game designing and development .Activities will also be conducted in accordance with the same. Then, what are you waiting for ? Hurry and grab a chance for this exciting journey !!! ",
    cta: "Submit Now",
    ctaMore: "Submit before: 1st of Sept., 10 am",
    ctaLink: "https://forms.gle/38VKg2TZzVsbKBx28",
    isCTAClosed: true,
    CTAClosedMsg: "Submission Closed",
    organizers: [
      {name: "Kartik Umbarkar", number: "", photo:getPhotoURL("defaultAvatar")},
    ],
  },
  {
    img: GetSetCode,
    title: "Sparq Games",
    category: "Gaming Competition",
    desc: "Nothing brings gamers together like a bit of competition. We are here with the SPARQ gaming competition for the students to Showcase their gaming skills in a game like FIFA 2022 PS4 and BGMI as you put yourself against the best in the country...!!!",
    cta: "Register Now",
    ctaLink: "https://forms.gle/EYQt8oUhEPW8T7RF9",
    ctaMore: "Submit before: 1st of Sept., 10 am",
    isCTAClosed: true,
    CTAClosedMsg: "Registration Closed",
    organizers: [
      {name: "Nikhil Tamrakar", number: "", photo:getPhotoURL("defaultAvatar")},
    ],
  },
  {
    img: WebDev,
    title: "Articka",
    category: "Live Art Workshop",
    desc: "Art should be something that liberates the soul, provokes the imagination and encourages people to go further. Your art is a line around your thoughts. If you have an art that evokes mystery this is the opportunity to showcase your talent. Let others see & feel your artwork. We welcome all Enthusiasts from every corner, to participate in live art events; an event in which you will not reproduce reality but have to create reality of the same intensity. If you have the adroitness to make others feel your vision then this is something for you. Reboot your Intense mode of individualism. Don’t miss the chance to flaunt your skills in the form of art. ",
    cta: "Register Now",
    ctaLink: "https://forms.gle/APmr92jUZca5pwbv5",
    ctaMore: "Submit before: 1st of Sept., 11 am",
    isCTAClosed: true,
    CTAClosedMsg: "Registration Closed",
    organizers: [
      {name: "Sakshi Kokardekar", number: "", photo:getPhotoURL("defaultAvatar")},
    ],
  },
  {
    img: SmartKid,
    title: "Izzhar",
    category: "Open Mic",
    desc: `Poetry is harmony to the words, so music is that of notes ;As poetry rises above the prose and oratory ,so music the exaltation of poetry. The enthusiastic students who are keen can express their poetry, songs and stand-ups in Open Mic. Come and crave all your heart out with us at Open Mic.`,
    cta: "Register Now",
    ctaLink: "https://forms.gle/vzHfg1DvKwNpiSAGA",
    ctaMore: "Submit before: 1st of Sept., 1 pm",
    isCTAClosed: true,
    CTAClosedMsg: "Registration Closed",
    organizers: [
      {name: "Nikhil Tamrakar", number: "", photo:getPhotoURL("defaultAvatar")},
    ],
  },
  {
    img: Graphix,
    title: "Burn a Word",
    category: "Article",
    desc: `The ability to write is a precious quality developed by humans over the period of evolution . "Write it" is a platform for all the young writers present out there to showcase their talent and their ability to express their thoughts , emotions and ideas to the world . So come join us on this adventure filled with learning and write your hearts out.  Show your work here ✍️`,
    cta: "Register Now",
    ctaMore: "On 1st of Sept. 10 am onwards",
    ctaLink: "https://forms.gle/CpPHyeiP3BwD8J369",
    isCTAClosed: true,
    CTAClosedMsg: "Registration Closed",
    organizers: [
      {name: "Pranjali Thaware", number: "", photo:getPhotoURL("defaultAvatar")},
    ],
  },
  {
    img: BeTheOne,
    title: "Be-The-One",
    category: "Session",
    desc: "Opportunities don't happen, you create them. Come and get the opportunity to clear all the doubts regarding your dreams about higher education or your dream company. Why are you waiting? Give a shot with our speakers and get much needed guidance..",
    cta: "Register Now",
    ctaMore: "On 1st of Sept. 2 pm to 3 pm",
    ctaLink: "https://forms.gle/xoBiFauDjQamoM4h6",
    isCTAClosed: true,
    CTAClosedMsg: "Registration Closed",
    organizers: [
      {name: "", number: "", photo:getPhotoURL("defaultAvatar")},
    ],
  },
  {
    img: BeTheOne,
    title: "BGMI ",
    category: "Session",
    desc: `It’s for everyone, not just gamers. BGMI that everyone loves.
    BGMI is a player-versus-player shooter game in which up to 100 players compete in a battle royale, a type of large-scale last man standing deathmatch in which players compete to be the last one standing.
    Let’s see who stands last, being the guy who has won everything so far.
    Don’t try to beat everyone; just play with those who are better than you for. And if you think you’re the best one, then come forward and show us what you've got.`,
    cta: "Register Now",
    ctaMore: "On 1st of Sept. 2 pm to 3 pm",
    ctaLink: "https://forms.gle/xoBiFauDjQamoM4h6",
    isCTAClosed: true,
    CTAClosedMsg: "Registration Closed",
    organizers: [
      {name: "", number: "", photo:getPhotoURL("defaultAvatar")},
    ],
  },
  {
    img: BeTheOne,
    title: "DEBATE",
    category: "Session",
    desc: `Speaking and negotiation are no longer just "soft skills", those are your keys to success in any field! Here, participants with their teams of 4-5 will be given real-life problems and they need to discuss & provide the best ideal solution within the given time.
    Do come and participate in the Modal United Nations Debate Competition and manifest your skills and be the conqueror.`,
    cta: "Register Now",
    ctaMore: "On 1st of Sept. 2 pm to 3 pm",
    ctaLink: "https://forms.gle/xoBiFauDjQamoM4h6",
    isCTAClosed: true,
    CTAClosedMsg: "Registration Closed",
    organizers: [
      {name: "", number: "", photo:getPhotoURL("defaultAvatar")},
    ],
  },
  {
    img: BeTheOne,
    title: "FIFA",
    category: "Session",
    desc: `Every guy's first love. FIFA that everyone loves. 
    FIFA is a simulated football game, where gamers can choose to play as their favourite real-life footballers in their favourite real-life teams. 
    So for you we’re here to provide a platform to revive your memories of childhood with your friend and some new people.
    Don’t miss to grab this chance, meet new football lovers whom you’ve not met so far.
    Play, Compete and Win. Show you skills hidden beneath.`,
    cta: "Register Now",
    ctaMore: "On 1st of Sept. 2 pm to 3 pm",
    ctaLink: "https://forms.gle/xoBiFauDjQamoM4h6",
    isCTAClosed: true,
    CTAClosedMsg: "Registration Closed",
    organizers: [
      {name: "", number: "", photo:getPhotoURL("defaultAvatar")},
    ],
  },
  {
    img: BeTheOne,
    title: "Snapzia",
    category: "Photography",
    desc: `Hola amigos!!!
    Smile please 😁😁☺️
    Yes here the most awaited competition coming to you. 
    "SAY CHEESE" is the competition for all the photographers out there to show your photography skills 📸.
    Bring your love and emotions through your photographs and showcase it to the world. 
    
    Winning photographs will be showcased to our Compufest Instagram page handle ..`,
    cta: "Register Now",
    ctaMore: "Submit before: 1st of Sept., 9 am",
    ctaLink: "https://forms.gle/xoBiFauDjQamoM4h6",
    isCTAClosed: true,
    CTAClosedMsg: "Registration Closed",
    organizers: [
      {name: "Atharav Kevalram", number: "", photo:getPhotoURL("defaultAvatar")},
    ],
  },
  {
    img: BeTheOne,
    title: "Creative Crisp",
    category: "Poster Making",
    desc: `!!!!!!Colours 🌈🎨!!!!!
    Colours helps you visualize a beautiful art piece into reality. Like the same poster helps you to create , spread happiness,awareness and emotions to others.  
    Participate to our Poster Making Competition 🎨 and bring the artist in you to life . 
    Showcase your posters to the world and tell your story to them .
    `,
    cta: "Register Now",
    ctaMore: "Submit before: 1st of Sept., 9 am",
    ctaLink: "https://forms.gle/xoBiFauDjQamoM4h6",
    isCTAClosed: true,
    CTAClosedMsg: "Registration Closed",
    organizers: [
      {name: "Poorvi Yellarthi", number: "", photo:getPhotoURL("defaultAvatar")},
    ],
  },
  {
    img: BeTheOne,
    title: "Binary Search",
    category: "Treasure hunt",
    desc: `Are you eager to build your career among the best of the security agencies of the world? If yes, then come join in the fun of “CT SCAN” and reveal the agent inside you. The idea of hunting for hidden treasures has always been exciting and adventurous. Participants will work in teams of four to find the treasure with the help of given clues. The team who decodes the clue and finds the treasure first will win the game. Consider yourself to be an epistemologist. Seek the truth out of unrevealed mysteries by participating in the most exhilarating of the games “CT SCAN”.`,
    cta: "Register Now",
    ctaMore: "Submit before: 1st of Sept., 9 am",
    ctaLink: "https://forms.gle/xoBiFauDjQamoM4h6",
    isCTAClosed: true,
    CTAClosedMsg: "Registration Closed",
    organizers: [
      {name: "Prasanna Anjankar", number: "", photo:getPhotoURL("defaultAvatar")},
    ],
  },
  {
    img: BeTheOne,
    title: "VALORANT",
    category: "Gaming",
    desc: `You love Valorant. I love Valorant. That’s the main reason for organising this event. Valorant is a competitive shooter that borrows elements from Counter-Strike and casual hero-shooters. It’s a 5v5 multiplayer first-person shooter (FPS) where one team attacks and the other defends. where you can choose the character you like and showcase your special abilities. If you think that you’re good enough with your gaming skills, then come and join us! Compete with the best players and find out where you stand in the league.`,
    cta: "Register Now",
    ctaMore: "On 1st of Oct. 2 pm to 3 pm",
    ctaLink: "https://forms.gle/xoBiFauDjQamoM4h6",
    isCTAClosed: true,
    CTAClosedMsg: "Registration Closed",
    organizers: [
      {name: "Kartik Yeole", number: "", photo:getPhotoURL("defaultAvatar")},
    ],
  },
];

export default events;
