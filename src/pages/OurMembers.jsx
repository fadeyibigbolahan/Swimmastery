import React, { useState } from "react";
import { countries } from "../data/Countries";
import { members } from "../data/Members";
import { LiaTimesSolid } from "react-icons/lia";

const OurMembers = () => {
  const [activeCategory, setActiveCategory] = useState("");
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeDetails, setActiveDetails] = useState(null);
  //   const [searchTerm, setSearchTerm] = useState("All");

  // Filter images based on search term
  const filteredMembers = members.filter((image) =>
    image.country.toLowerCase().includes(activeCategory.toLowerCase())
  );

  return (
    <div>
      <div className="flex flex-col justify-center items-center w-full p-[50px]">
        <div className="w-full border-blue-800 border-b m-[50px]">
          <p className="text-[20px] md:text-[40px] text-[#2D7C9C] my-6">
            Our Coach and Instructor Members
          </p>
        </div>
        <div className="flex flex-wrap flex-col md:flex-row w-full">
          <div className="flex flex-wrap justify-center items-center flex-row w-full md:w-1/2">
            {countries.map((country) => (
              <div
                key={country.id}
                onClick={
                  country.name === "All"
                    ? () => setActiveCategory("")
                    : () => setActiveCategory(country.name)
                }
                className={`flex justify-center items-center border border-[#8BCDDE50] p-3 m-1 cursor-pointer ${
                  activeCategory === country.name ? "bg-[#8BCDDE50]" : ""
                }`}
              >
                <p className="text-[16px] text-[#8BCDDE] hover:text-black text-center">
                  {country.name}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-content items-center w-full md:w-1/2">
            <div></div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full md:p-[50px]">
          {filteredMembers.map((m, index) => (
            <div
              key={m.id}
              className="relative overflow-hidden w-full m-2"
              // Handle mouse enter and leave events
              onClick={() => setActiveDetails(m)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={m.img}
                alt={`Grid ${m.id}`}
                className="w-full h-full object-cover"
              />

              {/* Common Styles for Name Display */}
              <div
                className={`absolute inset-0 flex flex-col items-start p-2 justify-end transition-opacity duration-300 ${
                  hoveredIndex === index ? "bg-black bg-opacity-50" : ""
                }`}
              >
                <span className="text-white text-lg font-bold">{m.name}</span>
                <span className="text-white text-lg">{m.country}</span>
                {/* Display address only on hover */}
                {hoveredIndex === index && (
                  <div className="flex flex-col">
                    <span className="text-white text-sm my-px">
                      {m.address}
                    </span>
                    <span className="text-white text-sm my-px">{m.phone}</span>
                    <span className="text-white text-sm my-px">{m.email}</span>
                    <span className="text-white text-sm my-px">
                      {m.website}
                    </span>
                    <div className="flex flex-row my-4"></div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {activeDetails !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="overflow-y-auto md:overflow-y-hidden flex md:flex-row flex-col bg-white w-[95vw] h-[95vh] md:w-[80vw] md:h-[90vh] rounded shadow-lg relative">
            <div className="flex justify-center items-center md:w-1/2 w-full h-full">
              <img
                src={activeDetails?.img}
                alt={activeDetails?.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-start items-start md:w-1/2 w-full p-6 h-full">
              <span className="text-[#2F80A0] text-lg font-bold">
                {activeDetails?.name}
              </span>
              <span className="text-[#2F80A0]">{activeDetails?.country}</span>
              <div className="flex flex-col my-4">
                <span className="text-[#2F80A0]">{activeDetails?.address}</span>
                <span className="text-[#FFA162]">{activeDetails?.phone}</span>
                <span className="text-[#FFA162]">{activeDetails?.email}</span>
                <span className="text-[#FFA162]">{activeDetails?.website}</span>
                <div className="md:max-h-[40%] md:overflow-y-auto my-4">
                  <span className="text-[#2F80A0]">{activeDetails?.about}</span>
                </div>
              </div>
            </div>
            <div
              onClick={() => setActiveDetails(null)}
              className="fixed md:absolute flex justify-center items-center right-2 m-2 cursor-pointer"
            >
              <LiaTimesSolid />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OurMembers;
