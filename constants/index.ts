import { StorySlide } from "@/types";
import { SERVICES } from "./services";

export const slides: StorySlide[] = [
  {
    id: 1,
    eyebrow: "WHAT YOU CAN EXPECT",
    title: "Simple is always best.",
    description:
      "Photography should feel effortless. Our goal is to create a calm and relaxed experience where genuine moments naturally unfold, resulting in timeless images that feel honest and deeply personal.",
    image: "/assets/images/couple-4.jpg",
  },

  {
    id: 2,
    eyebrow: "OUR APPROACH",
    title: "Real moments over perfect poses.",
    description:
      "Rather than directing every second, we gently guide when needed while allowing authentic emotions, laughter, and connection to become the heart of every photograph.",
    image: "/assets/images/couple-4.jpg",
  },
  {
    id: 3,
    eyebrow: "FEEL AT EASE",
    title: "Just Be Yourselves.",
    description:
      "The best photographs come from genuine moments. Relax, be present, and let your story unfold naturally.",
    image: "/assets/images/couple-4.jpg",
  },
  {
    id: 4,
    eyebrow: "YOUR EXPERIENCE",
    title: "Memories worth returning to.",
    description:
      "Whether it's a wedding, portrait session, or celebration, every gallery is crafted with the same cinematic approach—soft, timeless, and full of feeling.",
    image: "/assets/images/couple-4.jpg",
  },
];

export const processGuide = [
  {
    title: "Get in Touch",
    description:
      "Reach out to us via our contact form or email to discuss your photography needs and vision.",
  },
  {
    title: "Meet & Plan",
    description:
      "We'll schedule a consultation to get to know you, your story, and your photography goals. We'll discuss locations, styles, and any specific shots you want.",
  },
  {
    title: "Your Day",
    description:
      "On the day of your session or event, we'll capture every moment with care and creativity, ensuring you feel comfortable and natural in front of the camera.",
  },
  {
    title: "Gallery Delivery",
    description:
      "After editing and curating your images, we'll provide you with a private online gallery to view, download, and share your photos.",
  },
  // {
  //   title: "Memories Forever",
  //   description:
  //     "Your photos will be a timeless keepsake, preserving your memories for years to come.",
  // },
];

export const faqs = [
  {
    question: "How do we book a session or wedding?",
    answer:
      "Start by submitting an inquiry through our contact form. Once we've confirmed availability, we'll send over your proposal, contract, and invoice. Your date is officially reserved once the signed agreement and retainer have been received.",
  },
  {
    question: "Do you help with posing?",
    answer:
      "Absolutely. You don't need any experience in front of the camera. We'll gently guide you throughout the session while allowing genuine moments and natural interactions to unfold.",
  },
  {
    question: "When will we receive our photos?",
    answer:
      "Sneak peeks are typically delivered within one week. Wedding galleries are delivered within 6–8 weeks, while portrait and lifestyle sessions are usually ready within 2–3 weeks.",
  },
  {
    question: "Do you travel for sessions and weddings?",
    answer:
      "Yes! We're based in Regina, Saskatchewan, and are available for travel throughout Saskatchewan and beyond. Travel or accommodation fees may apply depending on the location.",
  },
  {
    question: "What should we wear for our session?",
    answer:
      "We recommend timeless, neutral-toned outfits that feel comfortable and authentic to you. After booking, we'll provide a styling guide with helpful tips to ensure your photos look natural and cohesive.",
  },
];

export const collections = [
  {
    title: "Bride + Groom",
    description: "Wedding",
    image: "/assets/images/couple-1.jpg",
    link: "/portfolio/collection/12124123252",
  },
  {
    title: "Bride + Groom",
    description: "Wedding",
    image: "/assets/images/couple-2.jpg",
    link: "/portfolio/collection/12124123252",
  },
  {
    title: "Bride + Groom",
    description: "Couple",
    image: "/assets/images/couple-3.jpg",
    link: "/portfolio/collection/12124123252",
  },
  {
    title: "Bride + Groom",
    description: "Lifestyle",
    image: "/assets/images/couple-4.jpg",
    link: "/portfolio/collection/12124123252",
  },
  {
    title: "Bride + Groom",
    description: "Wedding",
    image: "/assets/images/couple-5.jpg",
    link: "/portfolio/collection/12124123252",
  },
];

export const services = [
  {
    label: "Wedding",
    value: SERVICES.WEDDING,
  },
  {
    label: "Engagement",
    value: SERVICES.ENGAGEMENT,
  },
  {
    label: "Couples",
    value: SERVICES.COUPLE,
  },
  {
    label: "Lifestyle",
    value: SERVICES.LIFESTYLE,
  },
  {
    label: "Family",
    value: SERVICES.FAMILY,
  },
  {
    label: "Maternity",
    value: SERVICES.MATERNITY,
  },
  {
    label: "Portrait",
    value: SERVICES.PORTRAIT,
  },
  {
    label: "Graduation",
    value: SERVICES.GRADUATION,
  },
  {
    label: "Event",
    value: SERVICES.EVENT,
  },
] as const;
