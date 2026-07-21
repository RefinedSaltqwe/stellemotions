"use client";
import { Button } from "@/components/ui/button";
import { site } from "@/constants";
import Link from "next/link";
import React from "react";

const PreferEmail: React.FC = () => {
  return (
    <>
      <div className="flex flex-col items-center border py-8 px-4 text-center border-border/50">
        <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          Prefer email instead?
        </p>

        <a
          href={`mailto:${site.email}`}
          className="mt-4 flex items-center gap-2 font-serif text-2xl transition-opacity hover:opacity-70"
        >
          {site.email}
        </a>

        <p className="mt-3 max-w-md text-sm text-muted-foreground">
          {`If you'd rather reach out directly, we're happy to hear from you by
            email. We typically reply within 1-2 business days.`}
        </p>

        <Button asChild variant="outline" className="mt-6">
          <Link href={`mailto:${site.email}`}>Email Us</Link>
        </Button>
      </div>
    </>
  );
};
export default PreferEmail;
