import React from "react";
import welcomeImg from "../../images/blogs/1.jpg";
import { GrNext } from "react-icons/gr";
import { MdContacts } from "react-icons/md";

function Welcome() {
  return (
    <div className=" p-8 py-20 md:p-24">
      <section className=" flex flex-col md:flex-row items-center justify-evenly h-60 mt-12">
        <div className=" w-full md:w-1/2 ">
          <h1 className=" font-semibold text-5xl">
            Welcome To{" "}
            <span className=" text-6xl font-extrabold text-blue-600">
              Nanoquest
            </span>
          </h1>{" "}
          <br />
          <div className=" text-3xl">
            <span className=" cursor-pointer text-blue-600 text-5xl font-bold ml-2">
              L
            </span>
            earn
            <span className=" cursor-pointer text-blue-600 text-5xl font-bold ml-2">
              A
            </span>
            nything !
            <span className=" cursor-pointer text-blue-600 text-5xl font-bold ml-2">
              A
            </span>
            ny
            <span className=" cursor-pointer text-blue-600 text-5xl font-bold ml-2">
              W
            </span>
            here
          </div>
          <span className=" text-md md:text-xl ">
            "Welcome to Nanoquest, your gateway to transformative learning!
            Unlock boundless knowledge, explore diverse courses, and embark on
            an enriching educational journey tailored just for you. Let's
            empower your aspirations together at Nanoquest, where learning knows
            no limits
          </span>
          <br />
          <div className=" flex flex-row items-center p-4 ">
            <span
              className="bg-blue-600 h-10 w-max m-2 p-2 rounded-sm flex flex-row  text-white items-center border-2 border-blue-900
                               hover:bg-blue-800  hover:text-blue-600 shadow-black shadow-sm "
            >
              <button className="">ReadMore </button>{" "}
              <span>
                <GrNext />
              </span>
            </span>
            <span
              className="bg-white h-10 w-max m-2 p-2 rounded-sm flex flex-row  items-center border-2 border-blue-700 text-blue-600
                               hover:bg-blue-200  shadow-black shadow-sm"
            >
              <button className="">GetIn Touch</button>{" "}
              <span>
                <MdContacts />
              </span>
            </span>
          </div>
        </div>

        <div className=" w-full h-12 md:h-42 md:-mt-44  p-4 md:w-1/3  object-cover">
          <img
            src={welcomeImg}
            alt="sampleWelcomePic"
            className="w-100% h-100% rounded-md"
          />
        </div>
      </section>
    </div>
  );
}

export default Welcome;
