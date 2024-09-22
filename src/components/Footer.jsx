import React, { useState } from "react";
import imagell from "../images/imageII.jpg";

const Footer = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page refresh
    console.log("Form submitted:", formData);
    // You can add form validation or further processing here
  };

  return (
    <div className="flex flex-col justify-center items-center p-10 bg-[#2D7C9C]">
      <h2 className="text-white text-[30px] text-center">
        Free E-Book - 3 Steps to Easier Breathing
      </h2>

      <form
        className="flex flex-col md:flex-row justify-evenly items-center w-full my-[50px]"
        onSubmit={handleSubmit}
      >
        <div className="md:w-1/4 w-[100%] m-2">
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300"
            placeholder="Enter your first name"
            required
          />
        </div>
        <div className="md:w-1/4 w-[100%] m-2">
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300"
            placeholder="Enter your last name"
            required
          />
        </div>
        <div className="md:w-1/4 w-[100%] m-2">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-4 border border-gray-300"
            placeholder="Enter your email address"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-white text-[#2D7C9C] font-bold p-4 md:w-[20%] w-[100%] transition duration-300"
        >
          DOWNLOAD NOW
        </button>
      </form>
      <p className="text-white my-2">We respect your privacy</p>
      <img
        src={imagell}
        alt={``}
        className="w-[200px] h-[150px] object-cover"
      />
    </div>
  );
};

export default Footer;
