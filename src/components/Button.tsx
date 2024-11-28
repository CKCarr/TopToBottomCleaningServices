"use client"; // Required for Material Tailwind

import { Button as MTButton } from "@material-tailwind/react";

interface CustomButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ label, onClick, className }: CustomButtonProps) {
  return (
    <MTButton
      className={`bg-primary text-white w-4xl p-3  ${className}`}
      onClick={onClick}
    >
      {label}
    </MTButton>
  );
}
