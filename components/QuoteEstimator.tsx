"use client";

import { useState } from "react";

export default function QuoteEstimator() {
  const [serviceType, setServiceType] = useState("Diagnostics");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [equipment, setEquipment] = useState("");
  const [urgency, setUrgency] = useState("Standard");
  const [siteNotes, setSiteNotes] = useState("");
  const [estimatedHours, setEstimatedHours] = useState("");
  const [addOns, setAddOns] = useState({
    parts: false,
    diagnosticsOnly: false,
    callback: false,
  });

  const HOURLY_RATE = 550;
  const CALL_OUT_FEE = 350;
  const URGENCY_MULTIPLIERS = {
    Standard: 1,
    "Same-day": 1.25,
    Emergency: 1.5,
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setAddOns((prev) => ({ ...prev, [name]: checked }));
  };

  const calculateEstimate = () => {
    const hours = parseFloat(estimatedHours) || 0;
    const multiplier = URGENCY_MULTIPLIERS[urgency];
    const hourlyTotal = HOURLY_RATE * hours * multiplier;
    return (hourlyTotal + CALL_OUT_FEE).toFixed(2);
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-md max-w-2xl mx-auto mt-16 space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">
        Get a Field Service Estimate
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Service Type
          </label>
          <select
            value={serviceType}
            onChange={(e) => setServiceType(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ffb200]"
          >
            <option>Diagnostics</option>
            <option>Installation</option>
            <option>Repairs</option>
            <option>Emergency call-out</option>
          </select>
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Preferred Date
          </label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ffb200]"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Preferred Time
          </label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ffb200]"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Equipment Type
          </label>
          <input
            type="text"
            value={equipment}
            onChange={(e) => setEquipment(e.target.value)}
            placeholder="e.g. CAT ADT 740B"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ffb200]"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Urgency Level
          </label>
          <select
            value={urgency}
            onChange={(e) => setUrgency(e.target.value)}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ffb200]"
          >
            <option>Standard</option>
            <option>Same-day</option>
            <option>Emergency</option>
          </select>
        </div>

        <div>
          <label className="block font-medium text-gray-700 mb-1">
            Estimated Time on Site (hours)
          </label>
          <input
            type="number"
            min="0"
            value={estimatedHours}
            onChange={(e) => setEstimatedHours(e.target.value)}
            placeholder="e.g. 2"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ffb200]"
          />
        </div>
      </div>

      <div>
        <label className="block font-medium text-gray-700 mb-1">
          Site Access Notes
        </label>
        <textarea
          value={siteNotes}
          onChange={(e) => setSiteNotes(e.target.value)}
          className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ffb200]"
          rows={3}
        />
      </div>

      <div className="space-y-2">
        <p className="font-medium text-gray-700">Optional Add-ons</p>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="parts"
            checked={addOns.parts}
            onChange={handleCheckboxChange}
          />
          Require parts supply
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="diagnosticsOnly"
            checked={addOns.diagnosticsOnly}
            onChange={handleCheckboxChange}
          />
          On-site diagnostics only
        </label>
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            name="callback"
            checked={addOns.callback}
            onChange={handleCheckboxChange}
          />
          Request technician call-back
        </label>
      </div>

      <div>
        <button
          className="bg-[#ffb200] text-black font-semibold px-6 py-2 rounded-md hover:bg-black hover:text-white transition-all"
          onClick={calculateEstimate}
        >
          Get Estimate
        </button>
      </div>

      <div className="pt-4">
        <p className="text-green-700 font-medium text-lg">
          Estimated Cost: R{calculateEstimate()}
        </p>
        <p className="text-sm text-gray-500">
          Includes call-out fee of R{CALL_OUT_FEE}
        </p>
      </div>
    </div>
  );
}
