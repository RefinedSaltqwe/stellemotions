"use client";
import {
  AirplaneTiltIcon,
  CalendarDotsIcon,
  CreditCardIcon,
  FileTextIcon,
  GiftIcon,
  UsersThreeIcon,
} from "@phosphor-icons/react";
import GuidelineCard from "./card";

export const guidelines = [
  {
    title: "Booking",
    description:
      "A signed agreement and a 30% non-refundable retainer are required to officially reserve your date.",
    icon: FileTextIcon,
  },

  {
    title: "Final Payment",
    description:
      "The remaining balance is due 1 week before your wedding or portrait session.",
    icon: CalendarDotsIcon,
  },

  {
    title: "Pricing",
    description:
      "All collections are priced in Canadian Dollars (CAD) and are subject to applicable taxes.",
    icon: CreditCardIcon,
  },

  {
    title: "Travel",
    description:
      "Based in Regina, Saskatchewan, we're available for travel throughout Canada and beyond. Travel or accommodation fees may apply depending on the location.",
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

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">
            BEFORE YOU BOOK
          </p>

          <h2 className="mt-5 font-serif text-5xl tracking-tight text-foreground lg:text-7xl">
            Everything You Need To Know
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
            We believe every great experience begins with clear communication.
            Here are a few important details to help you feel confident before
            booking your session or wedding.
          </p>
        </div>

        {/* Decorative Divider */}

        <div className="my-20 flex items-center justify-center gap-6">
          <div className="h-px w-32 bg-border" />

          <span className="text-lg text-muted-foreground">✦</span>

          <div className="h-px w-32 bg-border" />
        </div>

        {/* Cards */}

        <div className="grid gap-y-0 md:gap-y-16 gap-x-10 md:grid-cols-2 xl:grid-cols-3">
          {guidelines.map((item, index) => (
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
