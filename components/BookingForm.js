"use client";

import { useState } from "react";

export default function BookingForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    package: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    await fetch("/api/bookings", {
      method: "POST",
      body: JSON.stringify(form),
    });

    alert("Booking Submitted!");
  };

  return (
    <form onSubmit={submitForm}>
      <input name="name" placeholder="Name" onChange={handleChange} required /><br />
      <input name="phone" placeholder="Phone" onChange={handleChange} required /><br />
      <input name="date" type="date" onChange={handleChange} required /><br />
      <select name="package" onChange={handleChange} required>
        <option value="">Select Package</option>
        <option value="Basic">Basic</option>
        <option value="Premium">Premium</option>
      </select><br />
      <button type="submit">Book Now</button>
    </form>
  );
}
