"use client";

import { site } from "@/constants";
import { LockIcon, RowsIcon } from "@phosphor-icons/react";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 self-center font-medium"
        >
          <div className="flex size-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <RowsIcon className="size-4" />
          </div>
          {site.name}
        </Link>
        {/* <SignupForm /> */}
        <div className="flex flex-row items-center align-middle gap-4">
          <LockIcon />
          <h1>Locked</h1>
        </div>
        <a href="/scapbelle/login">Go back</a>
      </div>
    </div>
  );
}
