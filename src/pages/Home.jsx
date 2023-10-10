import React from "react";
import vg from "../assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

const Home = () => {
  return (
    <>
      <div id="/" className="w-full bg-gray-700 min-h-screen ">
        <main className="flex uppercase absolute flex-col items-end content-center p-24 sm:p-8 min-h-full min-w-full z-10 text-gray-300">
          <h1
            id="home"
            className=" font-josef text-4xl font-normal before:rounded-b-[100px]"
          >
            Welcome to <span className=" text-pink-700"> Npx Project</span>
          </h1>
          <p className=" font-popin text-xl font-extrabold">
            <span className=" text-pink-700">Lorem ipsum dolor,</span>
            consectetur adipisicing elit.
          </p>
        </main>
      </div>
      <div  className="w-full bg-gray-700 min-h-screen sm:py-[200px] gap-0 sm:-mt-32  px-0 flex justify-center items-center flex-col sm:flex-row">
        <img src={vg} alt="graphics" className="sm:w-[30%] w-1/2" id="imghome" />
        <div className="sm:min-h-screen w-1/2 flex justify-center items-center sm:p-20 p-4 h-1/2 ">
          <p className=" font-extralight font-josef  leading-tight sm:gap-1 gap-0  text-white sm:text-xl text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            deleniti ea, rem cum laboriosam praesentium quae sapiente alias,
            dolore, ratione quibusdam provident? Ducimus neque iusto laudantium
            accusantium repudiandae quibusdam eaque.
          </p>
        </div>
      </div>
      <div id="about" className="w-full bg-gray-700 min-h-screen -mt-32 flex">
        <div className="w-[70%] bg-violet-500 flex justify-center items-center flex-col rounded-tl-none rounded-r-[200px] p-8">
          <h1 className=" uppercase  p-2 font-bold text-3xl mb-4 font-josef underline">
            What will <span className="text-pink-700">you learn</span>
          </h1>
          <p className=" font-popin text-base text-gray-200">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
            beatae sint nemo commodi? Voluptas facere a maxime obcaecati itaque
            ipsum consequatur illo consectetur labore aspernatur pariatur
            asperiores alias, quasi vel qui possimus dolore. Blanditiis
            asperiores debitis placeat, tenetur ullam iure?
          </p>
        </div>
      </div>
      <div id="brands" className="w-full bg-gray-700 min-h-screen  justify-end flex">
        <div className="w-[70%] bg-violet-500 flex justify-center mt-12 items-center flex-col rounded-l-[200px] p-8">
          <h1 className="uppercase  p-2 font-bold sm:text-3xl text-xl mb-4 font-josef underline">Brands</h1>
          <article id="bounce"
           className=" my-8 flex flex-wrap sm:gap-6 gap-4 font-bold font-josef  text-xl justify-center cursor-pointer">
            <div className="icon_style "
              style={{
                animationDelay: " 1s",
              }}
            >
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div  className="icon_style"
              style={{
                animationDelay: " 1.3s",
              }}
            >
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
            <div   className="icon_style"
              style={{
                animationDelay: " 1.6s",
              }}
            >
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
            <div   className="icon_style"
              style={{
                animationDelay: " 1.9s",
              }}
            >
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default Home;
