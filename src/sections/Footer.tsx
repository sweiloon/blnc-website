import logo2 from "@/assets/logosaas2.png";
import Image from "next/image";
import SocialX from "@/assets/social-x.svg";
import SocialInsta from "@/assets/social-insta.svg";
import SocialLinkedIn from "@/assets/social-linkedin.svg";
import SocialPin from "@/assets/social-pin.svg";
import SocialYoutube from "@/assets/social-youtube.svg";

export const Footer = () => {
  return (
    <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center">
      <div className="container">
        <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
          <Image src={logo2} height={45} alt="Saas Logo" className="relative" />
        </div>
        <nav className="flex flex-col md:flex-row md: justify-center gap-6 mt-6 text-lg">

          <a href="#hero">About</a>
          <a href="#product">Features</a>
          <a href="#testimonials">Customers</a>
          <a href="#pricing">Pricing</a>
          <a href="#faq">Help</a>
          <a href="#call">Careers</a>
        </nav>
        <div className="flex justify-center gap-6 mt-6">
          <SocialX />
          <SocialInsta />
          <SocialLinkedIn />
          <SocialPin />
          <SocialYoutube />
        </div>
        <p className="mt-6">
          & copy; 2024 Blnc Tech, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
