/* eslint-disable react/jsx-key */
"use client";

import CheckIcon from "@/assets/check.svg";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 3 Habitat Create",
      "Unlimited tasks and projects",
      "General AI Feature",
      "3 Product Listing",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 299,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Unlimited Habitat Create",
      "Common Practice Analysis",
      "Unlimited tasks and projects",
      "Adcanved AI Feature ",
      "30 Product Listing",
      "Workflow Dashboard",
      "API Integrations",
      "Budgeting Analysis",
      "Advanced support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 1899,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Unlimited Habitat Create",
      "Unlimited tasks and projects",
      "Advanced Common Practice Analysis",
      "Expertize AI Feature ",
      "Unlimited Product Listing",
      "Workflow Dashboard",
      "API Integrations",
      "Budgeting Analysis",
      "Advanced support",
      "Advanced analytics",
      "Export capabilities",
      "Market Report",
      "Agent Control Panel",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        <div className="section-heading">
          <h2 className="section-title ">Pricing</h2>
          <p className="section-description mt-5">
            Free Forever. Upgrade for unlimited ai functions, better security,
            and exclusive features.
          </p>
        </div>
        <div className="flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-start lg:justify-normal">
          {pricingTiers.map(
            ({
              title,
              monthlyPrice,
              buttonText,
              popular,
              inverse,
              features,
            }) => (
              <div
                className={twMerge(
                  "card",
                  inverse === true && "border-black bg-black text-white"
                )}
              >
                <div className="flex justify-between">
                  <h3
                    className={twMerge(
                      "text-lg font-bold text-black/50",
                      inverse === true && "text-white/60"
                    )}
                  >
                    {title}
                  </h3>
                  {popular === true && (
                    <div className="inline-flex text-[15px] px-4 py-1.5 rounded-xl border border-white/20">
                      <motion.span
                        animate={{
                          backgroundPositionX: "100%",
                        }}
                        transition={{
                          repeat: Infinity,
                          ease: "linear",
                          repeatType: "loop",
                          duration: 1,
                        }}
                        className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium"
                      >
                        Popular
                      </motion.span>
                    </div>
                  )}
                </div>
                <div className="flex items-baseline gap-1 mt-[30px]">
                  <span className="text-4xl font-bold tracking-tighter leading-none">
                    RM{monthlyPrice}
                  </span>
                  <span
                    className={twMerge(
                      "tracking-tight font-bold text-black/50",
                      inverse === true && "text-white"
                    )}
                  >
                    /month
                  </span>
                </div>

                <button
                  className={twMerge(
                    "btn btn-primary w-full mt-[30px]",
                    inverse === true && "bg-white text-black"
                  )}
                >
                  {buttonText}
                </button>
                <ul className="flex flex-col gap-5 mt-8">
                  {features.map((features) => (
                    <li className="text-[16px] flex items-center gap-4">
                      <CheckIcon className="h-6 w-6" />
                      <span>{features}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};
