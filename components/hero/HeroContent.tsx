"use client";

import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <div className="relative z-20 mx-auto flex min-h-screen max-w-7xl items-center px-6">
      <div className="max-w-2xl">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-green-600"
        >
          Renewable Energy Solutions
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-6 text-5xl font-extrabold leading-tight text-gray-900 md:text-7xl"
        >
          Power Your Future
          <br />
          With Renewable Energy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mb-10 text-lg leading-8 text-gray-700"
        >
          Solar • Wind • Energy Storage
          <br />
          Smart renewable energy solutions for homes,
          businesses and industries.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex flex-wrap gap-5"
        >
          <button className="rounded-full bg-green-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-green-700">
            Get Free Consultation
          </button>

          <button className="rounded-full border-2 border-green-600 px-8 py-4 font-semibold text-green-700 transition hover:bg-green-600 hover:text-white">
            Calculate Savings
          </button>
        </motion.div>

      </div>
    </div>
  );
}