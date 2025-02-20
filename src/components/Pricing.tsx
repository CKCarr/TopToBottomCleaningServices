"use client";
import React from "react";

const Pricing = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-8 bg-white shadow-md rounded-lg text-center border border-light ">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-lighter pb-2">💰 Pricing: Affordable & Transparent</h2>

      <p className="text-lg text-gray-700 mb-4">
        We always hear from our customers that we are <strong>affordable</strong>—and we plan to keep it that way!
      </p>

      <div className="text-lg text-primary space-y-3">
        <p>💲 <strong>Deep Cleans Start at $150</strong> – Pricing depends on the size of the home & what’s needed.</p>
        <p>💲 <strong>Maintenance Cleans Cost Less!</strong> – Once we’ve done a deep clean, we can keep you caught up at a lower rate.</p>
      </div>

      <p className="mt-6 text-lg font-semibold text-secondary">📅 Weekends & Evenings Available!</p>
    </section>
  );
};

export default Pricing;
