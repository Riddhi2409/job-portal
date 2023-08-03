import React from 'react'
import CompanyIntro from '../components/CompanyIntro'
import Steps from '../components/Steps'
import Contact from '../components/Contact'
import RecruitTeam from '../components/RecruitTeam'
import Tips3 from '../components/Tips3'
import LastTips from '../components/LastTips'

function Company() {
  return (
    <div className='relative top-[9vh] z-0 overflow-x-hidden flex flex-col gap-8 justify-center items-center'>
      <CompanyIntro />
      <Steps img1={"https://d383au3bye3rv1.cloudfront.net/static/images/optimized/feature_icon.png"} img2={"https://d383au3bye3rv1.cloudfront.net/static/images/optimized/feature_icon_3.png"} img3={"https://d383au3bye3rv1.cloudfront.net/static/images/optimized/icon2.png"} hd1={"ACCESS CURATED CANDIDATES"} hd2={"HIRE WITHIN 2 WEEKS"} hd3={"PAY ONLY IF YOU HIRE"} d1={"A high quality, ready-to-interview candidate pool, handpicked by us."} d2={"Candidates respond in under 72 hours. Set up interviews in days, hire within 2 weeks."} d3={"We charge a fair placement fee, with a 2 month candidate-replacement guarantee!"} />
      <RecruitTeam />
      <div className='flex flex-col gap-[5em] justify-center items-center'>
      <Tips3 hd1={"2-week batches"} d1={"Every two weeks we remove all existing candidates and replace them with a brand new batch - to ensure that you always see fresh candidates."} img1={"https://d383au3bye3rv1.cloudfront.net/static/images/optimized/E%20-%20Batches.png"} />

      <LastTips />
      <Tips3 hd1={"Only candidates who are ready-to-interview"} d1={"We verify candidates are ready to interview before accepting them onto TopHire. No more reaching out to candidates who are no longer open to a move."} img1={"https://d383au3bye3rv1.cloudfront.net/static/images/optimized/Employer%20-%20Curated%20Candidates.png"} />
      </div>
      <Contact />
    </div>
  )
}

export default Company

