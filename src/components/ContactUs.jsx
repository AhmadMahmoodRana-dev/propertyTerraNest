import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const ContactUs = () => {
  const [captchaValue, setCaptchaValue] = useState(null);

  const handleCaptchaChange = (value) => {
    console.log("Captcha value:", value);
    setCaptchaValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please complete the reCAPTCHA");
      return;
    }

    // Submit form logic
    alert("Form submitted successfully!");
  };
  return (
    <div className="w-full h-auto min-h-[75vh] contact-bg flex flex-col md:flex-row">
      {/* Left Side */}
      <div className="w-full md:w-1/2 h-[300px] md:h-auto text-white flex flex-col justify-center items-center px-4 py-8">
        <div className="text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold">
            We are Eager to Hear From <br className="hidden md:block" /> You!
          </h1>
          <h3 className="uppercase mt-3 text-sm sm:text-base">Contact Us</h3>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 flex justify-center items-center px-4 py-8">
        <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] bg-white rounded-2xl p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <label className="font-semibold">
                Name <span className="text-red-600 text-lg">*</span>
              </label>
              <input
                type="text"
                className="w-full py-2 rounded-sm px-4 border my-2 border-gray-300 outline-none text-sm sm:text-base"
              />
            </div>
            <div className="w-full">
              <label className="font-semibold">
                Email <span className="text-red-600 text-lg">*</span>
              </label>
              <input
                type="email"
                className="w-full py-2 rounded-sm px-4 border my-2 border-gray-300 outline-none text-sm sm:text-base"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <label className="font-semibold">
                Content <span className="text-red-600 text-lg">*</span>
              </label>
              <textarea
                rows={5}
                type="email"
                placeholder="Write Your Message Here"
                className="w-full pt-5 rounded-sm px-4 border my-2 border-gray-300 outline-none text-sm sm:text-base"
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="w-full">
              <ReCAPTCHA
                sitekey="6LebWCgrAAAAABKRkfSQiHuP29Mjr8rLC85bQH3V" // Replace this with your real site key
                onChange={handleCaptchaChange}
              />
            </div>
          </div>
          <button className="bg-[#974216] text-white px-4 py-2 rounded-sm my-4 hover:cursor-pointer">Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
