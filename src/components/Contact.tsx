"use client";
import React from "react";

const Contact = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-8 bg-primary shadow-lg border border-4 border-primary rounded-lg text-center">
      <h2 className="text-2xl font-bold text-white mb-4">📲 Contact Us to Get Scheduled!</h2>

      <div className="text-lg space-y-3">
        <p className="text-xl font-semibold text-white">📞 <strong>Miranda:</strong> <a href="tel:+15803403419" className="text-lighter hover:underline">(580) 340-3419</a></p>
        <p className="text-xl font-semibold text-white">📞 <strong>Karen:</strong> <a href="tel:+15805301498" className="text-lighter hover:underline">(580) 530-1498</a></p>
      </div>

      <p className="mt-6 text-xl font-semibold text-light">💬 Text us today! We promise you won’t be disappointed!</p>
      <p className="mt-2 text-sm text-white">📍 Hobart, OK & Surrounding Area</p>
    </section>
  );
};

export default Contact;


