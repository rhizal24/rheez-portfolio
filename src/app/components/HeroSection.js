import { IoMdDownload } from "react-icons/io";
import {
  FaInstagram,
  FaGithub,
  FaDiscord,
  FaYoutube,
  FaDribbble,
} from "react-icons/fa";
import { LiaLinkedinIn } from "react-icons/lia";

export default function Hero() {
  return (
    <div
      className={`font-just-sans w-full flex py-[40px] flex-col gap-[40px] text-light px-[20px]`}
    >
      <div>
        <div className={`text-[20px] font-semibold`}>Hey, I am Rhizal</div>
        <div
          className={`text-[32px] font-extrabold bg-gradient-to-br from-normal to-light bg-clip-text text-transparent`}
        >
          <div>Motion Designer +</div>
          <div>Video Editor + Web Designer</div>
        </div>
      </div>
      <div>
        <div className={`w-inherit text-[160px] font-semibold text-center`}>
          rhizal
        </div>
      </div>
      <div className={`text-[18px] font-light flex flex-col gap-[20px]`}>
        <p>
          I like making motion designs and editing videos to realize creative
          ideas and learn a little about web development, especially on the
          front-end (beginner).
        </p>
        <div>
          <button
            type="button"
            className="group h-12 w-48 rounded-full p-[2px] bg-gradient-to-br from-normal to-dark-active hover:bg-[#161616] transition-all duration-300 active:scale-95"
          >
            <div className="flex gap-1 font-[600] bg-[#161616] w-full h-full items-center justify-center rounded-full group-hover:bg-transparent ease-in-out transition-all duration-300 group-active:bg-normal">
              <div className="bg-gradient-to-br from-normal to-dark-active text-transparent bg-clip-text group-hover:text-[#161616] transition-colors duration-300">
                Download CV
              </div>
              <div>
                <IoMdDownload
                  size={20}
                  className="fill-dark-active group-hover:fill-[#161616] h-[20px]easy-in-out transition-all duration-300"
                />
              </div>
            </div>
          </button>
        </div>
        <ul className="flex gap-[14px]">
          <li>
            <a href="https://instagram.com/rhizal.rh_ " target="_blank">
              <FaInstagram
                size={45}
                className="fill-dark border-dark border-2 p-2 rounded-full hover:fill-[#161616] hover:bg-dark easy-in-out transition-all duration-300 active:bg-normal active:scale-90"
              />
            </a>
          </li>
          <li>
            <a href="https://youtube.com/@rheez05" target="_blank">
              <FaYoutube
                size={45}
                className="fill-dark border-dark border-2 p-2 rounded-full hover:fill-[#161616] hover:bg-dark easy-in-out transition-all duration-300 active:bg-normal active:scale-90"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/rhizal24" target="_blank">
              <FaGithub
                size={45}
                className="fill-dark border-dark border-2 p-2 rounded-full hover:fill-[#161616] hover:bg-dark hover:border-da easy-in-out transition-all duration-300 active:bg-normal active:scale-90"
              />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/muhammad-rhizal-rhomadon-2928752ba/"
              target="_blank"
            >
              <LiaLinkedinIn
                size={45}
                className="fill-dark border-dark border-2 p-1 rounded-full hover:fill-[#161616] hover:bg-dark easy-in-out transition-all duration-300 active:bg-normal active:scale-90"
              />
            </a>
          </li>
          <li>
            <a
              href="https://discodrdapp.com/users/770854990574518293"
              target="_blank"
            >
              <FaDiscord
                size={45}
                className="fill-dark border-dark border-2 p-2 rounded-full hover:fill-[#161616] hover:bg-dark easy-in-out transition-all duration-300 active:bg-normal active:scale-90"
              />
            </a>
          </li>
          <li>
            <a href="https://dribbble.com/rhizalrhoma" target="_blank">
              <FaDribbble
                size={45}
                className="fill-dark border-dark border-2 p-2 rounded-full hover:fill-[#161616] hover:bg-dark easy-in-out transition-all duration-300 active:bg-normal active:scale-90"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
