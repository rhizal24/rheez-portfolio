import Image from "next/image";
import Animation from "../components/ScrollAnimation.js";

export default function About() {
  return (
    // <div className="md:px-[80px] lg:px-[120px] xl:px-[140px] 2xl:px-[300px] font-just-sans w-full flex pt-[40px] pb-[60px] flex-col gap-[40px] justify-center items-center text-light bg-[#191919] px-[30px]">
    //   {/* Header */}
    //   <div className="flex flex-col justify-center items-center ">
    //     <h1 className="md:text-[35px] bg-gradient-to-tl from-normal to-light text-transparent bg-clip-text">
    //       About Me
    //     </h1>
    //     <h2 className="md:text-[15px]">Hello, the below picture is me!!!</h2>
    //   </div>
    //   {/* Deskription */}
    //   <div className="md:flex-row flex flex-col gap-[40px] justify-center items-center">
    //     <div className="md:w-[40%] p-2 bg-normal w-[370px] h-[250px] rounded-[10px] border-dark border-2"></div>
    //     <p className="md:w-[55%] text-[18px] font-light text-left">
    //       My name is Muhammad Rhizal Romadhon, 4th semester information
    //       engineering student at Gadjah Mada University. As a passionate motion
    //       designer and video editor, I really enjoy realizing the ideas that
    //       come to my mind in a work. With a Motion Designer background, I also
    //       like Graphic Design so I can combine it with the major I am taking to
    //       create more interesting work to be realized in the form of a website.{" "}
    //     </p>
    //   </div>
    // </div>
    <section className="bg-[#2f2f2f]/40" id="about">
      <div className="container transition-all duration-600 ease-in-out">
        <div className="w-full px-4 flex flex-col justify-center items-center text-light py-20 pb-28 md:py-32 md:pb-[148px] gap-10">
          <div className="flex flex-col justify-center items-center">
            <Animation delay={0}>
              <h2 className="lg:text-[45px] xl:text-[55px] bg-gradient-to-tl from-normal to-light text-transparent bg-clip-text transition-all duration-700 ease-in-out">
                About Me
              </h2>
            </Animation>
            <Animation delay={0.2}>
              <h5 className="md:text-[14px] lg:text-[18px] text-[12px] transition-all duration-700 ease-in-out">
                Hello, the below picture is me!!!
              </h5>
            </Animation>
          </div>
          <Animation delay={0.8}>
            <div className="xl:flex-row w-full flex flex-col gap-14 justify-center items-center xl:gap-20">
              <Image
                src="/about/fotoAbout.svg"
                alt="About Rhizal"
                width={200}
                height={200}
                className="w-[800px] h-auto xl:w-[40%] transition-all duration-700 ease-in-out"
              />
              <p className="md:text-[19px] lg:text-[25px] text-[14px] font-light transition-all duration-700 ease-in-ou xl:font-extralight">
                My name is Muhammad Rhizal Romadhon, 4th semester information
                engineering student at Gadjah Mada University. As a passionate
                motion designer and video editor, I really enjoy realizing the
                ideas that come to my mind in a work. With a Motion Designer
                background, I also like Graphic Design so I can combine it with
                the major I am taking to create more interesting work to be
                realized in the form of a website.
              </p>
            </div>
          </Animation>
        </div>
      </div>
    </section>
  );
}
