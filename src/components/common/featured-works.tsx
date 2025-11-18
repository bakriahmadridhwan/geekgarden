import { ArrowRight } from "lucide-react";
import Link from "next/link"; // Tambahkan import Link untuk navigasi Next.js

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
  slug: string; // Tambahkan slug ke interface
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
      label: "Dashboard",
      author: "Sarah Chen",
      published: "2020",
      url: "",
      image: "/profile.jpg",
      slug: "designing-dashboards", // Tambahkan slug
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
      slug: "vibrant-portraits-2020", // Tambahkan slug
      tags: ["Web Design", "CSS"],
    },
  ],
}: Blog8Props) => {
  return (
    <section className="px-6 xl:px-0 2xl:px-40 lg:py-20 container mx-auto">
      <div className="container flex flex-col gap-16">
        <p className="text-3xl max-w-xl font-bold">Work</p>
        <div className="grid">
          {posts.map((post) => (
            <Card
              key={post.id}
              className="order-last border-0 bg-transparent shadow-none sm:order-first sm:col-span-12 lg:col-span-10 lg:col-start-2"
            >
              <div className="grid gap-y-6 sm:grid-cols-10 sm:gap-x-5 sm:gap-y-0 md:items-start md:gap-x-8 lg:gap-x-12">
                <div className="order-first sm:order-first sm:col-span-3">
                  <Link href={`/work/${post.slug}`} className="block">
                    {" "}
                    {/* Ubah ke Link dengan slug */}
                    <div className="aspect-video border-border overflow-clip rounded-lg border">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={500}
                        height={500}
                        className="fade-in h-full w-full object-cover transition-opacity duration-200 hover:opacity-70"
                      />
                    </div>
                  </Link>
                </div>
                <div className="order-last sm:order-last sm:col-span-7">
                  <h3 className="text-xl font-semibold md:text-2xl lg:text-3xl">
                    <Link
                      href={`/work/${post.slug}`} // Ubah ke Link dengan slug
                      className="hover:underline"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <div className="flex py-4 gap-4">
                    <Badge>{post.published}</Badge>
                    <p>{post.label}</p>
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
