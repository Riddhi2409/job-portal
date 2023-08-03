import React from "react";

function Steps({img1,img2,img3,hd1,hd2,hd3,d1,d2,d3}) {
  return (
    <div className=" justify-center relative flex-row max-md:flex-col flex lg:gap-[10em]  px-8 max-md:gap-4 py-4 overflow-x-hidden h-full w-screen ">
      <div className="flex flex-col justify-center items-center  xl:w-[20em] gap-4 ">
        <div>
          <img
            src={img1}
            height="70"
            width="70"
            alt=""
          />
        </div>
        <div  className="flex flex-col gap-3 items-center justify-center ">
            <h1 className="max-md:text-medium font-bold font-mediem text-base">{hd1}</h1>
            <p className="max-md:text-base text-sm text-center">{d1}</p>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center  xl:w-[20em] gap-4 ">
        <div>
          <img
            src={img2}
            height="70px"
            width="70px"
            alt=""
          />
        </div>
        <div  className="flex flex-col gap-3 items-center justify-center">
            <h1 className="max-md:text-medium font-bold  text-base">{hd2}</h1>
            <p className="max-md:text-base text-center text-sm">{d2}</p>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center xl:w-[20em] gap-4">
        <div>
          <img
            src={img3}
            height="70"
            width="70"
            alt=""
          />
        </div>
        <div  className="flex flex-col gap-3 items-center justify-center">
            <h1 className="max-md:text-medium  font-bold text-base">{hd3}</h1>
            <p className="max-md:text-base text-sm text-center">{d3}</p>
        </div>
      </div>
    </div>
  );
}

export default Steps;
