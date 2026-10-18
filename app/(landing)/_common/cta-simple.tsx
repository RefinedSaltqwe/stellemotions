import { Button } from "@/components/ui/button";
import Link from "next/link";
import { TEXT_COLORS } from "./heading";
import { cn } from "@/lib/utils";

type CTASimpleSectionProps = {
  eyebrow?: string;
  title?: string;
  buttonText?: string;
  buttonHref?: string;
  description?: string;
};

export default function CTASimpleSection({
  eyebrow = "Sound like a dream come true to you?",
  title = "LET US CAPTURE YOUR OWN EVERLASTING MEMORIES",
  buttonText = "INQUIRE",
  buttonHref = "/inquire",
  description,
}: CTASimpleSectionProps) {
  return (
    <div className="mx-auto flex min-h-[60vh] md:min-h-[80vh] max-w-7xl flex-col items-center justify-center px-6 py-32 text-center">
      <p className="text-xs font-medium uppercase tracking-[0.35em] text-muted-foreground">
        {eyebrow}
      </p>

      <h2 className="mt-5 font-serif text-5xl tracking-tight text-foreground lg:text-7xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mx-auto mt-8 max-w-2xl text-lg leading-8 ",
            TEXT_COLORS["blackMuted"].sub,
          )}
        >
          {description}
        </p>
      )}

      <Button asChild className="mt-14">
        <Link href={buttonHref}>{buttonText}</Link>
      </Button>
    </div>
  );
}
