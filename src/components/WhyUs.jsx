import React from "react";
import why from "../assets/why.jpeg";
import why1 from "../assets/why1.png"
import why2 from "../assets/why2.png"
import why3 from "../assets/why3.png"
import why4 from "../assets/why4.png"
import why5 from "../assets/why5.png"
const WhyUs = () => {
  const content = [
    {
      image: why3,
      content: "Expert guidance for a stress-free home buying experience.",
    },
    {
      image: why4,
      content: "Hassle-free property management for realtors and investors.",
    },
    {
      image: why2,
      content: "Accurate property appraisals to make informed decisions.",
    },
    {
      image: why1,
      content:
        "Expert legal and financial assistance for a smooth transaction.",
    },
    {
      image: why5,
      content:
        "Our seasoned team excels in real estate with years of successful market navigation.",
    },
  ];
  return (
    <section className="flex flex-col md:flex-row items-center justify-center p-10 gap-10 bg-white">
      {/* Left Content */}
      <div className="flex flex-col gap-6 max-w-lg">
        {content.map((data, index) => {
          return (
            <div key={index} className="flex items-start gap-4">
              <img
                src={data.image}
                alt="Expert guidance"
                className="w-8 h-8"
              />
              <p className="text-gray-700">
                {data.content}
              </p>
            </div>
          );
        })}
      </div>

      {/* Middle Image */}
      <div className="flex-shrink-0">
        <img
          src={why}
          alt="Burj Khalifa"
          className="rounded-2xl object-cover w-[400px] h-[500px]"
        />
      </div>

      {/* Right Content */}
      <div className="max-w-lg">
        <h2 className="text-2xl font-semibold text-[#974216] mb-2">Why Us</h2>
        <h3 className="text-4xl font-bold text-gray-800 mb-6">
          We Will Help You Find Your Home
        </h3>
        <p className="text-gray-600 leading-relaxed">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. A small river named Duden flows by their place and
          supplies it with the necessary regelialia. It is a paradisematic
          country, in which roasted parts of sentences fly into your mouth.
        </p>
      </div>
    </section>
  );
};

export default WhyUs;
