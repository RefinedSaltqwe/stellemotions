import Image from "next/image";
import Link from "next/link";
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

      <Link
        href={href}
        className="bg-primary text-primary-foreground rounded-md px-4 py-2"
      >
        {buttonText}
      </Link>
    </div>
  );
}
