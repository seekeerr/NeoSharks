"use client";
import React, { useState } from "react";

const ContactForm3 = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        setError(result.error || "Something went wrong");
      } else {
        setSuccess("✅ Message sent successfully!");
        e.target.reset();
      }
    } catch (err) {
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="messages" />
      <div className="input-bg-group position-relative controls">
        <div className="d-block">
          <div className="input-group-meta form-group mb-50">
            <label className="d-block">Name*</label>
            <input
              type="text"
              placeholder="Bostmai Hasan"
              name="name"
              required
            />
          </div>
        </div>

        <div className="d-block">
          <div className="input-group-meta form-group mb-60">
            <label className="d-block">Email*</label>
            <input
              type="email"
              placeholder="demo@domain.com"
              name="email"
              required
            />
          </div>
        </div>

        <div className="d-block">
          <div className="input-group-meta form-group">
            <textarea
              placeholder="Your message*"
              name="message"
              required
            />
          </div>
        </div>
      </div>

      <button
        className="btn-one fw-500 w-100 fs-18 d-block mt-45"
        type="submit"
        disabled={loading}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {success && <p className="text-success mt-3">{success}</p>}
      {error && <p className="text-danger mt-3">{error}</p>}
    </form>
  );
};

export default ContactForm3;
