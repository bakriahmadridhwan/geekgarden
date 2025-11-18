import { Blog8 } from "@/components/common/featured-works";
import { Hero1 } from "@/components/common/hero";
import { Contact7 } from "@/components/common/recent-posts";

export default function Home() {
  return (
    <div>
      <section className="">
        <Hero1 />
      </section>
      <section className="">
        <Contact7 />
      </section>
      <section className="container mx-auto">
        <Blog8 />
      </section>
    </div>
  );
}
