export default function Message() {
  return (
    // <div className="md:px-[80px] lg:px-[120px] xl:px-[140px] font-just-sans w-full flex pt-[40px] pb-[60px] flex-col gap-[40px] justify-center items-center text-light bg-[#161616] px-[20px]">
    //   {/* Header */}
    //   <div className="flex flex-col justify-center items-center">
    //     <h1 className="md:text-[35px] bg-gradient-to-tl from-normal to-light text-transparent bg-clip-text">
    //       Let's Work Together!
    //     </h1>
    //     <h2 className="md:text-[15px] text-center w-[80%]">
    //       Let's create something interesting together to advance your business
    //       or company.
    //     </h2>
    //   </div>
    //   {/* Box Inputs */}
    //   <div className="md:w-[510px] md:text-[14px] lg:w-[700px] lg:text-[16px] flex flex-col text-dark text-[12px] gap-4 bg-normal bg-opacity-20 rounded-[10px] w-[390px] h-auto p-8 font-light ">
    //     <div className="flex gap-4">
    //       <input
    //         type="text"
    //         id="input-message"
    //         placeholder="Full Name"
    //         className="rounded-[8px] w-[50%] py-2 px-3 focus:outline-none placeholder-dark placeholder-opacity-65"
    //       />
    //       <input
    //         type="email"
    //         id="input-message"
    //         placeholder="Email Address"
    //         className="rounded-[8px] w-[50%] py-2 px-3 focus:outline-none placeholder-dark placeholder-opacity-65"
    //       />
    //     </div>
    //     <div className="flex gap-4 group">
    //       <input
    //         type="text"
    //         id="input-message"
    //         placeholder="Phone Number"
    //         className="rounded-[8px] w-[50%] py-2 px-3 focus:outline-none placeholder-dark placeholder-opacity-65"
    //       />
    //       <input
    //         type="text"
    //         id="input-message"
    //         placeholder="Subject"
    //         className="rounded-[8px] w-[50%] py-2 px-3 focus:outline-none placeholder-dark placeholder-opacity-65"
    //       />
    //     </div>
    //     <div className="flex flex-col gap-4 justify-center items-center">
    //       <textarea
    //         name=""
    //         id="input-message"
    //         placeholder="Your Message"
    //         className="md:h-[300px] rounded-[8px] w-[100%] h-[200px] py-2 px-3 focus:outline-none placeholder-dark placeholder-opacity-65"
    //       ></textarea>
    //       <button
    //         type="submit"
    //         className="group h-10 w-36 rounded-full p-[1px] bg-gradient-to-br from-normal to-light-active hover:bg-[#1b1b1b] transition-all duration-300 active:scale-95"
    //       >
    //         <div className="flex gap-1 font-[600] bg-[#1b1b1b] w-full h-full items-center justify-center rounded-full group-hover:bg-transparent ease-in-out transition-all duration-300 group-active:bg-normal">
    //           <div className="bg-gradient-to-br from-normal to-light-active text-transparent bg-clip-text group-hover:text-[#1b1b1b] transition-colors duration-300 font-semibold text-[14px]">
    //             Send Message
    //           </div>
    //         </div>
    //       </button>
    //     </div>
    //   </div>
    // </div>
    <section id="message">
      <div className="container transition-all duration-600 ease-in-out">
        <div className="2xl:px-[68px] w-full flex flex-col justify-center items-center gap-10 px-4 py-28">
          <div className="flex flex-col justify-center items-center">
            <h2 className="lg:text-[45px] xl:text-[48px] bg-gradient-to-tl from-normal to-light text-transparent bg-clip-text transition-all duration-700 ease-in-out">
              Let's work together
            </h2>
            <h5 className="lg:w-[80%] lg:text-[18px] transition-all duration-700 ease-in-out w-[95%] xl:w-[80%] text-center">
              Let's create something interesting together to advance your
              business or company.
            </h5>
          </div>
          <div className="lg:rounded-[15px] xl:p-[80px] lg:p-14 md:p-12 w-full flex flex-col gap-4 bg-normal/20 border-normal/20 border-[1px] rounded-[12px] p-8 md:gap-6">
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
                className="xl:h-[450px] rounded-[8px] md:h-[350px] w-[100%] h-[200px] xl:rounded-[12px] xl:py-[16px] xl:px-[16px] md:py-3 md:px-4 py-2 px-3 focus:outline-none placeholder-dark/60 active:outline-normal transition-all duration-300 ease-in-out"
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
      </div>
    </section>
  );
}
