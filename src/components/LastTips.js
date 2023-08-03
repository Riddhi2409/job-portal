import React from 'react'

function LastTips() {
  return (
    <div className='lg:w-[80%]'>
      <div className="grid md:grid-cols-2 justify-center items-center max-md:gap-20 gap-10 max-md:items-center px-4 ">
      <div className="flex items-center justify-center">
            <img
              src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/Employer%20-%20Request%20Interview.png"
              height="3em"
              alt=""
            />
          </div>
          <div className="flex flex-col  py-2 items-start gap-8 justify-start">
            <div className="flex flex-col gap-6">
              <div className="w-[5em] h-2 bg-sky-500 rounded-full"></div>
              <h1 className="text-3xl font-bold text-sky-500">
              Easy outreach & guaranteed responses
              </h1>
            </div>
            <p className=" text-lg">
            Send an interview request with just two clicks and get a guaranteed response within 72 hours.
            </p>
            <div className="text-lg">
              <p>💬 Free to browse candidates.</p>
              <p>🤝 Free to get connected and talk to them.</p>
              <p>💵 Pay only if you end up hiring!</p>
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default LastTips
