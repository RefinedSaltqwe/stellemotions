import { ErrorPage } from "@/components/error-page";

export default function NotFound() {
  return (
    <ErrorPage
      code={404}
      title="Page not found"
      description="The page you are looking for doesn't exist."
      image="/assets/images/error-404.png"
    />
  );
}
