import React from 'react'
import Marque from './Marque'

function Company() {
  return (
    <div className='flex flex-col gap-8 w-screen justify-center items-center font-mono font-bold'>
        <div className='text-2xl'>
            <h1>LEADING COMPANIES BUILD TEAMS ON TalentList</h1>
        </div>
        <div className='w-screen border-y-2'>
            <Marque />
        </div>
      <div className='grid md:grid-cols-3 items-center justify-center text-3xl font-bold md:px-4 md:py-8 py-4 max-md:gap-[3em] border-2 w-screen' >
        <div className='flex flex-col gap-2 text-blue-700 justify-center items-center '>
            <h1 className='text-4xl '>130K +</h1>
            <h1 className='text-center'>Tech Jobs</h1>
        </div>
        <div className='flex flex-col gap-2 text-orange-700 justify-center items-center border-x-2 '>
            <h1 className='text-4xl '>6,000,000</h1>
            <h1 className='text-center'>Matches Made</h1>
        </div>
        <div className='flex flex-col gap-2 text-green-700 justify-center items-center'>
            <h1 className='text-4xl '>8M +</h1>
            <h1 className='text-center'>Startup-ready candidates</h1>
        </div>
      </div>
    </div>
  )
}

export default Company
