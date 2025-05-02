import React from "react";
import LatestNewsCard from "./common/LatestNewsCard";
import latest1 from "../assets/latest1.jpg";
import latest2 from "../assets/latest2.jpg";
import latest3 from "../assets/latest3.jpg";

const LatestNews = () => {
  const data=[
    {
      img:latest1,
      date:"Dec 26,2024",
      mainHeading:"Prime Haven Properties",
      spanHeading:"Home Improvement",
      secondaryHeading:"Renting in Dubai – Tips for Te"
    },
    {
      img:latest2,
      date:"Dec 26,2024",
      mainHeading:"Prime Haven Properties",
      spanHeading:"Buying a Home",
      secondaryHeading:"Secondary Market Properties in"
    },
    {
      img:latest3,
      date:"Dec 26,2024",
      mainHeading:"Prime Haven Properties",
      spanHeading:"Home Improvement",
      secondaryHeading:"Why Invest in Off-Plan Propert"
    }
  ]
  return (
    <div className="w-full h-auto bg-white pt-10 xl:px-32 px-12 pb-20">
      <div className="filterSection flex flex-col justify-center items-center pb-10">
        <h4 className="text-[#974216] text-sm pb-1 font-semibold uppercase tracking-widest">
          LATEST NEWS
        </h4>
        <h1 className="text-black text-5xl font-normal mt-1">
          The Most Recent Estate
        </h1>
      </div>
      <div className="main-card-container w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
      {
        data.map((item,index) =>{
          return(
            <LatestNewsCard key={index} image={item.img} date={item.date} mainHeading={item.mainHeading} spanHeading={item.spanHeading} secondaryHeading={item.secondaryHeading}/>
          )
        })
      }
      </div>
    </div>
  );
};

export default LatestNews;
