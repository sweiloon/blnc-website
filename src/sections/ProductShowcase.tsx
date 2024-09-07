"use client";

import productImage from "@/assets/product-image.png";
import Image from "next/image";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={sectionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip"
    >
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">HiTerra Ai Platform</div>
          </div>

          <h2 className="mt-5 section-title">
            Build, deploy, and operate with Hiterra AI applications
          </h2>
          <p className="mt-5 section-description">
            Hiterra AI Platform provides all necessary software services in one
            integrated suite to rapidly develop, provision, and operate
            Enterprise AI applications.
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="Product Image" className="mt-10" />
          <motion.img
            src={pyramidImage.src}
            alt="Pyramid Image"
            height={252}
            width={252}
            className="hidden md:block absolute -right-32 -top-20"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="Tube Image"
            height={248}
            width={248}
            className="hidden md:block absolute -left-36 bottom-24"
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
