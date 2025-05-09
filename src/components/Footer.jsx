import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaFacebook,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdCall } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-black text-white pb-10 mt-auto">
      <div className="w-full border-b border-gray-700 flex gap-4 justify-end items-center pr-10 py-8">
        <h1 className="text-md italic">Follow us:</h1>
        <div className="icon-container w-8 h-8 rounded-full bg-[#ffffff1a] flex justify-center items-center">
          <FaLinkedinIn className="text-white text-xl" />
        </div>
        <div className="icon-container w-8 h-8 rounded-full bg-[#ffffff1a] flex justify-center items-center">
          <FaInstagram className="text-white text-xl" />
        </div>
        <div className="icon-container w-8 h-8 rounded-full bg-[#ffffff1a] flex justify-center items-center">
          <FaYoutube className="text-white text-xl" />
        </div>
        <div className="icon-container w-8 h-8 rounded-full bg-[#ffffff1a] flex justify-center items-center">
          <FaFacebook className="text-white text-xl" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-sm pt-6">
        <div>
          <div className="mb-2 font-semibold">
            Specializes in providing high-class tours for those in need.
            <br />
            ContactUs
          </div>
          <a
            href="mailto:info@terranest.ae"
            className="mb-1 flex items-center gap-2"
          >
            <MdOutlineEmail /> info@primehaven.ae
          </a>
          <a href="tel:+97145700137" className="mb-1 flex items-center gap-2">
            <MdCall /> +971 4 570 0137
          </a>
          <a href="tel:+971553039215" className="mb-1 flex items-center gap-2">
            <MdCall /> +971553039215
          </a>
          <span className="mb-1 flex items-center gap-2">
            <FiMapPin /> A-603 Prime Business Center JVC Dubai
          </span>
        </div>
        <div>
          <div className="font-semibold mb-2">Quick Links</div>
          <ul>
            <li>
              <a className="hover:underline" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-semibold mb-2">Quick Links</div>
          <ul>
            <li>
              <a className="hover:underline" href="#">
                Our Team
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Blogs
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Privacy Policy
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Terms and Conditions
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 text-xs text-gray-400">
        ©2025 Terra Nest Properties LLC.
      </div>
    </footer>
  );
};

export default Footer;
