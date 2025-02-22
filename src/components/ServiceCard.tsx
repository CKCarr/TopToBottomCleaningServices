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
      className="relative w-full sm:w-[90%] md:w-[80%] lg:w-[300px] 
                 h-[140px] sm:h-[200px] md:h-[220px] lg:h-[250px] 
                 bg-white rounded-lg border-4 border-secondary shadow-lg 
                 flex flex-row sm:flex-col items-center sm:items-center justify-center 
                 overflow-hidden mx-auto my-3"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Service Image */}
      <Image
        src={`${basePath}${imageSrc}`}
        alt={title}
        width={120}
        height={120}
        className="w-[70px] h-[70px] sm:w-[90px] sm:h-[90px] 
                   md:w-[110px] md:h-[110px] lg:w-[130px] lg:h-[130px] 
                   object-contain rounded-md transition-transform duration-500"
      />

      {/* Overlay for Hover Effect */}
      {isHovered && (
        <div className="absolute inset-0 bg-secondary bg-opacity-90 
                        flex flex-col items-start justify-start 
                        text-white p-4 text-left transition-opacity duration-500">
          <p className="text-sm sm:text-md md:text-base">{description}</p>
        </div>
      )}

      {/* Label */}
      <div className="absolute bottom-[-5px] bg-lighter border-2 border-secondary 
                      text-center text-secondary text-md py-1 rounded-xl 
                      w-full shadow-md">
        {title}
      </div>
    </div>
  );
};

export default ServiceCard;
