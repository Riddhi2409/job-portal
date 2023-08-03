import React from 'react'
import Intro from '../components/Intro'
import ApplyTips from '../components/ApplyTips'
import Steps from '../components/Steps'
import Contact from '../components/Contact'

function Home() {
  return (
    <div className='relative top-[10vh] z-0 overflow-x-hidden' >
      <Intro />
      <ApplyTips />
      <Contact />
    </div>
  )
}

export default Home
