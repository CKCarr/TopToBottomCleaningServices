"use client";
import React from "react";

const WhatWeDo = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-8 bg-white shadow-md rounded-lg  border border-light text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-lighter pb-2">❓ What All Do You Do?</h2>
      <p className="text-lg text-primary mb-6">
        The short answer? <strong>Everything!</strong> If there’s something you’ve been wanting to do but need help with, we can help you get it done!
      </p>

      <div className="text-lg text-primary text-left md:pl-20 space-y-3">
        <p>✔ <strong>Need to organize a closet, cabinet, or pantry?</strong> We can do that.</p>
        <p>✔ <strong>Behind on laundry because your kids change clothes 6 times a day?</strong> We can do that.</p>
        <p>✔ <strong>Just moved in and need help hanging things or getting settled?</strong> We can do that.</p>
      </div>

      <p className="mt-6 text-lg font-semibold text-secondary">
        Our <strong>Top To Bottom Cleaning Service</strong> is customized to fit your needs – whether it's a regular clean or a one-time deep clean, it's all up to you!
      </p>

      <p className="mt-4 text-lg text-gray-900 font-bold">
        If it’s been on your mind, reach out! We’ve probably done it before.
      </p>
    </section>
  );
};

export default WhatWeDo;