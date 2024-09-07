"use client";

import acmeLogo from "@/assets/logo-acme.png";
import quantumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import nestleLogo from "@/assets/nestlelogo.png";
import jatiLogo from "@/assets/jatilogo.png";
import bestLogo from "@/assets/bestlogo.002.png";
import huaweiLogo from "@/assets/huaweilogo.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              src={huaweiLogo}
              alt="Huawei Logo"
              className="logo-ticker-image"
            />
            <Image
              src={bestLogo}
              alt="Best Logo"
              className="logo-ticker-image"
            />
            <Image
              src={jatiLogo}
              alt="Jati Logo"
              className="logo-ticker-image"
            />
            <Image
              src={nestleLogo}
              alt="Nestle Logo"
              className="logo-ticker-image"
            />
            <Image
              src={apexLogo}
              alt="Apex Logo"
              className="logo-ticker-image"
            />
            <Image
              src={pulseLogo}
              alt="Pulse Logo"
              className="logo-ticker-image"
            />
            <Image
              src={celestialLogo}
              alt="Celestial Logo"
              className="logo-ticker-image"
            />
            <Image
              src={echoLogo}
              alt="Echo Loggo"
              className="logo-ticker-image"
            />
            <Image
              src={quantumLogo}
              alt="Quantum Logo"
              className="logo-ticker-image"
            />
            <Image
              src={acmeLogo}
              alt="Acme Logo"
              className="logo-ticker-image"
            />

            {/*second set*/}

            <Image
              src={huaweiLogo}
              alt="Huawei Logo"
              className="logo-ticker-image"
            />
            <Image
              src={bestLogo}
              alt="Best Logo"
              className="logo-ticker-image"
            />
            <Image
              src={jatiLogo}
              alt="Jati Logo"
              className="logo-ticker-image"
            />
            <Image
              src={nestleLogo}
              alt="Nestle Logo"
              className="logo-ticker-image"
            />
            <Image
              src={apexLogo}
              alt="Apex Logo"
              className="logo-ticker-image"
            />
            <Image
              src={pulseLogo}
              alt="Pulse Logo"
              className="logo-ticker-image"
            />
            <Image
              src={celestialLogo}
              alt="Celestial Logo"
              className="logo-ticker-image"
            />
            <Image
              src={echoLogo}
              alt="Echo Loggo"
              className="logo-ticker-image"
            />
            <Image
              src={quantumLogo}
              alt="Quantum Logo"
              className="logo-ticker-image"
            />
            <Image
              src={acmeLogo}
              alt="Acme Logo"
              className="logo-ticker-image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
