import { ArrowRight, ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Hero1Props {
  badge?: string;
  heading?: string;
  heading2?: string;
  description?: string;
  buttons?: {
    primary?: {
      text: string;
      url: string;
    };
    secondary?: {
      text: string;
      url: string;
    };
  };
  image?: {
    src: string;
    alt: string;
  };
}

const Hero1 = ({
  badge = "✨ Your Website Builder",
  heading = "Hi, I am John,",
  heading2 = "Creative Technologist",
  description = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci impedit a ab numquam deserunt sint rerum ad odio repellat repellendus necessitatibus, laborum, dignissimos modi assumenda.",
  buttons = {
    primary: {
      text: "Download Resume",
      url: "",
    },
    secondary: {
      text: "View on GitHub",
      url: "",
    },
  },
  image = {
    src: "/profile.jpg",
    alt: "Hero section demo image showing interface components",
  },
}: Hero1Props) => {
  return (
    <section className="lg:py-20 py-12 px-6 xl:px-0 2xl:px-40 container mx-auto">
      <div className="container">
        <div className="grid items-center justify-items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left order-2 lg:order-1">
            <h1 className="my-6 text-pretty text-3xl font-bold lg:text-5xl leading-tight">
              {heading}
              <br />
              {heading2}
            </h1>
            <p className="text-muted-foreground mb-8 max-w-xl lg:text-xl">
              {description}
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              {buttons.primary && (
                <Button
                  asChild
                  className="w-full sm:w-auto bg-red-400 rounded-none"
                >
                  <a href={buttons.primary.url} className="hover:bg-red-500">
                    {buttons.primary.text}
                  </a>
                </Button>
              )}
            </div>
          </div>
          <Image
            src={image.src}
            alt={image.alt}
            width={500}
            height={500}
            className="w-[300px] rounded-full object-cover lg:justify-self-end justify-self-center order-1 lg:order-2"
          />
        </div>
      </div>
    </section>
  );
};

export { Hero1 };
