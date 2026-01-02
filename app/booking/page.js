"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
export default function BookingPage() {
  
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    const form = e.target;

    const fullName = form.fullName.value.trim();
    const phone = form.phone.value.trim();
    const date = form.date.value;

    if (!fullName || !phone || !date) {
      setStatus({
        type: "error",
        message: "Name, Phone Number, and Date are required.",
      });
      setLoading(false);
      return;
    }

    const payload = {
      fullName,
      phone,
      email: form.email.value || "N/A",
      date,
      time: form.time.value || "N/A",
      venue: form.venue.value || "N/A",
      packageName: form.package.value,
      extras:
        Array.from(form.querySelectorAll('input[name="extras"]:checked'))
          .map((i) => i.value)
          .join(", ") || "None",
      comments: form.comments.value || "No comments",
    };

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus({
        type: "success",
        message: "✅ Booking sent successfully!",
      });
      form.reset();
    } catch (err) {
      setStatus({
        type: "error",
        message: "⚠️ Failed to send booking. Try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500";

  return (
    <div className="min-h-screen bg-purple-100 flex items-center justify-center p-6 pb-30">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl rounded-3xl bg-white p-8 shadow-xl"
      >
        <h1 className="text-3xl font-bold mb-6">
          Wedding Photography <span className="text-purple-600">Booking</span>
        </h1>

        <input name="fullName" placeholder="Full Name *" className={inputClass} />

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <input name="phone" placeholder="Phone *" className={inputClass} />
          <input name="email" placeholder="Email" className={inputClass} />
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <input type="date" name="date" className={inputClass} />
          <input type="time" name="time" className={inputClass} />
        </div>

        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <input name="venue" placeholder="Venue" className={inputClass} />
          <select name="package" className={inputClass}>
            <option>Basic</option>
            <option>Standard</option>
            <option>Premium</option>
          </select>
        </div>

        <div className="mt-4">
          <label className="font-semibold">Extras</label>
          <div className="grid sm:grid-cols-2 gap-2 mt-2">
            {["Engagement Shoot", "Second Photographer", "Prints", "Album"].map(
              (x) => (
                <label key={x} className="flex gap-2 items-center">
                  <input type="checkbox" name="extras" value={x} />
                  {x}
                </label>
              )
            )}
          </div>
        </div>

        <textarea
          name="comments"
          placeholder="Comments"
          className={`${inputClass} mt-4 h-28`}
        />

        {status.message && (
          <div
            className={`mt-4 p-3 rounded ${
              status.type === "success"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
            }`}
          >
            {status.message}
          </div>
        )}

        <button
          disabled={loading}
          className={`mt-6 w-full py-3 rounded-xl text-white font-bold ${
            loading ? "bg-gray-400" : "bg-purple-600 hover:bg-purple-700"
          }`}
        >
          {loading ? "Processing..." : "Send Booking ➜"}
        </button>
      </form>
    </div>
  );
}

