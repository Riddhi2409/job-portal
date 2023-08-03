import React from 'react'

function AnotherTips() {
  return (
    <div className='lg:w-[80%]'>
      <div className="grid md:grid-cols-2 justify-center items-center max-md:gap-20 gap-10 max-md:items-center px-4 ">
      <div className="flex items-center justify-center">
            <img
              src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/C%20-%20Companies%20Compete.png"
              height="3em"
              alt=""
            />
          </div>
          <div className="flex flex-col  py-2 items-start gap-8 justify-start">
            <div className="flex flex-col gap-6">
              <div className="w-[5em] h-2 bg-sky-500 rounded-full"></div>
              <h1 className="text-3xl font-bold text-sky-500">
              Sit back while companies compete to hire you
              </h1>
            </div>
            <p className=" text-lg">
            Don’t waste your time reaching out to companies or dealing with recruiters.
            </p>
            <div className="text-lg">
              <p>💨 We fast-track your profile to hiring managers.</p>
              <p>🙆‍♂️ Get multiple interview requests with upfront salary offers within days.</p>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default AnotherTips
