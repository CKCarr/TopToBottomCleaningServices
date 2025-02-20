"use client";
import React from "react";
import Image from "next/image";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  return (
    <section id="services" className="max-w-6xl mx-auto px-6 py-12">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-10">
        <Image
          src="/images/T2B-illustrations/servicesCleaners.png"
          alt="Cleaning Services"
          width={800}
          height={600}
          className="lg:w-1/2 rounded-lg"
        />
        <div className="lg:w-3/4 bg-secondary p-8 rounded-lg shadow-md text-center">
          <h3 className="text-3xl font-semibold text-white">Cleaning Services We Offer</h3>
          <p className="text-light mt-3 text-lg">Build a custom package to meet your needs!</p>
          <p className="text-center text-xl text-lighter mt-8 font-semibold">
        ✨ We bring our own cleaning supplies and mop! A vacuum can be provided upon request.
      </p>
        </div>
      </div>

      {/* Service Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
        {/* Standard Services */}
        <ServiceCard imageSrc="/images/T2B-illustrations/vacuum.png" title="Vacuuming & Floor Care" description="Sweeping, mopping, and vacuuming (furniture moved if needed)." />
        <ServiceCard imageSrc="/images/T2B-illustrations/dusting.png" title="Dusting" description="Includes furniture, wall decor, and light fixtures." />
        <ServiceCard imageSrc="/images/T2B-illustrations/bathroom.png" title="Bathroom Cleaning" description="Scrubbing sinks, toilets, tubs, and showers." />
        <ServiceCard imageSrc="/images/T2B-illustrations/kitchen.png" title="Kitchen Cleaning" description="Wiping countertops, sinks, and cabinet exteriors." />
        <ServiceCard imageSrc="/images/T2B-illustrations/appliances.png" title="Cleaning Exterior Appliances" description="Fridges, ovens, dishwashers, and more." />
        <ServiceCard imageSrc="/images/T2B-illustrations/microwave.png" title="Microwave Cleaning" description="Interior & exterior cleaned at each visit." />
        <ServiceCard imageSrc="/images/T2B-illustrations/walls.png" title="Baseboard & Wall Cleaning" description="Removes dust and grime from baseboards, doors, and trim." />
        <ServiceCard imageSrc="/images/T2B-illustrations/windowClean.png" title="Window Cleaning" description="Interior & exterior cleaning (depending on accessibility)." />
        <ServiceCard imageSrc="/images/T2B-illustrations/organizing.png" title="Tidying & Organizing" description="Decluttering closets, cabinets, and pantries." />

        {/* Specialty Services */}
        <ServiceCard imageSrc="/images/T2B-illustrations/laundry.png" title="Laundry Service" description="Available upon request for an additional fee." />
        <ServiceCard imageSrc="/images/T2B-illustrations/fridge.png" title="Refrigerator Cleaning" description="Interior cleaning (must be empty unless prior notice is given)." />
        <ServiceCard imageSrc="/images/T2B-illustrations/moveout.png" title="Move-In/Move-Out Cleaning" description="Deep cleaning for new homes and apartments." />
      </div>

      {/* Footer */}

    </section>
  );
}
