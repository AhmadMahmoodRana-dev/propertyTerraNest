import React, { useState } from "react";
import Navbar from "../components/Navbar";
import SearchBar from "../components/common/SearchBar";
import PropertyCard from "../components/common/PropertyCard";
import project1 from "../assets/project1.jpg";
import project2 from "../assets/project2.jpg";
import project3 from "../assets/project3.jpg";
import project4 from "../assets/project4.jpg";
import project5 from "../assets/project5.jpg";
import project6 from "../assets/project6.jpg";
import project7 from "../assets/project7.jpg";
import project8 from "../assets/project8.jpg";
import project9 from "../assets/project9.jpg";

const Projects = () => {

    const Projects = [
      {
        id: 1,
        categories: "Apartment",
        prices: "AED2.16M",
        completition: "31-12-2029",
        developer: "Damac",
        name: "SeaCrest",
        location: "Maritime city, Dubai",
        image: project1,
        tag: "Pre Sale",
      },
      {
        id: 2,
        categories: "Apartment",
        prices: "AED2.16M",
        completition: "31-12-2029",
        developer: "Damac",
        name: "SeaCrest",
        location: "Maritime city, Dubai",
        image: project2,
        tag: "Pre Sale",
      },
      {
        id: 3,
        categories: "PentHouse",
        prices: "AED2.16M",
        completition: "31-12-2029",
        developer: "Damac",
        name: "SeaCrest",
        location: "Maritime city, Dubai",
        image: project3,
        tag: "Pre Sale",
      },
      {
        id: 4,
        categories: "Apartment",
        prices: "AED2.16M",
        completition: "31-12-2029",
        developer: "Damac",
        name: "SeaCrest",
        location: "Maritime city, Dubai",
        image: project4,
        tag: "Pre Sale",
      },
      {
        id: 5,
        categories: "Duplex",
        prices: "AED2.16M",
        completition: "31-12-2029",
        developer: "Damac",
        name: "SeaCrest",
        location: "Maritime city, Dubai",
        image: project5,
        tag: "Pre Sale",
      },
      {
        id: 6,
        categories: "Villa",
        prices: "AED2.16M",
        completition: "31-12-2029",
        developer: "Damac",
        name: "SeaCrest",
        location: "Maritime city, Dubai",
        image: project6,
        tag: "Pre Sale",
      },
      {
        id: 7,
        categories: "Townhouse",
        prices: "AED2.16M",
        completition: "31-12-2029",
        developer: "Damac",
        name: "SeaCrest",
        location: "Maritime city, Dubai",
        image: project7,
        tag: "Pre Sale",
      },
      {
        id: 8,
        categories: "Mansion",
        prices: "AED2.16M",
        completition: "31-12-2029",
        developer: "Damac",
        name: "SeaCrest",
        location: "Maritime city, Dubai",
        image: project8,
        tag: "Pre Sale",
      },
      {
        id: 9,
        categories: "SkyVilla",
        prices: "AED2.16M",
        completition: "31-12-2029",
        developer: "Damac",
        name: "SeaCrest",
        location: "Maritime city, Dubai",
        image: project9,
        tag: "Pre Sale",
      },
      {
          id: 10,
          categories: "Villa",
          prices: "AED2.16M",
          completition: "31-12-2029",
          developer: "Damac",
          name: "SeaCrest",
          location: "Maritime city, Dubai",
          image: project6,
          tag: "Pre Sale",
        },
        {
          id: 11,
          categories: "Townhouse",
          prices: "AED2.16M",
          completition: "31-12-2029",
          developer: "Damac",
          name: "SeaCrest",
          location: "Maritime city, Dubai",
          image: project7,
          tag: "Pre Sale",
        },
        {
          id: 12,
          categories: "Mansion",
          prices: "AED2.16M",
          completition: "31-12-2029",
          developer: "Damac",
          name: "SeaCrest",
          location: "Maritime city, Dubai",
          image: project8,
          tag: "Pre Sale",
        },
    ];
  

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  // Calculate total pages
  const totalPages = Math.ceil(Projects.length / itemsPerPage);

  // Get current page data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProjects = Projects.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="w-full min-h-screen h-auto bg-[#ededed]">
      <Navbar />
      <div className="relative bg-black w-full h-[385px] pb-20">
        <iframe
          src="https://www.google.com/maps/embed?pb=..."
          width="100%"
          height="400"
          className="border-none absolute top-[-15px]"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          loading="lazy"
        ></iframe>
        <div className="absolute bottom-0 w-full flex justify-center">
          <SearchBar />
        </div>
      </div>

      {/* Cards Grid */}
      <div className="w-full h-auto grid grid-cols-3 px-28 gap-8 py-10">
        {currentProjects.map((item) => (
          <PropertyCard
            key={item.id}
            category={item.categories}
            completition={item.completition}
            developer={item.developer}
            image={item.image}
            location={item.location}
            name={item.name}
            price={item.prices}
            tag={item.tag}
          />
        ))}
      </div>

      {/* Pagination Controls */}
      {Projects.length > itemsPerPage && (
        <div className="flex justify-center items-center space-x-2 pb-10">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === index + 1
                  ? "bg-black text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {index + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
