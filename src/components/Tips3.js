import React from 'react'

function Tips3({hd1,d1,img1}) {
  return (
    <div className='lg:w-[70%] mt-[5em]'>
      <div className="grid md:grid-cols-2 justify-center items-center max-md:gap-20 gap-10 max-md:items-center px-4 ">
      
          <div className="flex flex-col  py-2 items-start gap-8 justify-start ">
            <div className="flex flex-col gap-6">
              <div className="w-[5em] h-2 bg-sky-500 rounded-full"></div>
              <h1 className="text-3xl font-bold text-sky-500">
              {hd1}
              </h1>
            </div>
            <p className=" text-lg">
            {d1}
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={img1}
              height="3em"
              alt=""
            />
          </div>
        </div>
    </div>
  )
}

export default Tips3
