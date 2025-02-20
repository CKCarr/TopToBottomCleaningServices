"use client";
import React from "react";

const Schedule = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-8 bg-white shadow-md rounded-lg text-center border border-light ">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-lighter pb-2">🗓️ Scheduling & Availability</h2>

      <div className="text-lg text-primary space-y-3 text-left md:pl-20">
        <p>✅ <strong>Mondays & Saturdays</strong> – The best days to book! We’re usually available <strong>anytime</strong> these days.</p>
        <p>✅ <strong>Tuesday – Friday</strong> – We take appointments <strong>after 5:00 PM</strong>.</p>
        <p>✅ <strong>Sundays</strong> – We don’t mind cleaning <strong>after church</strong> if needed!</p>
      </div>

      <p className="mt-4 text-lg font-semibold text-secondary">📅 Summer Schedule – Mondays & Saturdays are our most open days!</p>

      <div className="mt-6">
        <p className="text-xl font-bold text-gray-900">📲 Text us anytime – We always respond promptly!</p>
        <p className="text-lg text-gray-700">✨ Your mess is our mess—we clean it up for you!</p>
        <p className="mt-2 text-lg font-semibold text-primary">👉 Don’t have time to clean? No worries—we sweep while you sleep (or shop)!</p>
      </div>

      <p className="mt-6 text-lg font-semibold text-gray-900">We can’t wait to help you refresh your home! 🚀💛</p>
    </section>
  );
};

export default Schedule;

