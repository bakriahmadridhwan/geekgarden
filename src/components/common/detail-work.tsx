"use client";

import { useParams } from "next/navigation";
import Image from "next/image"; // Tambahkan jika diperlukan untuk gambar
import { Badge } from "../ui/badge";

interface Post {
  id: string;
  title: string;
  summary: string;
  label: string;
  author: string;
  published: string;
  url: string;
  image: string;
  slug: string;
  tags?: string[];
}

// Contoh data posts (bisa diganti dengan fetch dari API atau CMS)
const posts: Post[] = [
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
    slug: "designing-dashboards",
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
    slug: "vibrant-portraits-2020",
    tags: ["Web Design", "CSS"],
  },
  // Tambahkan posts lainnya jika diperlukan
];

const WorkDetail = () => {
  const params = useParams();
  const slug = params.slug as string;

  // Cari post berdasarkan slug
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <section className="pb-32">
        <div className="py-16">
          <div className="container">
            <div className="mx-auto max-w-3xl space-y-8 text-left">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Work Not Found
              </h2>
              <p className="text-muted-foreground text-xl leading-relaxed">
                The requested work could not be found.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pb-32 container mx-auto px-6">
      {/* Intro Section */}
      <div className="py-16">
        <div className="container">
          <div className="mx-auto max-w-3xl space-y-8 text-left">
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              {post.title}
            </h2>
            <div className="flex py-4 gap-4">
              <Badge>{post.published}</Badge>
              <p>{post.label}</p>
            </div>
            <p className="text-muted-foreground text-xl leading-relaxed">
              {post.summary}
            </p>
            <div className="space-y-4">
              <div className="aspect-video border-border overflow-clip rounded-lg border">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={500}
                  height={500}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { WorkDetail };
