"use client";
import Heading from "@/app/(landing)/_common/heading";
import {
  AirplaneTiltIcon,
  FileTextIcon,
  GiftIcon,
  HeartStraightIcon,
  PaletteIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react";
import GuidelineCard from "./card";

export const guidelines = [
  {
    title: "Booking",
    description:
      "Reserve your date with a signed agreement and a 30% retainer. All collections are priced in Canadian Dollars (CAD), with the remaining balance due one week before your session.",
    icon: FileTextIcon,
  },
  {
    title: "Our Style",
    description:
      "Every story is unique, but our style remains consistent. We capture genuine moments and carefully edit every image in our signature style, creating a timeless gallery you'll cherish for years to come.",
    icon: PaletteIcon,
  },

  // {
  //   title: "Final Payment",
  //   description:
  //     "The remaining balance is due 1 week before your wedding or portrait session.",
  //   icon: CalendarDotsIcon,
  // },

  // {
  //   title: "Pricing",
  //   description:
  //     "All collections are priced in Canadian Dollars (CAD) and are subject to applicable taxes.",
  //   icon: CreditCardIcon,
  // },
  {
    title: "Experience",
    description:
      "No modeling experience is needed. We'll gently guide you throughout your session so you can focus on being present with the people you love.",
    icon: HeartStraightIcon,
  },

  {
    title: "Travel",
    description:
      "Based in Regina, Saskatchewan, we're available for travel throughout Canada. Travel or accommodation fees may apply depending on the location.",
    icon: AirplaneTiltIcon,
  },

  {
    title: "Collections",
    description:
      "Every wedding collection includes two dedicated photographers for complete coverage.",
    icon: UsersThreeIcon,
  },

  {
    title: "Engagement Session",
    description:
      "Select wedding collections include a complimentary engagement session.",
    icon: GiftIcon,
  },
];

export default function Guidelines() {
  return (
    <section className="bg-background py-32">
      <div className="container mx-auto px-6">
        {/* Heading */}

        <Heading
          textColor="blackMuted"
          eyebrow="BEFORE YOU BOOK"
          title="Everything You Need To Know"
          description="We believe every great experience begins with clear communication.
            Here are a few important details to help you feel confident before
            booking your session or wedding."
        />

        {/* Decorative Divider */}

        <div className="my-20 flex items-center justify-center gap-6">
          <div className="h-px w-32 bg-border" />

          <span className="text-lg text-muted-foreground">✦</span>

          <div className="h-px w-32 bg-border" />
        </div>

        {/* Cards */}

        <div className="grid gap-y-0 md:gap-y-16 gap-x-10 md:grid-cols-2 xl:grid-cols-3">
          {guidelines.map((item) => (
            <GuidelineCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
