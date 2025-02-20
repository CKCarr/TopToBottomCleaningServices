"use client";
import React, { useState } from "react";
import Schedule from "@/components/Schedule";
import Contact from "@/components/Contact";
import WhatWeDo from "@/components/WhatWeDo";
import WhyChooseUs from "@/components/WhyChooseUs";
import Pricing from "@/components/Pricing";
import DeepClean from "../components/DeepClean";

const tabs = [
  { label: "What We Do", component: <WhatWeDo /> },
  { label: "Why Choose Us", component: <WhyChooseUs /> },
  { label: "Deep Clean", component: <DeepClean /> },
  { label: "Schedule", component: <Schedule /> },
  { label: "Pricing", component: <Pricing /> },
];

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleNext = () => {
    setActiveTab((prev) => (prev === tabs.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveTab((prev) => (prev === 0 ? tabs.length - 1 : prev - 1));
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-4">
      {/* Mobile Navbar (Small Screens) */}
      <div className="md:hidden flex items-center justify-between bg-white shadow-md py-2 px-4 rounded-lg">
        <button onClick={handlePrev} className="text-2xl text-secondary">
          {"<"}
        </button>
        <h2 className="text-lg font-bold text-primary">{tabs[activeTab].label}</h2>
        <button onClick={handleNext} className="text-2xl text-secondary">
          {">"}
        </button>
      </div>

      {/* Desktop Tabs (Medium+ Screens) */}
      <div className="hidden md:flex overflow-x-auto gap-4 pb-4 border-b border-light">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`ml-8 px-8 py-2 text-lg font-semibold transition hover:bg-light ${
              activeTab === index
                ? "border-b-4 border-secondary text-secondary bg-lighter"
                : "text-primary"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      <div className="mt-6">{tabs[activeTab].component}</div>
    </section>
  );
};

export default TabComponent;