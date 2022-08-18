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
    title: "Droid",
    category: "Competition",
    desc: "An Android App development competition for developers to showcase their skills. One can develop any one of the App from given topics or any other of his or her choice. All participants will get certificate of participation and top 3 performers will get certificate of achievement. Also 1st rank holders app will get published on play store with his name credits. Topics are mentioned in the form.",
    cta: "Submit Now",
    ctaLink: "https://forms.gle/V6sKFXFA2tiqZdKN9",
    ctaMore: "Submit before: 30th of Sept. 6 pm",
    isCTAClosed: true,
    CTAClosedMsg: "Submission Closed",
    organizers: [
      {
        name: "Sankalp Chake",
        number: "9673126575",
        photo: getPhotoURL("dr1"),
      },
      {
        name: "Aditya Khadse",
        number: "8485012993",
        photo: getPhotoURL("dr2"),
      },
      {
        name: "Swaraj Wankhede",
        number: "9096482888",
        photo: getPhotoURL("dr3"),
      },
    ],
  },
  {
    img: WriterQue,
    title: "WriterQue",
    category: "Competition",
    desc: "Scribble or scrawl.. Compile or Compose.. draft or create.. Close the door. Write with no one looking over your shoulder. Don’t try to figure out what other people want to hear from you; figure out what you have to say. It’s the one and only thing you have to offer. Writing isn't about using big words to impress. It's about using simple words in an impressive way. Come and carve all your heart out with us in this small escritoire.",
    cta: "Submit Now",
    ctaLink: "https://forms.gle/4wxCA4bQjQ4bdqwD9",
    ctaMore: "Submit before: 30th of Sept.",
    isCTAClosed: true,
    CTAClosedMsg: "Submission Closed",
    organizers: [
      { name: "Grace Lal", number: "8055174746", photo: getPhotoURL("wq1") },
      {
        name: "Vedanti Awaghade",
        number: "7038376477",
        photo: getPhotoURL("wq2"),
      },
    ],
  },
  {
    img: Fotofreaks,
    title: "FotoFreaks",
    category: "Competition",
    desc: "Magic or logic; art or craft; Inspiration or perspiration! Demystify the wonders captured in photographs. Dear photographers, this is the time to showcase your skills! Participate in the most anticipated competition made for budding photographers and grow your photography skills. All participants will get certificate. Top two entries stand a chance to be featured on our official Compufest Instagram handle!",
    cta: "Submit Now",
    ctaLink: "https://forms.gle/quABaShQTLXK4DoQ6",
    ctaMore: "Submit before: 30th of Sept.",
    isCTAClosed: true,
    CTAClosedMsg: "Submission Closed",
    organizers: [
      {
        name: "Shreyas Rajurkar",
        number: "9888888888",
        photo: getPhotoURL("ff3"),
      },
      {
        name: "Anshul Hedau",
        number: "7447344118",
        photo: getPhotoURL("ff1"),
      },
      {
        name: "Pooja Tirankar",
        number: "7620283882",
        photo: getPhotoURL("ff2"),
      },
    ],
  },
  {
    img: BrilliantWithBrushes,
    title: "Brilliant with Brushes",
    category: "Competition",
    desc: "Winners are not always those who produce exceptionally realistic artwork. Your creative approach might be just what we are looking for. If you’re creating amazing art but struggling to gain exposure, our art contest 'Brilliant with Brushes'  is a great opportunity for you to showcase your talent. We welcome all Art Enthusiasts from every corner to this event; an event which give people something to look forward to in a creative way. So if you want to appeal to a lively and creative crowd submit your artworks before the deadline. Don't miss the chance to flaunt your talent in the best possible way.",
    cta: "Submit Now",
    ctaMore: "Submit before: 30th Sept.",
    ctaLink: "https://forms.gle/MhyzCoT8RQasJgHi9",
    isCTAClosed: true,
    CTAClosedMsg: "Submission Closed",
    organizers: [
      {
        name: "Saylee Prakashe",
        number: "81800 01162",
        photo: getPhotoURL("bb1"),
      },
      {
        name: "Janvi Madavi",
        number: "77559 44022",
        photo: getPhotoURL("bb4"),
      },
      { name: "Nupur Bagul", number: "83906 92080", photo: getPhotoURL("bb3") },
      {
        name: "Punam Bandhate",
        number: "72182 57493",
        photo: getPhotoURL("bb2"),
      },
      {
        name: "Sonali Gaiki",
        number: "95524 56775",
        photo: getPhotoURL("bb5"),
      },
    ],
  },
  {
    img: posterPoster,
    title: "Poster Making Competition",
    category: "Competition",
    desc: "Good design is all about making other designers feel like idiots because that idea wasn't their's. Come and participate in the Poster making competition and showcase your skills. You are free to choose any social topic. Your poster can be digital or handmade. Awaiting to see the best out of you!",
    cta: "Submit Now",
    ctaMore: "Submit before: 30th Sept.",
    ctaLink: "https://forms.gle/38VKg2TZzVsbKBx28",
    isCTAClosed: true,
    CTAClosedMsg: "Submission Closed",
    organizers: [
      {
        name: "Anay Patharkar",
        number: "84510 45011",
        photo: getPhotoURL("gx1"),
      },
      { name: "Devang Deshpande", number: "" },
    ],
  },
  {
    img: GetSetCode,
    title: "Get Set Code",
    category: "Competition",
    desc: "Get Set Code is an annual coding contest held by the CodeChef YCCE Chapter. The contest is designed to be enjoyable whether you are a beginner or an experienced coder. The only prerequisite is that the contestant should be familiar with CodeChef platform.",
    cta: "Register Now",
    ctaLink: "https://forms.gle/EYQt8oUhEPW8T7RF9",
    ctaMore: "On 30th of Sept. 11 am to 1 pm",
    isCTAClosed: true,
    CTAClosedMsg: "Registration Closed",
    organizers: [
      {
        name: "Vallabh Deshpande",
        number: "7414931888",
        photo: getPhotoURL("gs1"),
      },
      {
        name: "Toshit Kale",
        number: "9420240574",
        photo: getPhotoURL("gs2"),
      },
    ],
  },
  {
    img: WebDev,
    title: "Workshop on reactJS",
    category: "Workshop",
    desc: "A workshop on the most trending web framework - reactJS. This 4.5 hours online workshop will give you an introduction on how to build on the web with react! For leveraging the learning-by-doing approach, we'll be building a portfolio website for you, together!",
    cta: "Register Now",
    ctaLink: "https://forms.gle/APmr92jUZca5pwbv5",
    ctaMore: "On 30th of Sept. 11 am to 4 pm",
    isCTAClosed: true,
    CTAClosedMsg: "Registration Closed",
    organizers: [
      {
        name: "Shubham Lingayat",
        number: "9850496185",
        photo: getPhotoURL("rj1"),
      },
      {
        name: "Swanand Buva",
        number: "8999064423",
        photo: getPhotoURL("rj2"),
      },
    ],
  },
  {
    img: SmartKid,
    title: "SMART Kid",
    category: "Workshop",
    desc: `This is a crisp mind tickling workshop, where your reasoning and creativity are triggered by the stimulus of fun and joyous challenges, that are inspired from the perspective of the most curious beings on earth - Kids!
      Ready to Tinkering and ReThink Your vision of this world? 
      immerse yourself into this journey and see yourself! `,
    cta: "Register Now",
    ctaLink: "https://forms.gle/vzHfg1DvKwNpiSAGA",
    ctaMore: "On 1st of Oct. 10 am",
    isCTAClosed: true,
    CTAClosedMsg: "Registration Closed",
    organizers: [
      {
        name: "Nikhil Tamrakar",
        number: "8999449698",
        photo: getPhotoURL("sk1"),
      },
      {
        name: "Anmoldeep Singh",
        number: "7276929461",
        photo: getPhotoURL("sk2"),
      },
      {
        name: "Prajwal Hatwar",
        number: "774871451",
        photo: getPhotoURL("sk3"),
      },
    ],
  },
  {
    img: Graphix,
    title: "Graphix",
    category: "Workshop",
    desc: "Good design is not about what medium you are working in. It's about thinking hard about what you want to do and what you want to work with before you start. Are you the one who is aspiring to learn Graphic designing? If yes, then come and join us for the Graphix-A workshop on Graphic Designing. The certificate will be given to all the attendees!",
    cta: "Register Now",
    ctaMore: "On 1st of Oct. 12 pm to 1.30 pm",
    ctaLink: "https://forms.gle/CpPHyeiP3BwD8J369",
    isCTAClosed: true,
    CTAClosedMsg: "Registration Closed",
    organizers: [
      {
        name: "Anay Patharkar",
        number: "8451045011",
        photo: getPhotoURL("gx1"),
      },
      {
        name: "Sanskar Chaware",
        number: "9824048194",
        photo: getPhotoURL("gx2"),
      },
      {
        name: "Anjali Udapurkar",
        number: "9857465720",
        photo: getPhotoURL("gx3"),
      },
    ],
  },
  {
    img: BeTheOne,
    title: "Be-The-One",
    category: "Session",
    desc: "Queries or Questions.. Suspicion or confusion.. Vacillation or irresolution.. Placements or Higher Education.. we are here to clear all your queries and let you choose the path you deserve. Also, get to know how to get placed in your dream companies or how to get admission in the best university from  7 erudite speakers Vallabh Deshpande, Ritik Gour, Mrudula Umalkar, Atharva Gajbe, Abhishek Yadav, Akshit Panday and Sarthak Chafle. So what are you waiting for come and explore.",
    cta: "Register Now",
    ctaMore: "On 1st of Oct. 2 pm to 3 pm",
    ctaLink: "https://forms.gle/xoBiFauDjQamoM4h6",
    isCTAClosed: true,
    CTAClosedMsg: "Registration Closed",
    organizers: [
      {
        name: "Gunjan Khonde",
        number: "7020612265",
        photo: getPhotoURL("bto1"),
      },
      {
        name: "Pranjali Thaware",
        number: "9284258227",
        photo: getPhotoURL("bto2"),
      },
    ],
  },
];

export default events;
