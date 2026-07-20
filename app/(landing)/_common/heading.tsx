import { cn } from "@/lib/utils";
import React from "react";

const TEXT_COLORS = {
  white: {
    sub: "text-muted",
    main: "text-muted",
  },
  whiteMuted: {
    sub: "text-muted-foreground",
    main: "text-muted",
  },
  black: {
    sub: "text-foreground",
    main: "text-foreground",
  },
  blackMuted: {
    sub: "text-muted-foreground",
    main: "text-foreground",
  },
} as const;

type TextColor = keyof typeof TEXT_COLORS;

type HeadingProps = {
  textColor?: TextColor;
  title: string;
  eyebrow?: string;
  description?: string;
};

const Heading: React.FC<HeadingProps> = ({
  textColor = "black",
  title,
  eyebrow,
  description,
}) => {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow && (
        <p
          className={cn(
            "text-xs font-medium uppercase tracking-[0.35em]",
            TEXT_COLORS[textColor].sub,
          )}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={cn(
          "mt-5 font-serif text-5xl tracking-tight text-foreground lg:text-7xl",
          TEXT_COLORS[textColor].main,
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mx-auto mt-8 max-w-2xl text-lg leading-8 ",
            TEXT_COLORS[textColor].sub,
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
export default Heading;
