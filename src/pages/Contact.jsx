import { useState } from "react";
// import emailjs from "emailjs-com";
import Navbar from "./Navbar";
import Home from "./Home";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [popup, setPopup] = useState(""); // To show popup message

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // EmailJS integration
    emailjs
      .send(
        "your_service_id", // Replace with your EmailJS Service ID
        "your_template_id", // Replace with your EmailJS Template ID
        {
          to_email: "gaurangisharma3107@gmail.com", // Your email
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "your_public_key" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setPopup("Message sent successfully! ✅");
          setFormData({ email: "", subject: "", message: "" });
        },
        () => {
          setPopup("Failed to send message. ❌ Try again.");
        }
      );

    setTimeout(() => setPopup(""), 3000); // Hide popup after 3 sec
  };

  return (
    <>
    <div className="bg-[#3a2e20] h-screen">
        <Navbar />
        {/* <Home/> */}
    <div className="max-w-md mx-auto p-6 top-20 bg-white shadow-lg rounded-xl relative">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>

      {/* Popup message */}
      {popup && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-4 py-2 rounded-lg shadow-md">
          {popup}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
            className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full p-2 mt-1 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
    </div>
    </>
  );
}
