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
    title: "Half Day Wedding",
    description:
      "For intimate celebrations and shorter wedding days, we'll capture the moments that matter most; From the anticipation before your ceremony to the portraits and embraces that follow.",
    list: "Up to 6 hours of wedding day photography;Complimentary engagement session included; Two photographers to capture different perspectives; Minimum 300 carefully edited, high-resolution photographs; Sneak peeks delivered within one week; A private online gallery to view, download, and share your photographs; Complete gallery delivered within 2–4 weeks",
    image:
      "https://orvbrctfcblxbtaplsxp.supabase.co/storage/v1/object/sign/landing/240930-210343-DSC02166.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZTk1Y2I1NS1hYTExLTRiNDEtOWFkMy02MWFjZDcxYjQzZjYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nLzI0MDkzMC0yMTAzNDMtRFNDMDIxNjYuanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NzMzNTI5NSwiZXhwIjoyMTAyNjk1Mjk1fQ.ycXiXDm4OWR06V5u_lns5C40dXdFazhZnBErCEs8HbA",
    extraFees: "Travel & Accommodation Fees May Apply for Destination Weddings",
    price: "Starting at $1,500 CAD",
    position: "flex-col-reverse md:flex-row",
    spacing: "md:pt-10",
    imagePosition: undefined,
  },
  {
    title: "Full Day Wedding",
    description:
      "From the quiet moments of getting ready to the joy on the dance floor, your wedding day is filled with moments you may not even realize are happening. We're here to document the whole story, so you can be present while we preserve the memories.",
    list: "Up to 12 hours of wedding day photography; Complimentary engagement session included; Two photographers to capture more of the moments happening throughout your day; Minimum 500 carefully edited, high-resolution photographs; Sneak peeks delivered within one week; A private online gallery to view, download, and share your photographs; Complete gallery delivered within 2–4 weeks",
    image:
      "https://orvbrctfcblxbtaplsxp.supabase.co/storage/v1/object/sign/landing/DSC01907.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZTk1Y2I1NS1hYTExLTRiNDEtOWFkMy02MWFjZDcxYjQzZjYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nL0RTQzAxOTA3LmpwZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODczMzUyMjQsImV4cCI6MjEwMjY5NTIyNH0.tOPBrxMBq59Jkrzc-B8L1J_vxn8s4KSRyHyHYuCY31A",
    extraFees: "Travel & Accommodation Fees May Apply for Destination Weddings",
    price: "Starting at $2,000 CAD",
    position: "flex-col-reverse md:flex-row-reverse",
    spacing: "pt-36 md:pt-14",
    imagePosition: "-translate-y-36 md:-translate-y-0",
  },
  {
    title: "Short Sessions",
    description:
      "Whether you're celebrating your relationship, growing your family, marking a milestone, or simply wanting photographs together, we'll create a relaxed experience that lets your connection shine.",
    list: "Up to 2 hours of photography; Two photographers; 50–100 carefully edited, high-resolution photographs; Outfit and location consultation; A private online gallery to view, download, and share your photographs; Sneak peeks delivered within one week; Complete gallery delivered within 1–2 weeks",
    image:
      "https://orvbrctfcblxbtaplsxp.supabase.co/storage/v1/object/sign/landing/251108-134046-A7402629.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8zZTk1Y2I1NS1hYTExLTRiNDEtOWFkMy02MWFjZDcxYjQzZjYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsYW5kaW5nLzI1MTEwOC0xMzQwNDYtQTc0MDI2MjkuanBnIiwic2NvcGUiOiJkb3dubG9hZCIsImlhdCI6MTc4NzMzNjQwNywiZXhwIjoyMTAyNjk2NDA3fQ.R5Uv_7Ii3W8OsiVyvQbdrRkfZtNCLslTpNEoc9GfAMM",
    extraFees: "Travel Fees May Apply for Locations Outside the Local Area",
    price: "Starting at $200 CAD",
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
    title: "Let's Talk",
    description:
      "Tell us about your wedding, your plans, or the moments you'd love to remember. We'll discuss your vision, availability, and the collection that best fits your needs.",
  },
  {
    title: "Let's Make a Plan",
    description:
      "Once you're ready to move forward, we'll take care of the booking details and talk through locations, timing, and anything that will help you feel prepared.",
  },
  {
    title: "Your Day",
    description:
      "When the day arrives, enjoy it. We'll document the meaningful moments as they unfold and gently guide you whenever you need a little direction.",
  },
  {
    title: "Gallery Delivery",
    description:
      "We'll carefully edit your photographs and deliver them through your private online gallery, ready for you to view, download, and share.",
  },
  // {
  //   title: "Memories Forever",
  //   description:
  //     "Your photos will be a timeless keepsake, preserving your memories for years to come.",
  // },
];

export const faqs = [
  {
    question: "How do we book our date?",
    answer:
      "Start by submitting an inquiry through our contact form. Once we've confirmed our availability and discussed your plans, we'll send over your photography agreement and invoice. Your date is officially reserved once the signed agreement and 30% retainer have been received. The remaining balance is due one week before your wedding or session.",
  },
  {
    question: "When will we receive our photos?",
    answer:
      "You'll receive a sneak peek gallery within one week. Full wedding galleries are delivered within 2–4 weeks, while Couples & Lifestyle galleries are delivered within 1–2 weeks.",
  },
  {
    question: "Do you travel outside Regina?",
    answer:
      "Absolutely! We're based in Regina, Saskatchewan, and are available for weddings and photography sessions throughout Canada. Travel and accommodation fees may apply depending on your location.",
  },
  {
    question: "Is a pre-wedding session included in our wedding package?",
    answer:
      "Yes! A complimentary pre-wedding session is included with both our Half Day Wedding and Full Day Wedding collections. It's a wonderful opportunity to get comfortable in front of our cameras and capture beautiful photographs together before your wedding day.",
  },
  {
    question: "What if we're awkward or don't know how to pose?",
    answer:
      "You don't need any photography experience to work with us. We'll offer gentle guidance when needed while allowing genuine moments to unfold naturally. Our goal is to help you feel comfortable, be yourselves, and enjoy the experience together.",
  },
  {
    question: "How many photos will we receive?",
    answer:
      "Every story is different, but each collection includes a thoughtfully edited gallery of high-resolution photographs. Our Half Day Wedding collection includes 300+ images, Full Day Wedding includes 500+ images, and Couples & Lifestyle sessions include 50–100 images.",
  },
  {
    question: "How will we receive our photographs?",
    answer:
      "Your photographs will be delivered through a private online gallery where you can view, download, and share your images with family and friends. You can revisit your gallery whenever you want to relive those special moments.",
  },
  {
    question: "Can we request specific photos or poses?",
    answer:
      "Of course! We'd love to hear about the moments, people, and details that matter most to you. You can share your must-have photographs and family groupings with us beforehand. We'll help guide the process while leaving room for genuine, unplanned moments.",
  },
  {
    question: "What happens if our wedding date or schedule changes?",
    answer:
      "We understand that plans can change. Please contact us as soon as possible if your date or schedule needs to change. We'll discuss your situation, review our photography agreement, and determine what arrangements may be possible.",
  },
  {
    question: "Is the 30% retainer refundable?",
    answer:
      "Our retainer and cancellation terms are outlined in your photography agreement. We'll explain the applicable terms before you book, so you understand the booking conditions and what happens if your plans change.",
  },
];
