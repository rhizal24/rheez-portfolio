"use client";

import { useState } from "react";

export default function RecentWorks() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const works = [
    { id: 1, title: "Projcet 1", category: "Animation" },
    { id: 2, title: "Project 2", category: "Video Editing" },
    { id: 3, title: "Project 3", category: "Website" },
    { id: 4, title: "Project 4", category: "Animation" },
    { id: 5, title: "Project 5", category: "Website" },
  ];

  const categories = ["All", "Animation", "Video Editing", "Website"];
  const filteredWorks = works.filter((work) =>
    activeFilter === "All" ? true : work.category === activeFilter
  );

  const visibleWorks = showAll ? works : filteredWorks.slice(0, 3);
  const hiddenProjectCount = filteredWorks.length - visibleWorks.length;
  return (
    // <div className="md:px-[80px] lg:px-[120px] xl:px-[140px] font-just-sans w-full flex py-[40px] flex-col gap-[40px] justify-center items-center text-light bg-[#191919] px-[30px]">
    //   {/* Header */}
    //   <div className="flex flex-col justify-center items-center gap-4">
    //     <h1 className="md:text-[35px] bg-gradient-to-tl from-normal to-light text-transparent bg-clip-text">
    //       My Recent Works
    //     </h1>
    //     <div className="flex text-[14px] md:text-[16px]">
    //       {categories.map((category) => {
    //         return (
    //           <button
    //             type="button"
    //             onClick={() => {
    //               setActiveFilter(category);
    //               setShowAll(false);
    //             }}
    //             key={category}
    //             className={`relative px-3 py-1 rounded-full transition-all duration-300 ease-in-out ${
    //               activeFilter === category
    //                 ? "bg-gradient-to-br from-normal to-dark-hover"
    //                 : "bg-transparent"
    //             } ${
    //               activeFilter === category
    //                 ? "border-[1px] border-normal"
    //                 : "border-none"
    //             }
    //             }`}
    //             style={{
    //               transform:
    //                 activeFilter === category ? "scale(1)" : "scale(0.95)",
    //               opacity: activeFilter === category ? 1 : 0.7,
    //             }}
    //           >
    //             <span
    //               className={`absolute inset-0 rounded-full transition-all duration-300 ${
    //                 activeFilter === category
    //                   ? "bg-gradient-to-br from-normal to-dark-hover"
    //                   : "bg-transparent"
    //               }`}
    //             />
    //             <span className="relative z-10">{category}</span>
    //           </button>
    //         );
    //       })}
    //     </div>
    //   </div>
    //   {/* Item of recent works */}
    //   <div className="flex flex-col gap-[40px] md:flex-row md:flex-wrap justify-center items-center">
    //     {visibleWorks.map((work) => {
    //       return (
    //         <div
    //           key={work.id}
    //           className="bg-normal bg-opacity-10 p-32 rounded-[15px] border-normal border-2 flex flex-col justify-center items-center"
    //         >
    //           <h1 className="text-light">{work.title}</h1>
    //           <p className="text-light">{work.category}</p>
    //         </div>
    //       );
    //     })}
    //   </div>
    //   {/* See More... */}
    //   {hiddenProjectCount > 0 && (
    //     <div className="text-center">
    //       <button
    //         type="button"
    //         onClick={() => setShowAll(!showAll)}
    //         className="hover:text-light hover:underline hover:scale-105 bg-gradient-to-br from-light to-normal-active bg-clip-text text-transparent px-6 py-2 rounded-lg transition-all duration-300 active:scale-95"
    //       >
    //         {showAll ? "Show Less" : `See More...(${hiddenProjectCount})`}
    //       </button>
    //     </div>
    //   )}
    // </div>
    <section>
      <div className="container"></div>
    </section>
  );
}
