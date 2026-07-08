import { ErrorPage } from "@/components/error-page";

export default function Forbidden() {
  return (
    <ErrorPage
      code={403}
      title="Access denied"
      description="You don't have permission to access this page."
      image="/assets/images/error-403.png"
    />
  );
}
