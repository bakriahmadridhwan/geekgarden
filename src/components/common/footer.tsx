import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <div className="py-20">
      <footer className="flex flex-col items-center justify-center gap-4">
        <div className="flex items-center justify-center gap-6">
          <Facebook />
          <Instagram />
          <Twitter />
          <Linkedin />
        </div>
        <p>Copyright &copy; 2020 - All rights reserved</p>
      </footer>
    </div>
  );
}
