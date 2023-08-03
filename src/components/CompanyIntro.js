import React from "react";

function CompanyIntro() {
  return (
    <div className="grid md:grid-cols-2  w-screen items-center justify-center sm:px-28 mt-16 px-3">
      <div className="flex flex-col gap-10 items-center md:items-start md:justify-start justify-center">
        <div className="flex flex-col text-4xl max-sm:text-2xl font-bold justify-start gap-2 text-left ">
          <h1>You have a job.</h1>
          <h1> We have 8m+ </h1>
          <h1>job seekers.</h1>
        </div>
        <p className="text-lg max-sm:text-sm">8 million startup-ready candidates from around the world, unique details you can't find anywhere else, and all the tools you need to hire - get everything set up in 10 minutes, for free.</p>
        <button className=" bg-blue-600 text-white font-bold px-6 py-4 rounded-md hover:bg-white hover:text-blue-600 hover:border-2 border-blue-600 w-fit">Sign Up for free</button>
      </div>
      <div>
        <img src="https://static.vecteezy.com/system/resources/previews/002/136/501/non_2x/online-recruitment-concept-people-searching-candidate-for-a-new-employee-human-resource-and-hiring-concept-illustration-vector.jpg " width={"600px"} alt=""/>
      </div>
    </div>
  );
}

export default CompanyIntro;
