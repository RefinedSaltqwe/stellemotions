import { site } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Socials: React.FC = () => {
  return (
    <>
      {site.socials.map((item, index) => (
        <Link
          key={item.name}
          href={item.link}
          className={cn(
            `px-4 uppercase text-sm hover:text-primary-foreground/80`,
            index !== 0 ? "border-l border-white/50" : "",
          )}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
};
export default Socials;
