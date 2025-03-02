import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

function ContactUs() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar */}
      <div className="bg-purple-800 text-white p-8 w-1/3 h-screen">
        <h2 className="text-2xl font-semibold mb-4 text-left">Get in Touch</h2>
        <p className="text-lg mb-8 text-left">
          At Engineer Study Hub, we are committed to providing the best learning
          resources for aspiring developers and engineers. Whether you need
          support, have a query, or want to collaborate, feel free to reach out!
       
        </p>

        <div className="mb-6 text-left">
          <h3 className="text-2xl font-semibold">Contact Us</h3>
          <p className="text-lg">info@engineerstudyhub.in</p>
          <p className="text-lg">+91 8275877976</p>
        </div>

        <div className="mb-6 text-left">
          <h3 className="text-2xl font-semibold">Address</h3>
          <p className="text-lg">
            Chatrapati Square, Nagpur, Maharashtra, India
          </p>
        </div>

        <div className="mb-6 text-left">
          <div className="flex space-x-4 mt-8 text-2xl text-left">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
      </div>

      {/* Right Form Section */}
      <div className="bg-white p-8 w-2/3 h-screen">
        <h2 className="text-3xl font-semibold mb-4">
          Have Questions? We're Here to Help!
        </h2>
        <p className="mb-8">
          You can reach us anytime via{" "}
          <a href="mailto:info@engineerstudyhub.in" className="text-blue-600">
            info@engineerstudyhub.in
          </a>
        </p>

        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your Name"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter a valid email address"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your phone (eg. +91 8275877976)"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              How can we help?
            </label>
            <textarea
              id="message"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
