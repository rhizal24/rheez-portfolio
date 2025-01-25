export default function About() {
  return (
    <div className="font-just-sans w-full flex pt-[40px] pb-[60px] flex-col gap-[40px] justify-center items-center text-light bg-[#191919] px-[20px]">
      <div className="flex flex-col justify-center items-center ">
        <h1 className="bg-gradient-to-tl from-normal to-light text-transparent bg-clip-text">
          About Me
        </h1>
        <h2>Hello, the below picture is me!!!</h2>
      </div>
      <div className="p-2 bg-normal w-[370px] h-[250px] rounded-[10px] border-dark border-2"></div>
      <div>
        <p className="text-[18px] font-light text-left">
          My name is Muhammad Rhizal Romadhon, 4th semester information
          engineering student at Gadjah Mada University. As a passionate motion
          designer and video editor, I really enjoy realizing the ideas that
          come to my mind in a work. With a Motion Designer background, I also
          like Graphic Design so I can combine it with the major I am taking to
          create more interesting work to be realized in the form of a website.{" "}
        </p>
      </div>
    </div>
  );
}
