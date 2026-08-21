import { StorySlide } from "@/types";

export enum SERVICES {
  WEDDING = "WEDDING",
  ENGAGEMENT = "ENGAGEMENT",
  COUPLE = "COUPLE",
  FAMILY = "FAMILY",
  LIFESTYLE = "LIFESTYLE",
  MATERNITY = "MATERNITY",
  GRADUATION = "GRADUATION",
  PORTRAIT = "PORTRAIT",
  EVENT = "EVENT",
}

export type Service = SERVICES;

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

export const pricingData = [
  {
    title: "Full Day Wedding",
    description:
      'From the quiet moments before "I do" to the celebration on the dance floor, this collection is designed to preserve your entire wedding story with care and intention.',
    list: "Up to 12 Hours of Wedding Day Coverage, 2 Photographers, Unlimited Shots, 500+ Handcrafted High-Resolution Edited Images, Sneak Peek Gallery Delivered Within One Week, Private Online Gallery for Viewing, Sharing & Downloads, Final Gallery Delivered Within 2–4 Weeks, Travel & Accommodation Fees Apply for Destination Weddings",
    image:
      "https://orvbrctfcblxbtaplsxp.supabase.co/storage/v1/object/sign/landing/240930-210343-DSC02166.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZTk1Y2I1NS1hYTExLTRiNDEtOWFkMy02MWFjZDcxYjQzZjYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nLzI0MDkzMC0yMTAzNDMtRFNDMDIxNjYuanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NzMzNTI5NSwiZXhwIjoyMTAyNjk1Mjk1fQ.ycXiXDm4OWR06V5u_lns5C40dXdFazhZnBErCEs8HbA",
    price: "Starting at $2,000 CAD",
    position: "flex-col-reverse md:flex-row",
    spacing: "md:pt-10",
    imagePosition: undefined,
  },
  {
    title: "Half Day Wedding",
    description:
      "Perfect for intimate celebrations and shorter wedding days, this collection focuses on the moments that matter most, from your ceremony to portraits and the beginning of your celebration.",
    list: "Up to 6 Hours of Wedding Day Coverage, 2 Photographers, Unlimited Shots, 300+ Handcrafted High-Resolution Edited Images, Sneak Peek Gallery Delivered Within One Week, Private Online Gallery for Viewing, Sharing & Downloads, Final Gallery Delivered Within 2–4 Weeks, Travel & Accommodation Fees Apply for Destination Weddings",
    image:
      "https://orvbrctfcblxbtaplsxp.supabase.co/storage/v1/object/sign/landing/DSC01907.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZTk1Y2I1NS1hYTExLTRiNDEtOWFkMy02MWFjZDcxYjQzZjYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nL0RTQzAxOTA3LmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODczMzUyMjQsImV4cCI6MjEwMjY5NTIyNH0.tOPBrxMBq59Jkrzc-B8L1J_vxn8s4KSRyHyHYuCY31A",
    price: "Starting at $1,500 CAD",
    position: "flex-col-reverse md:flex-row-reverse",
    spacing: "pt-36 md:pt-14",
    imagePosition: "-translate-y-36 md:-translate-y-0",
  },
  {
    title: "Couples & Lifestyle",
    description:
      "Whether you're celebrating a milestone or simply preserving this season of life, these sessions are designed to capture genuine connection and authentic moments through soft, cinematic imagery. Perfect for couples, families, graduates, creatives, and personal brands.",
    list: "Up to 2 Hours of Session Coverage, 2 Photographers, Unlimited Shots, 50–100 Handcrafted High-Resolution Edited Images, Sneak Peek Gallery Delivered Within One Week, Private Online Gallery for Viewing, Sharing & Unlimited Downloads, Outfit & Location Consultation, Final Gallery Delivered Within 1–2 Weeks, Travel Fees May Apply for Locations Outside the Local Area",
    image:
      "https://orvbrctfcblxbtaplsxp.supabase.co/storage/v1/object/sign/landing/251108-134046-A7402629.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZTk1Y2I1NS1hYTExLTRiNDEtOWFkMy02MWFjZDcxYjQzZjYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nLzI1MTEwOC0xMzQwNDYtQTc0MDI2MjkuanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NzMzNjQwNywiZXhwIjoyMTAyNjk2NDA3fQ.R5Uv_7Ii3W8OsiVyvQbdrRkfZtNCLslTpNEoc9GfAMM",
    price: "Starting at $250 CAD",
    position: "flex-col-reverse md:flex-row",
    spacing: "pt-36 md:pb-10 md:pt-50",
    imagePosition: undefined,
  },
];

