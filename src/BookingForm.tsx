import React, { useState } from "react";

const BookingForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-[#191b1d] text-white px-4 py-12 flex justify-center">
      <form
        className="bg-[#232323] p-6 rounded shadow w-full max-w-lg space-y-4"
        action="https://formspree.io/f/xzzejkae" // 🔁 Replace with your actual Formspree endpoint
        method="POST"
        onSubmit={() => setSubmitted(true)}
      >
        <h2 className="text-2xl font-bold mb-4 text-center">Book Your Airport Assist</h2>

        <input
          name="name"
          type="text"
          required
          placeholder="Full Name"
          className="w-full p-3 rounded bg-[#292929] text-white"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          className="w-full p-3 rounded bg-[#292929] text-white"
        />
        <input
          name="phone"
          type="tel"
          required
          placeholder="WhatsApp Number"
          className="w-full p-3 rounded bg-[#292929] text-white"
        />
        <input
          name="airport"
          type="text"
          required
          placeholder="Arrival Airport"
          className="w-full p-3 rounded bg-[#292929] text-white"
        />
        <input
          name="flight"
          type="text"
          required
          placeholder="Flight Number"
          className="w-full p-3 rounded bg-[#292929] text-white"
        />
        <input
          name="arrival"
          type="datetime-local"
          required
          className="w-full p-3 rounded bg-[#292929] text-white"
        />

        <button
          type="submit"
          className="bg-[#bfb1ac] text-[#191b1d] font-bold px-5 py-3 rounded hover:brightness-90 transition w-full"
        >
          {submitted ? "Submitting..." : "Submit Booking"}
        </button>
      </form>
    </div>
  );
};

export default BookingForm;