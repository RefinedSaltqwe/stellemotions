"use client";
import { Button } from "@/components/ui/button";
import { EnvelopeSimpleIcon } from "@phosphor-icons/react";
import Link from "next/link";
import React from "react";

const PreferEmail: React.FC = () => {
  return (
    <>
      <div className="mt-16 flex flex-col items-center border py-8 text-center border-border/50">
        <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
          Prefer email instead?
        </p>

        <a
          href="mailto:stellemotions@gmail.com"
          className="mt-4 flex items-center gap-2 font-serif text-2xl transition-opacity hover:opacity-70"
        >
          <EnvelopeSimpleIcon size={22} weight="regular" />
          stellemotions@gmail.com
        </a>

        <p className="mt-3 max-w-md text-sm text-muted-foreground">
          {`If you'd rather reach out directly, we're happy to hear from you by
            email. We typically reply within 24–48 hours.`}
        </p>

        <Button asChild variant="outline" className="mt-6">
          <Link href="mailto:stellemotions@gmail.com">Email Us</Link>
        </Button>
      </div>
    </>
  );
};
export default PreferEmail;
