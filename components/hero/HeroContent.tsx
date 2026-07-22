"use client";

import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <div className="mx-auto flex min-h-screen max-w-7xl items-center px-8">

      {/* LEFT SIDE */}
      <div className="w-full lg:w-1/2">

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-green-600 font-bold tracking-[0.35em]"
        >
          CLEAN ENERGY • SMART INVESTMENT
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-6xl font-black leading-tight text-gray-900"
        >
          Power Your Future
          <br />
          With Renewable
          <br />
          Energy
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8 max-w-xl text-xl leading-9 text-gray-700"
        >
          Solar, wind and smart energy solutions designed to
          reduce electricity bills while building a cleaner future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-10 flex gap-5"
        >
          <button className="rounded-full bg-green-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:bg-green-700">
            Get Free Consultation
          </button>

          <button className="rounded-full border-2 border-green-600 px-8 py-4 font-semibold text-green-700 transition hover:bg-green-600 hover:text-white">
            Calculate Savings
          </button>
        </motion.div>

      </div>

      {/* RIGHT SIDE - Reserved for our animated renewable energy scene */}
      <div className="hidden lg:block lg:w-1/2" />

    </div>
  );
}