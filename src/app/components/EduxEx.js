const Education = [
  {
    range: "August 2023 - Now",
    from: "Gadjah Mada University",
    major: "Bachelor of Engineering - BE, Information Engineering",
  },
  {
    range: "July 2020 - July 2023",
    from: "SMA Negeri 1 Berau",
    major: "High School DIploma, Matemathics and Naturan Science (MIPA)",
  },
  {
    range: "DU Know",
    from: "SMP Negeri 3 Tanjung Redeb",
    major: "Junior High School",
  },
];

const Experience = [
  {
    range: "Dec 2023 - Now",
    company: "FindIT!",
    status: "Contract",
    position: "Staff of Videography, Multimedia DIvision",
  },
];

export default function EduXExp() {
  return (
    <div className="font-just-sans w-full flex py-[40px] flex-col gap-[40px] justify-center items-center text-light bg-[#161616] px-[40px]">
      <div className="flex flex-col justify-center items-center gap-[20px]">
        <h1 className="bg-gradient-to-br from-normal to-light text-transparent bg-clip-text">
          My Education
        </h1>
        <div className="flex flex-col gap-[20px]">
          {Education.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-normal bg-opacity-25 rounded-[12px] border-normal border-2 w-[400px] flex flex-col py-3 px-4"
              >
                <h2 className="text-[13px] font-medium text-normal">
                  {item.range}
                </h2>
                <h3 className="">{item.from}</h3>
                <p className="text-[10px] font-thin">{item.major}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-[20px] justify-center items-center">
        <h1 className="bg-gradient-to-tl from-normal to-light text-transparent bg-clip-text">
          My Experience
        </h1>
        <div>
          {Experience.map((item, index) => {
            return (
              <div
                key={index}
                className="bg-normal bg-opacity-25 rounded-[12px] border-normal border-2 w-[400px] flex flex-col py-3 px-4"
              >
                <h2 className="text-[13px] font-medium text-normal">
                  {item.range}
                </h2>
                <h3 className="">{item.company}</h3>
                <p className="text-[10px] font-thin">
                  {item.status} - {item.position}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
