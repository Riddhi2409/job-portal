import React from "react";
import Steps from "./Steps";
import Company from "./Company";
import AnotherTips from "./AnotherTips";
import Tips3 from "./Tips3";

function ApplyTips() {
  return (
    <div className="relative flex flex-col gap-[10em] justify-center items-center w-screen ">
      <Steps img1={"https://d383au3bye3rv1.cloudfront.net/static/images/optimized/feature_icon_2.png"} img2={"	https://d383au3bye3rv1.cloudfront.net/static/images/optimized/icon1.png"} img3={"https://d383au3bye3rv1.cloudfront.net/static/images/optimized/icon2.png"} hd1={"STEP 1: COMPLETE PROFILE"} hd2={"STEP 2: RECEIVE JOB OFFERS"} hd3={"STEP 3: ACCEPT DREAM JOB"} d1={"Once you are approved, we showcase you to leading Indian technology startups"} d2={"Once you are approved, we showcase you to leading Indian technology startups"} d3={"Once you are approved, we showcase you to leading Indian technology startups"}/>
      <Company />
      <div className="flex flex-col gap-12 justify-center">
        <h1 className="text-center text-3xl font-semibold">How it works</h1>
        <div className="grid md:grid-cols-2 justify-center items-start  max-md:gap-12 max-md:items-center px-4">
          <div className="flex flex-col  py-2 items-start gap-8 justify-start">
            <div className="flex flex-col gap-6">
              <div className="w-[5em] h-2 bg-sky-500 rounded-full"></div>
              <h1 className="text-3xl font-bold text-sky-500">
                Create your free candidate profile
              </h1>
            </div>
            <p className=" text-lg">
              Answer a few questions about yourself - it takes less than 5
              minutes.
            </p>
            <div className="text-lg">
              <p>‍🏅 What is your biggest achievement?</p>
              <p>‍👑️ What does your ideal opportunity look like?</p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="https://d383au3bye3rv1.cloudfront.net/static/images/optimized/C%20-%20Create%20Profile.png"
              height="3em"
              alt=""
            />
          </div>
        </div>
      </div>
      <AnotherTips />
      <Tips3 hd1={"Salary & Role transparency"} d1={" Interview requests from companies mention salary and role details upfront - before you decide to accept or decline them."} img1={"https://d383au3bye3rv1.cloudfront.net/static/images/optimized/C%20-%20Transparency.png"}/>
    </div>
  );
}

export default ApplyTips;
