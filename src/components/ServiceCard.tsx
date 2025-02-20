"use client";
import React, { useState } from "react";
import Image from "next/image";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

interface ServiceCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ imageSrc, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative w-[220px] h-[220px] md:w-[250px] md:h-[250px] bg-white rounded-lg border-4 border-secondary shadow-lg flex flex-col items-center justify-center overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Service Image */}
      <Image
        src={`${basePath}${imageSrc}`}
        alt={title}
        width={150}
        height={100}
        className={`w-full h-3/4 object-cover rounded-md transition-transform duration-500 ${isHovered ? "scale-110 blur-sm" : ""}`}
      />

      {/* Overlay for Hover Effect */}
      {isHovered && (
        <div className="absolute inset-0 bg-secondary bg-opacity-90 flex items-center justify-center text-white p-4 text-center transition-opacity duration-500">
          <p className="text-lg">{description}</p>
        </div>
      )}

      {/* Label */}
      <div className="absolute bottom-[-15px] left-1/2 transform -translate-x-1/2 bg-lighter border-2 border-secondary text-center font- text-secondary text-lg py-4 rounded-xl w-full shadow-md z-10">
        {title}
      </div>
    </div>
  );
};

export default ServiceCard;
