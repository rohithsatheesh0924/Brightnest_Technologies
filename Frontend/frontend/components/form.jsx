import React from "react";
import { useState } from "react";
import axios from "axios";

export default function Form() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // submit form using axios
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await axios.post("http://localhost:5000/send-email", {
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
        message: formData.message,
      });

      if (response.data.success) {
        setStatus("✅ Message sent successfully");
        setFormData({
         name: "",
    email: "",
    phone: "",
    whatsapp: "",
    service: "",
    message: "",
        });
      } else {
        setStatus("❌ Failed to send message");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-md"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">Contact Us</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full mb-3 p-2 border rounded"
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full mb-3 p-2 border rounded"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="4"
          className="w-full mb-3 p-2 border rounded"
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>

        {status && (
          <p className="text-center mt-3 text-sm font-medium">{status}</p>
        )}
      </form>
    </div>
  );
}
