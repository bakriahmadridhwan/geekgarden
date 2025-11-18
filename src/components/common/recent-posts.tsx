import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

interface Contact7Props {
  title?: string;
  description?: string;
  emailLabel?: string;
  emailDescription?: string;
  email?: string;
  officeLabel?: string;
  officeDescription?: string;
  officeAddress?: string;
  phoneLabel?: string;
  phoneDescription?: string;
  phone?: string;
  chatLabel?: string;
  chatDescription?: string;
  chatLink?: string;
}

const Contact7 = ({
  title = "Contact Us",
  description = "Recent Posts",
  emailLabel = "Email",
  emailDescription = "We respond to all emails within 24 hours.",
  email = "example@shadcnblocks.com",
  officeLabel = "Office",
  officeDescription = "Drop by our office for a chat.",
  officeAddress = "1 Eagle St, Brisbane, QLD, 4000",
  phoneLabel = "Phone",
  phoneDescription = "We're available Mon-Fri, 9am-5pm.",
  phone = "+123 456 7890",
  chatLabel = "Live Chat",
  chatDescription = "Get instant help from our support team.",
  chatLink = "Start Chat",
}: Contact7Props) => {
  return (
    <section className="bg-[#EDF7FA] dark:bg-background px-6 xl:px-0 2xl:px-40 lg:py-20 py-12">
      <div className="container mx-auto">
        <div className="mb-14 flex items-center justify-between">
          <p className="text-accent-foreground max-w-xl text-lg">
            {description}
          </p>
          <p className="text-sky-500 hover:underline cursor-pointer">
            View all
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 leading-relaxed">
          <div className="bg-white dark:bg-muted rounded-lg p-6">
            <p className="mb-2 text-2xl font-bold">
              Making a design system from scratch
            </p>
            <br />
            <p className="text-muted-foreground mb-3">
              12 Feb 2020 | Design, Pattern
            </p>
            <br />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
              porro asperiores modi corporis. Eligendi, est.
            </p>
          </div>
          <div className="bg-white dark:bg-muted rounded-lg p-6">
            <p className="mb-2 text-2xl font-bold">
              Creating pixel perfect icons in Figma
            </p>
            <br />
            <p className="text-muted-foreground mb-3">
              12 Feb 2020 | Figma, Icon Design
            </p>
            <br />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
              porro asperiores modi corporis. Eligendi, est.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact7 };
