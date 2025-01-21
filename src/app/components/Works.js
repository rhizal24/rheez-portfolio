export default function RecentWorks() {
  const Selected = [
    {
      item: "All",
    },
    {
      item: "Animation",
    },
    {
      item: "Video Editing",
    },
    {
      item: "Website",
    },
  ];

  return (
    <div className="font-just-sans w-full flex py-[40px] flex-col gap-[40px] justify-center items-center text-light bg-[#191919] px-[20px]">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="bg-gradient-to-tl from-normal to-light text-transparent bg-clip-text">
          My Recent Works
        </h1>
        <div className="flex gap-4 text-[14px]">
          {Selected.map((item, index) => {
            return (
              <button type="button" key={index}>
                {item.item}
              </button>
            );
          })}
        </div>
      </div>
      <div></div>
    </div>
  );
}
