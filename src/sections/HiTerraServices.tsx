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
    <div className="py-20 w-full bg-white px-4 sm:px-6 lg:px-8"> 
        <div className="section-title">
            Free Trial for Hiterra
        </div>

        <div className="flex justify-center mt-10">
            <a href="/demo" className="btn btn-primary">Try it Now!</a>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {services.map((card) => (
          <div key={card.id} className="flex justify-center">
            <Button
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius="1.75rem"
              style={{
                  background: "rgb(4,7,29)",
                  // backgroundImage: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
                  borderRadius: `calc(1.75rem * 0.96)`,
                  width: '100%',
                  maxWidth: '500px', 
              }}
              className="text-white border-neutral-200 bg-transparent"
            >
              <div className="flex flex-col h-full p-6">
                  <div className="h-20 flex items-center mb-4">
                      <h1 className="text-xl md:text-2xl font-bold leading-tight">
                          {card.title}
                      </h1>
                  </div>
                  <div className="flex-grow overflow-hidden">
                      <p className="text-white text-sm md:text-base leading-relaxed" style={{
                          textAlign: 'justify',
                      }}>
                          {card.desc}
                      </p>
                    </div>
              </div>
          </Button>
        </div>
        ))}
      </div>
    </div>
  );
};

export default HiTerraServices;
