import React from "react";

import { Button } from "@/components/MovingBorder";

const HiTerraServices = () => {
    const services = [
    {
        id: 1,
        title: "HiTerra AI Platform :",
        desc: "One Platform for all. Data Science, IT, and Business teams can work together seamlessly on one powerful platform to deliver the full power of enterprise AI",
        className: "md:col-span-2",
    },
    {
        id: 2,
        title: "HiTerra Software Development :",
        desc: "Build custom Mobile Application, Website, AI Integrate System and Software System for different industry",
        className: "md:col-span-2", 
    },
    {
        id: 3,
        title: "HiTerra Generative AI :",
        desc: "Hiterra Generative AI help users retrieve data, analyse information, surface insights, and orchestrate agents to take action using a natural language interface",
        className: "md:col-span-2",
    },
    {
        id: 4,
        title: "HiTerra Copilot:",
        desc: "HiTerra Copilot utilizes conversational AI to provide support for enterprise across different channels, system and knowledge repository",
        className: "md:col-span-2",
    },
    ];
  return (
    <div className="py-20 w-full bg-white">
      <div className="flex justify-center">
        <a href="/demo" className="btn btn-primary">Free Trial for HiTerra</a>
      </div>

      <div className="mt-12 grid lg:grid-cols-4 grid-cols-1 gap-8">
        {services.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem* 0.96)`,
              maxWidth: '600px', // Adjust this value as needed
              margin: '0 auto', // Centers the button in its grid cell
            }}
            // remove bg-white dark:bg-slate-900
            className="text-white border-neutral-200 bg-transparent"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <div className="lg:ms-5">
                <h1 className="text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-white mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default HiTerraServices;
