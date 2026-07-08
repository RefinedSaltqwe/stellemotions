import { ErrorPage } from "@/components/error-page";

export default function Unauthorized() {
  return (
    <ErrorPage
      code={401}
      title="Unauthorized"
      description="Please sign in to continue."
      image="/assets/images/error-401.png"
      href="/login"
      buttonText="Login"
    />
  );
}
