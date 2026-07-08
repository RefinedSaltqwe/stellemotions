import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
type ErrorPageProps = {
  code: number;
  title: string;
  description: string;
  image: string;
  href?: string;
  buttonText?: string;
};

export function ErrorPage({
  code,
  title,
  description,
  image,
  href = "/",
  buttonText = "Back Home",
}: ErrorPageProps) {
  return (
    <div className="bg-background flex h-screen flex-col items-center justify-center gap-4 p-4 text-center">
      <Image src={image} alt={`${code} Error`} width={300} height={300} />

      <h1 className="text-2xl font-bold">
        {code}: {title}
      </h1>

      <p className="text-muted-foreground">{description}</p>

      <Button asChild>
        <Link href={href}>{buttonText}</Link>
      </Button>
    </div>
  );
}
