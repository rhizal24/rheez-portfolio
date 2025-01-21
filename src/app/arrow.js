"use client";
import React, { useEffect, useState } from "react";
// import { useEffect, useState } from "react";

export default function Arrow({ overlap = 0 }) {
  const [activeIndex, setActiveIndex] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev - 1 >= 0 ? prev - 1 : 3));
    }, 300);

    return () => clearInterval(interval);
  }, []);

  const getOpacity = (index) => {
    // Membuat range opacity dari 0.2 sampai 1 berdasarkan jarak dari activeIndex
    const distance = Math.abs(index - activeIndex);
    return 1 - distance * 0.25; // Akan memberikan opacity 1, 0.75, 0.5, 0.25
  };

  return (
    <div className="flex">
      {[0, 1, 2, 3].map((index) => (
        <div
          key={index}
          style={{
            opacity: getOpacity(index),
            marginLeft: index === 0 ? "0px" : `${-overlap}px`,
          }}
          className="transition-opacity duration-300 ease-in-out"
        >
          <svg
            width="30"
            height="37"
            viewBox="0 0 22 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M21.5 0L0.5 14.5L21.5 29V23.3871L8.62903 14.5L21.5 5.6129V0Z"
              fill="#3FA2F6"
            />
          </svg>
        </div>
      ))}
    </div>
  );
}
