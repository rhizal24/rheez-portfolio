import Animation from "../components/ScrollAnimation.js";
export default function Message() {
  return (
    <section id="message">
      <div className="container transition-all duration-600 ease-in-out">
        <div className="2xl:px-[68px] w-full flex flex-col justify-center items-center gap-10 px-4 py-20 pb-28 md:py-32 md:pb-[148px]">
          <div className="flex flex-col justify-center items-center">
            <Animation>
              <h2 className="lg:text-[45px] xl:text-[48px] bg-gradient-to-tl from-normal to-light text-transparent bg-clip-text transition-all duration-700 ease-in-out">
                Let's work together
              </h2>
            </Animation>
            <Animation delay={0.1}>
              <div className="w-full flex flex-col justify-center items-center gap-4">
                <h5 className="lg:w-[80%] md:text-[14px] lg:text-[18px] text-[12px] transition-all duration-700 ease-in-out w-[95%] xl:w-[80%] text-center">
                  Let's create something interesting together to advance your
                  business or company.
                </h5>
              </div>
            </Animation>
          </div>
          {/* Box message */}
          <div className="w-full">
            <Animation delay={0}>
              <div className="flex justify-center items-center">
                <div className="lg:w-[65%] lg:rounded-[15px] xl:p-[72px] lg:p-14 md:p-12 w-full flex flex-col gap-4 bg-normal/20 border-normal/20 border-[1px] rounded-[12px] p-8 md:gap-6">
                  <form className="md:gap-6 lg:text-[16px] xl:text-[18px] md:text-[14px] w-full text-light font-extralight flex flex-col justify-center items-center gap-4 text-[12px]">
                    <div className="w-full flex gap-4 md:gap-6">
                      <input
                        type="text"
                        id="input-message"
                        placeholder="Full Name"
                        className="rounded-[8px] w-[50%] xl:rounded-[12px] xl:py-[16px] xl:px-[16px] md:py-3 md:px-4 py-2 px-3 focus:outline-none placeholder-dark/60 active:outline-normal transition-all duration-300 ease-in-out"
                      />
                      <input
                        type="email"
                        id="input-message"
                        placeholder="Email Address"
                        className="rounded-[8px] w-[50%] xl:rounded-[12px] xl:py-[16px] xl:px-[16px] md:py-3 md:px-4 py-2 px-3 focus:outline-none placeholder-dark/60 transition-all duration-300 ease-in-out"
                      />
                    </div>
                    <div className="w-full flex gap-4 md:gap-6">
                      <input
                        type="text"
                        id="input-message"
                        placeholder="Phone Number"
                        className="rounded-[8px] w-[50%] xl:rounded-[12px] xl:py-[16px] xl:px-[16px] md:py-3 md:px-4 py-2 px-3 focus:outline-none placeholder-dark/60 active:outline-normal transition-all duration-300 ease-in-out"
                      />
                      <input
                        type="email"
                        id="input-message"
                        placeholder="Subject"
                        className="rounded-[8px] w-[50%] xl:rounded-[12px] xl:py-[16px] xl:px-[16px] md:py-3 md:px-4 py-2 px-3 focus:outline-none placeholder-dark/60 active:outline-normal transition-all duration-300 ease-in-out"
                      />
                    </div>
                    <textarea
                      name=""
                      id="input-message"
                      placeholder="Your Message"
                      className="xl:h-[360px] rounded-[8px] md:h-[350px] w-[100%] h-[200px] xl:rounded-[12px] xl:py-[16px] xl:px-[16px] md:py-3 md:px-4 py-2 px-3 focus:outline-none placeholder-dark/60 active:outline-normal transition-all duration-300 ease-in-out"
                    />
                  </form>
                  <div className="flex flex-col gap-4 justify-center items-center">
                    <button
                      type="button"
                      className=" md:w-[150px] md:text-[14px] md:py-[8px] w-[130px] xl:text-[14px] my-button text-white py-[7px] border-[1.5px] border-normal rounded-full transition-all duration-300 ease-in-out active:scale-95 text-[12px] font-normal tracking-wide active:bg-darker hover:text-light-hover"
                    >
                      <div>Send Message</div>
                    </button>
                  </div>
                </div>
              </div>
            </Animation>
          </div>
        </div>
      </div>
    </section>
  );
}