export const slides: StorySlide[] = [
  {
    id: 1,
    eyebrow: "WHAT YOU CAN EXPECT",
    title: "Simple is always best.",
    description:
      "Photography should feel effortless. Our goal is to create a calm and relaxed experience where genuine moments naturally unfold, resulting in timeless images that feel honest and deeply personal.",
    image:
      "https://orvbrctfcblxbtaplsxp.supabase.co/storage/v1/object/sign/slider/A7406430.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZTk1Y2I1NS1hYTExLTRiNDEtOWFkMy02MWFjZDcxYjQzZjYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzbGlkZXIvQTc0MDY0MzAuanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NzMzODcxOCwiZXhwIjoyMTAyNjk4NzE4fQ.jv8HdSi3w5-H8eUcl2j1PDXpVpxYq9Cdk4CJBPcXrLc",
  },

  {
    id: 2,
    eyebrow: "OUR APPROACH",
    title: "Real moments over perfect poses.",
    description:
      "Rather than directing every second, we gently guide when needed while allowing authentic emotions, laughter, and connection to become the heart of every photograph.",
    image:
      "https://orvbrctfcblxbtaplsxp.supabase.co/storage/v1/object/sign/slider/A7407773.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZTk1Y2I1NS1hYTExLTRiNDEtOWFkMy02MWFjZDcxYjQzZjYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzbGlkZXIvQTc0MDc3NzMuanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NzMzODczMCwiZXhwIjoyMTAyNjk4NzMwfQ.DQyG3J8Pq-IwXsletXmI2Gj4VWh9-Ro5EmVa88yq88g",
  },
  {
    id: 3,
    eyebrow: "FEEL AT EASE",
    title: "Just Be Yourselves.",
    description:
      "The best photographs come from genuine moments. Relax, be present, and let your story unfold naturally.",
    image:
      "https://orvbrctfcblxbtaplsxp.supabase.co/storage/v1/object/sign/slider/A7409042.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZTk1Y2I1NS1hYTExLTRiNDEtOWFkMy02MWFjZDcxYjQzZjYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzbGlkZXIvQTc0MDkwNDIuanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NzMzODc1MCwiZXhwIjoyMTAyNjk4NzUwfQ.Ksyix_ulxQpk75Qb8hfOpBNAHT62dRUXybWqtsWVA14",
  },
  {
    id: 4,
    eyebrow: "YOUR EXPERIENCE",
    title: "Memories worth returning to.",
    description:
      "Whether it's a wedding, portrait session, or celebration, every gallery is crafted with the same cinematic approach—soft, timeless, and full of feeling.",
    image:
      "https://orvbrctfcblxbtaplsxp.supabase.co/storage/v1/object/sign/slider/A7C05028.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZTk1Y2I1NS1hYTExLTRiNDEtOWFkMy02MWFjZDcxYjQzZjYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJzbGlkZXIvQTdDMDUwMjguanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NzMzODc2MiwiZXhwIjoyMTAyNjk4NzYyfQ.GojzA5WW3CtvIElfvTirr47PBSUah5QJ3yNSy6kY8x8",
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
      "Yes! We're based in Regina, Saskatchewan, and are available for travel throughout Canada. Travel or accommodation fees may apply depending on the location.",
  },
  {
    question: "What should we wear for our session?",
    answer:
      "We recommend timeless, neutral-toned outfits that feel comfortable and authentic to you. After booking, we'll provide a styling guide with helpful tips to ensure your photos look natural and cohesive.",
  },
];
