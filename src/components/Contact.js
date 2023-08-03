import React from 'react'


function Contact() {
    const packages = [
        "For Candidates",
        "Candidate Sign Up",
        "Invite & Earn ₹15k",
        "Candidate FAQ"
      ]
      
      const usefull = [
        "For Employers",
        "Employer Sign Up",
        "Employer FAQ"
      ]
  return (
    <div className='flex flex-col justify-around items-center w-screen  mt-40 gap-[10em] '>
      <div className='flex flex-col gap-4 font-bold justify-center items-center'>
        <h1 className='text-3xl text-center'>Ready to realise your true potential?</h1>
        <p className='text-lg text-center'>70% techies find their perfect opportunities within 10 days on Cutshort.</p>
        <button className='bg-sky-600 px-6 py-2 rounded-xl text-white '>Start</button>
      </div>
      <div 
          className="grid md:grid-cols-4 p-10 gap-3 max-md:gap-[2em] justify-start items-start bg-gray-800 max-lg:h-[30em] lg:overflow-y-hidden overflow-y-auto  text-white w-screen"
          
        >
          <div className="flex flex-col gap-6 font-sans justify-center items-center">
            <h1 
              className="text-xl  font-bold"
            >TalentList</h1>
            <p 
              className="text-md  font-base text-center" 
              
            >TopHire is on a mission to make it dead simple for leading Indian startups to hire the top 2% of tech talent.
            </p>
          </div>
          <div className="flex flex-col gap-4 font-sans justify-center items-center">
            <h1  className="text-xl font-bold">Candidates</h1>
            <div className="flex flex-col gap-2 text-md font-base items-center">
              {packages.map((pack)=>(
                <p className="flex flex-row gap-2 items-center cursor-pointer hover:text-slate-500" key={pack}
                >
               {pack}
              </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 font-sans justify-center items-center">
            <h1 className="text-xl  font-bold" >Employers</h1>
            <div className="flex flex-col gap-2 text-md font-base items-center ">
              {usefull.map((use)=>(
                <p className="flex flex-row gap-2 items-center hover:text-slate-500" key={use}>
                {use}
              </p> 
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 font-sans justify-center items-center">
            <h1 className="text-xl  font-bold" >Useful Links</h1>
            <div className="flex flex-col gap-2 text-md font-base items-center">
              <p className="flex flex-row gap-2 items-center" 
              >
                New York, NY 10012, US
              </p>
              <p className="flex flex-row gap-2 items-center" 
              >
                
                info@example.com
              </p>
              <p className="flex flex-row gap-2 items-center" 
              >
                + 01 234 567 88
              </p>
              <p className="flex flex-row gap-2 items-center" 
              >
                 + 01 234 567 89
              </p>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Contact
