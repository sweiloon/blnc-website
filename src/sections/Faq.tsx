"use client";
/* eslint-disable react/jsx-key */
import PlusIcon from "@/assets/plus.svg";
import React from "react";
import clsx from "clsx";
import MinusLogo from "@/assets/minus.svg";
import { AnimatePresence, motion } from "framer-motion";

const items = [
  {
    question: "What is Hiterra AI?",
    answer:
      "Hiterra AI Platform provides all necessary software services in one integrated suite to rapidly develop, provision, and operate Enterprise AI applications.",
  },
  {
    question: "Where is our locate?",
    answer:
      "We's Located at Unit 6-8-5, Queens Avenue, Jalan Shelley, Maluri, 55100 Cheras, Wilayah Persekutuan Kuala Lumpur",
  },
  {
    question: "What is the Payment method?",
    answer: "Cash, Touch n GO, Stripe, Credit Card, Bank Transfer",
  },
];

const AccordingItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div
      className="py-7 border-b border-black/30"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center">
        <span className="flex-1 text-2xl font-bold">{question}</span>
        {isOpen ? (
          <MinusLogo className="h-5 w-auto" />
        ) : (
          <PlusIcon className="h-5 w-auto" />
        )}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="text-xl"
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: "16px" }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Faq = () => {
  return (
    <div className="py-24 bg-white">
      <div className="container">
        <h2 className="section-title text-5xl mx-auto sm:max-w-[648px] tracking-tighter ">
          Frequently asked Questions
        </h2>
        <div className="mt-12 max-w-[648px] mx-auto">
          {items.map(({ question, answer }) => (
            <AccordingItem question={question} answer={answer} key={question} />
          ))}
        </div>
      </div>
    </div>
  );
};
