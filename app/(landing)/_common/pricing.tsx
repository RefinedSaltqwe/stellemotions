import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type PricingProps = {
  title: string;
  description: string;
  list: string;
  position: string;
  imagePosition?: string;
  spacing?: string;
  image?: string;
  price: string;
};

const Pricing: React.FC<PricingProps> = ({
  title,
  description,
  list,
  position = "flex-col-reverse md:flex-row",
  spacing = "md:py-0",
  image = "/assets/images/stellemotions-hero.jpg",
  price,
  imagePosition = "-translate-y-36 md:-translate-y-20",
}) => {
  return (
    <section
      className={cn(
        "bg-secondary flex justify-center text-secondary-foreground pb-0 pt-20 px-8",
        spacing,
      )}
    >
      <div
        className={cn("flex items-center justify-between max-w-7xl", position)}
      >
        <div className="w-full flex flex-col md:pr-10 gap-8 -translate-y-20 md:translate-0">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-light font-serif tracking-tight uppercase">
            {title}
          </h1>
          <p className="text-md tracking-wider font-light leading-6">
            {description}
          </p>
          <ul className="list-disc pl-5 marker:text-primary marker:text-sm">
            {list?.split(",").map((item, index) => (
              <li key={index} className="tracking-wide font-light leading-7">
                {item.trim()}
              </li>
            ))}
          </ul>
          <span className="text-xs">Starting at ${price}</span>
          <div className="gap-4">
            <Button variant="default">Inquire Now</Button>
          </div>
        </div>
        <div className="w-full align-middle justify-center flex">
          <Image
            src={image}
            alt=""
            width={400}
            height={800}
            loading="lazy"
            className={cn("object-cover", imagePosition)}
          />
        </div>
      </div>
    </section>
  );
};
export default Pricing;
