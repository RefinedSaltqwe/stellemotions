"use client";
import Heading from "@/app/(landing)/_common/heading";
import {
  BookOpenTextIcon,
  HeartStraightIcon,
  PaletteIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react";
import GuidelineCard from "./card";

export const guidelines = [
  {
    title: "Booking",
    description:
      "Your date is reserved once your agreement is signed and your 30% retainer is received. The remaining balance is due one week before your session or wedding.",
    icon: BookOpenTextIcon,
  },
  {
    title: "Our Style",
    description:
      "Every story is unique, but our style remains consistent. We capture genuine moments and carefully edit every image in our signature style, creating a timeless gallery you'll cherish for years to come.",
    icon: PaletteIcon,
  },
  {
    title: "Experience",
    description:
      "We'll help you feel comfortable in front of the camera without making your experience feel overly posed or rehearsed.",
    icon: HeartStraightIcon,
  },

  // {
  //   title: "Travel",
  //   description:
  //     "Based in Regina, Saskatchewan, we're available for travel throughout Canada. Travel or accommodation fees may apply depending on the location.",
  //   icon: AirplaneTiltIcon,
  // },

  {
    title: "Two photographers, one shared vision",
    description:
      "We work together to document different perspectives and meaningful moments throughout your day.",
    icon: UsersThreeIcon,
  },

  // {
  //   title: "Engagement Session",
  //   description:
  //     "Select wedding collections include a complimentary engagement session.",
  //   icon: GiftIcon,
  // },
];

export default function Guidelines() {
  return (
    <section className="bg-background py-32">
      <div className="container mx-auto px-6">
        {/* Heading */}

        <Heading
          textColor="blackMuted"
          eyebrow="BEFORE YOU BOOK"
          title="A relaxed experience, from beginning to end."
          description="You don't need to know how to pose or worry about what happens next. We'll guide you when needed, communicate clearly, and make space for the moments that happen naturally."
        />

        {/* Decorative Divider */}

        <div className="my-20 flex items-center justify-center gap-6">
          <div className="h-px w-32 bg-border" />

          <span className="text-lg text-muted-foreground">✦</span>

          <div className="h-px w-32 bg-border" />
        </div>

        {/* Cards */}

        <div className="grid gap-y-0 md:gap-y-16 gap-x-10 md:grid-cols-2 xl:grid-cols-2">
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
