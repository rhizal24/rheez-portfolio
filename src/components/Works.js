"use client";

import Image from "next/image";
import { useState } from "react";

export default function RecentWorks() {
  const works = [
    {
      id: 1,
      title: "After Movie FindIT!",
      years: "2024",
      url: "https://youtu.be/ZT0195zPPU8",
      thumbnail: "/works/findit-2023.png",
      category: ["Video Editing", "Animation"], // Selalu gunakan array
    },
    {
      id: 2,
      title: "Recap TLS#7",
      years: "2024",
      url: "https://youtu.be/rn6IS1VEH7A",
      thumbnail: "/works/tls-recap-7.png",
      category: ["Video Editing"], // Ubah string menjadi array
    },
    {
      id: 3,
      title: "Recap TLS#3",
      years: "2024",
      url: "https://youtu.be/o6Xm8TmZEDw",
      thumbnail: "/works/tls-3-recap.png",
      category: ["Video Editing"], // Ubah string menjadi array
    },
    {
      id: 4,
      title: "Info Day TLS",
      years: "2024",
      url: "https://youtu.be/2i5PLZTexKo",
      thumbnail: "/works/info-day-tls0.png",
      category: ["Video Editing"], // Ubah string menjadi array
    },
    {
      id: 5,
      title: "Backdrop TLS",
      years: "2024",
      url: "https://youtu.be/OR4MPz3sbxA",
      thumbnail: "/works/tls-animation.png",
      category: ["Animation"], // Ubah string menjadi array
    },
    {
      id: 6,
      title: "After Movie Enforian",
      years: "2023",
      url: "https://youtu.be/7x8uk59Z6DI",
      thumbnail: "/works/aftermovie-enforian-2023.png",
      category: ["Video Editing", "Animation"],
    },
    {
      id: 7,
      title: "Bumper Tetronica",
      years: "2023",
      url: "https://youtu.be/6SkNsE5scIw",
      thumbnail: "/works/tetronica-animation.png",
      category: ["Animation"], // Ubah string menjadi array
    },
    {
      id: 8,
      title: "Teaser Enforian",
      years: "2023",
      url: "https://youtu.be/WDQ7tYP3iEk",
      thumbnail: "/works/teaser-enforian0.png",
      category: ["Video Editing"], // Ubah string menjadi array
    },
    {
      id: 9,
      title: "Coming Soon Enforian",
      years: "2023",
      url: "https://youtu.be/-Du5LTSBQLs",
      thumbnail: "/works/coming-soon-enforian0.png",
      category: ["Video Editing"], // Ubah string menjadi array
    },
    {
      id: 10,
      title: "Bumper Enforian",
      years: "2023",
      url: "https://youtu.be/LPt8N3a7Lws",
      thumbnail: "/works/bumper-enforian-animation-logo.png",
      category: ["Animation"],
    },
    {
      id: 11,
      title: "Action Plan PPSMB",
      years: "2023",
      url: "https://youtu.be/0VcfkfkBriE",
      thumbnail: "/works/actionplan-ppsmb.png",
      category: ["Video Editing"],
    },
    {
      id: 12,
      title: "Video Profil SMANSA",
      years: "2022",
      url: "https://youtu.be/XzzBL_lCCUg",
      thumbnail: "/works/video-profil-smansa0.png",
      category: ["Video Editing", "Animation"],
    },
    {
      id: 13,
      title: "Smartlens Project",
      years: "2021",
      url: "https://youtu.be/wSm9u-tNjSM",
      thumbnail: "/works/smartlens.png",
      category: ["Video Editing"],
    },
    {
      id: 14,
      title: "Raihanslife Footage",
      years: "2021",
      url: "https://youtu.be/cB-EZHdQq7U",
      thumbnail: "/works/raihanslife-footage0.png",
      category: ["Video Editing", "Animation"],
    },
  ];

  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const categories = ["All", "Animation", "Video Editing", "Website"];

  // Logika filter yang diperbaiki
  const filteredWorks = works.filter((work) => {
    if (activeFilter === "All") return true;
    return work.category.includes(activeFilter); // Cek apakah kategori aktif ada di array work.category
  });

  const handleFilterChange = (category) => {
    setActiveFilter(category);
    setShowAll(false);
  };

  const visibleWorks = showAll ? filteredWorks : filteredWorks.slice(0, 3);
  const hiddenProjectCount = filteredWorks.length - visibleWorks.length;

  return (
    <section className="bg-[#2f2f2f]/40">
      <div className="container transition-all duration-600 ease-in-out">
        <div className="w-full flex flex-col gap-8 px-4 py-28">
          {/* Header */}
          <div className="flex flex-col justify-center items-center gap-2">
            <h2 className="lg:text-[45px] xl:text-[55px] bg-gradient-to-tl from-normal to-light text-transparent bg-clip-text transition-all duration-700 ease-in-out">
              My Recent Works
            </h2>
            <div className="flex text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] transition-all duration-700 ease-in-out">
              {categories.map((category) => (
                <button
                  type="button"
                  onClick={() => handleFilterChange(category)}
                  key={category}
                  className={`relative px-3 py-1 rounded-full transition-all duration-300 ease-in-out ${
                    activeFilter === category
                      ? "bg-gradient-to-br from-normal to-dark-hover"
                      : "bg-transparent"
                  } ${
                    activeFilter === category
                      ? "border-[1px] border-normal"
                      : "border-none"
                  }`}
                  style={{
                    transform:
                      activeFilter === category ? "scale(1)" : "scale(0.95)",
                    opacity: activeFilter === category ? 1 : 0.7,
                  }}
                >
                  <span
                    className={`absolute inset-0 rounded-full transition-all duration-300 ${
                      activeFilter === category
                        ? "bg-gradient-to-br from-normal to-dark-hover"
                        : "bg-transparent"
                    }`}
                  />
                  <span className="relative z-10">{category}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Item of recent works */}
          <div className="flex flex-col gap-10 md:flex-row md:flex-wrap justify-center items-center">
            {visibleWorks.map((work) => (
              <a
                key={work.id}
                href={work.url}
                target="_blank"
                className="relative w-[410px] h-[230px] flex flex-col justify-center items-center hover:scale-105 transition-all duration-300 ease-in-out active:scale-95"
              >
                <div className="absolute rounded-[15px] overflow-hidden">
                  <Image
                    src={work.thumbnail}
                    alt={work.title}
                    width={900}
                    height={800}
                    className="blur-[3px]"
                  />
                </div>
                <div className="absolute text-light w-full h-full border-2 border-normal bg-transparent rounded-[15px] z-10"></div>
                <div className="absolute text-light w-full h-full bg-gradient-to-br from-normal/20 to-darker/20 rounded-[15px] z-10"></div>
                <div className="text-light flex items-center justify-center flex-col z-30">
                  <h1 className="text-center text-light hover:text-light-active transition-all duration-300 ease-in-out hover:underline active:scale-95">
                    {work.title}
                  </h1>
                  <p className="text-center font-normal text-light hover:text-light-active transition-all duration-300 ease-in-out hover:underline active:scale-95">
                    {work.years}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* See More... */}
          {hiddenProjectCount > 0 && (
            <div className="text-center">
              <button
                type="button"
                onClick={() => setShowAll(!showAll)}
                className="hover:text-light hover:underline hover:scale-105 bg-gradient-to-br from-light to-normal-active bg-clip-text text-transparent px-6 py-2 rounded-lg transition-all duration-300 active:scale-95 lg:text-[18px]"
              >
                {showAll ? "Show Less" : `See More...(${hiddenProjectCount})`}
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
