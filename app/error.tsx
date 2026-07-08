"use client";

import { ErrorPage } from "@/components/error-page";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <ErrorPage
      code={500}
      title="Something went wrong"
      description="An unexpected error occurred."
      image="/assets/images/error-500.png"
    />
  );
}
