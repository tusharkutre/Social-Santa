import card1 from "./assets/service1.png";
import card2 from "./assets/service2.png";
import card3 from "./assets/service3.png";
import card4 from "./assets/service4.png";
import card5 from "./assets/service5.png";

import user2 from "./assets/user2.jpg";
import user3 from "./assets/user3.jpg";
import user1 from "./assets/user1.jpg";

// Array of objects
const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Testimonials", href: "/testimonials" },
];

// Array of objects for services
const services = [
  { image: card1, size: "col-span-2 row-span-1" },
  { image: card2, size: "lg:col-span-1 col-span-2 row-span-1" },
  { image: card3, size: "lg:col-span-1 col-span-2 row-span-1" },
  { image: card4, size: "lg:col-span-1 col-span-2 row-span-1" },
  { image: card5, size: "lg:col-span-1 col-span-2 row-span-1" },
];

// slide data for carousel
const slideData = [
  {
    id: 1,
    img: user1,
    title: "Pranav Kavshik",
    subtitle: "Partner, Sr. Manager",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.",
  },
  {
    id: 2,
    img: user2,
    title: "Sarah Johnson",
    subtitle: "CEO, Tech Solutions",
    desc: "Working with Ajinkya Technologies has transformed our business operations. Their innovative solutions have helped us achieve remarkable growth.",
  },
  {
    id: 3,
    img: user3,
    title: "Michael Chen",
    subtitle: "CTO, Digital Innovations",
    desc: "The team at Ajinkya Technologies delivered exceptional results. Their expertise and dedication to quality is truly impressive.",
  },
];

// Settings for the carousel
var settings = {
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true, // Enable auto slide play
  autoplaySpeed: 2000, // Set delay between slides in milliseconds
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false, // Hide arrows on small screens
        dots: true, // Show dots on small screens
        slidesToShow: 2, // Show only 2 slides on medium screens
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640,
      settings: {
        arrows: false, // Hide arrows on small screens
        dots: true, // Show dots on small screens
        slidesToShow: 1, // Show only 1 slide on small screens
        slidesToScroll: 1, // Scroll only 1 slide on small screens
        speed: 1000,
      },
    },
  ],
};

export { navigation, services, slideData, settings };