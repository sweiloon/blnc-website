"use client";

import { Header } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Pricing } from "@/sections/Pricing";
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import { About } from "@/sections/About";
import { Faq } from "@/sections/Faq";

export default function Home() {
  return (
    <>
      <Header />
      <div id="hero"><Hero /></div>
      <div id="logo-ticker"><LogoTicker /></div>
      <div id="product"><ProductShowcase /></div>
      <div id="about"><About /></div>
      <div id="pricing"><Pricing /></div>
      <div id="testimonials"><Testimonials /></div>
      <div id="faq"><Faq /></div>
      <div id="call"><CallToAction /></div>
      <Footer />
    </>
  );
}
