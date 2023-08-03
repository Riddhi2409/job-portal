import React from "react";
import Steps from "./Steps";

function Intro() {
  return (
    <div className="relative  flex flex-col items-center justify-center gap-10  h-[90vh] bg-cloud bg-cover z-0">
      <div className="flex flex-col justify-center items-center gap-10 md:w-[60%] w-[90%]">
        <div className="font-bold xl:text-5xl text-4xl text-center">
          Find your next top tech job in 1 week.
        </div>
        <div className="md:text-lg md:px-14 px-2 text-center">
            <p className="break-words">
                <span className="font-bold bg-yellow-300">Are you a top 2%</span>
                <span className="break-words"> Software Engineer, Product Manager or Data Scientist? Let leading
                Indian technology </span><span className="font-bold bg-yellow-300"> companies compete to hire you.</span>
            </p>
        </div>
        <div>
            <button className=" bg-blue-600 text-white font-bold px-6 py-4 rounded-md hover:bg-white hover:text-blue-600 hover:border-2 border-blue-600" >Apply To Join</button>
        </div>
      </div>
      {/* <Steps /> */}
    </div>
  );
}

export default Intro;
