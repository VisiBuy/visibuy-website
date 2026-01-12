"use client";

import inputImg from "/input.png";
import aiImg from "/ai.png";
import outputImg from "/output.png";
import { FaCheckCircle } from "react-icons/fa";

export default function VisualVerificationEngine() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-8">
          Meet the Visual <br />
          <span className="text-blue-500">Verification Engine</span> now <br />
          powered by <span className="text-blue-500">AI</span>.
        </h2>

        <p className="text-gray-500 max-w-3xl mx-auto mb-20 text-sm md:text-base">
          The VVE is the AI-powered engine behind every verification on Visibuy.
          It analyzes your uploaded photos or videos, adds secure timestamps and
          seller identity data, and performs multiple AI checks to ensure the
          proof is authentic, original, and tamper-proof.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Input */}
          <div className=" border rounded-2xl shadow-sm overflow-hidden">
            <img
              src="/input.png"
              alt="Input-image"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* AI Verification */}
          <div className=" border rounded-2xl shadow-sm overflow-hidden">
            <img
              src="/ai.png"
              alt="Input-image"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Output */}
          <div className=" border rounded-2xl shadow-sm overflow-hidden">
            <img
              src="/output.png"
              alt="Input-image"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
