import { IconProps } from "@phosphor-icons/react";
import { ComponentType } from "react";

type GuidelineCardProps = {
  title: string;
  description: string;
  icon: ComponentType<IconProps>;
  isLast?: boolean;
};

export default function GuidelineCard({
  title,
  description,
  icon: Icon,
  isLast,
}: GuidelineCardProps) {
  return (
    <article className="relative flex flex-col items-center text-center px-8 py-10">
      {/* Vertical Divider */}
      {!isLast && (
        <div className="absolute right-0 top-1/2 hidden h-32 -translate-y-1/2 border-r border-border lg:block" />
      )}

      {/* Icon */}
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-border">
        <Icon size={28} weight="light" className="text-foreground" />
      </div>

      {/* Title */}
      <h3 className="font-serif text-xl tracking-wide text-foreground">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-4 max-w-xs text-sm leading-7 text-muted-foreground">
        {description}
      </p>
    </article>
  );
}
