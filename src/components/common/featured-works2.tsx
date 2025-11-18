import { ArrowRight } from "lucide-react";

import { Card } from "@/components/ui/card";
import { Badge } from "../ui/badge";
import Image from "next/image";
import { Separator } from "../ui/separator";

interface Post {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
  tags?: string[];
}

interface Blog8Props {
  heading?: string;
  description?: string;
  posts?: Post[];
}

const Blog8 = ({
  heading = "Blog Posts",
  description = "Discover the latest insights and tutorials about modern web development, UI design, and component-driven architecture.",
  posts = [
    {
      id: "post-1",
      title: "Designing Dashboards",
      summary:
        "Join us for an in-depth exploration of building modern user interfaces using Tailwind CSS and React. Learn best practices and advanced techniques.",
      label: "Express, Handlebars",
      author: "Sarah Chen",
      published: "13 Feb 2019",
      url: "",
      image: "/profile.jpg",
      tags: ["Web Design", "UI Development"],
    },
    {
      id: "post-2",
      title: "Vibrant Portraits of 2020",
      summary:
        "Discover how to leverage the full power of Tailwind CSS to create beautiful, responsive websites with clean and maintainable code.",
      label: "Web Design",
      author: "Michael Park",
      published: "2020",
      url: "",
      image: "/profile.jpg",
      tags: ["Web Design", "CSS"],
    },
  ],
}: Blog8Props) => {
  return (
    <section className="px-6 xl:px-0 2xl:px-40 lg:py-20 container mx-auto">
      <div className="container flex flex-col gap-16">
        <p className="text-3xl max-w-xl font-bold">Blog</p>
        <div className="grid">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="order-last border-0 bg-transparent shadow-none sm:order-first sm:col-span-12 lg:col-span-10 lg:col-start-2"
            >
              <div className="grid gap-y-6 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-start md:gap-x-8 lg:gap-x-12">
                <div className="order-last sm:order-last sm:col-span-7">
                  <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl">
                    <a
                      href={post.url}
                      target="_blank"
                      className="hover:underline"
                    >
                      {post.title}
                    </a>
                  </h3>
                  <div className="flex py-4 gap-4">
                    <p>{post.published} | </p>
                    <p className="text-muted-foreground">{post.label}</p>
                  </div>
                  <p className="text-muted-foreground mt-4 md:mt-5">
                    {post.summary}
                  </p>
                </div>
              </div>
              <Separator />
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export { Blog8 };
