"use client";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  CpuChipIcon,
  CurrencyRupeeIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { ChartBarIcon } from "lucide-react";

const challenges = [
  {
    icon: ChartBarIcon,
    title: "Optimize Non-Core Functionality",
    description:
      "Balancing core operations with essential sales and marketing tasks can drain resources and hinder overall productivity. Finding efficient ways to manage these non-core activities is crucial for sustainable growth.",
    solution:
      "Our streamlined approach helps prioritize core operations while effectively managing sales and marketing tasks, boosting overall productivity without sacrificing essential business development.",
  },
  {
    icon: GlobeAltIcon,
    title: "PAN India Presence",
    description:
      "Securing reliable and skilled technicians across PAN India presents a significant challenge. Our PAN India presence ensures we can meet your needs across all locations.",
    solution:
      "ONX's comprehensive nationwide network allows us to provide services in all locations across India.",
  },
  {
    icon: CurrencyRupeeIcon,
    title: "Rising Overhead Costs for OEMs",
    description:
      "The rising overhead costs are becoming a major challenge for your operations. ONX offers a pay-per-outcome model where you only pay after the service is successfully completed.",
    solution:
      "Our pay-per-outcome model reduces upfront costs and ensures you only pay for successful service delivery.",
  },
  {
    icon: CpuChipIcon,
    title: "Technical Dependencies",
    description:
      "The lack of a medium to track and maintain tasks effectively is a significant issue. ONX provides a comprehensive solution with our application that offers complete tracking and maintenance of tasks.",
    solution:
      "Our tech-driven platform offers comprehensive task tracking and maintenance, streamlining your technical operations.",
  },
];
const KeyChallenge = () => {
  const [activeChallenge, setActiveChallenge] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Only animate once when the component comes into view

  return (
    <section ref={ref} className="py-16 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-indigo-900 mb-4"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeInOut" }}
          >
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-[#cfd8dc] lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="34f481be-159a-4846-821d-9ca19fb6bcc5"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#34f481be-159a-4846-821d-9ca19fb6bcc5)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">Key</span>
            </span>{" "}
            Challenges in Gig Service Marketplaces
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.2 }}
          >
            ONX provides innovative solutions to these critical challenges,
            enhancing operational efficiency and driving business growth.
          </motion.p>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
          <motion.div
            className="w-full lg:w-1/2 bg-white rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}} // Animate when in view
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeChallenge}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="p-8"
              >
                <div className="flex items-center mb-4">
                  {React.createElement(challenges[activeChallenge].icon, {
                    //  size: 24,
                    className: "text-indigo-600 mr-2 w-8 h-8",
                  })}
                  <h3 className="text-xl font-semibold text-gray-800">
                    {challenges[activeChallenge].title}
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  {challenges[activeChallenge].description}
                </p>
                <div className="bg-indigo-50 p-4 rounded-md">
                  <h4 className="text-indigo-800 font-semibold mb-2">
                    ONX Solution:
                  </h4>
                  <p className="text-indigo-700">
                    {challenges[activeChallenge].solution}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.div
            className="w-full lg:w-1/2 space-y-4"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}} // Animate when in view
            transition={{ duration: 0.7, ease: "easeInOut", delay: 0.6 }}
          >
            {challenges.map((challenge, index) => (
              <motion.button
                key={index}
                className={`w-full p-4 rounded-md shadow-md transition-all duration-300 flex items-center ${
                  index === activeChallenge
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-800 hover:bg-indigo-50"
                }`}
                onClick={() => setActiveChallenge(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {React.createElement(challenge.icon, {
                  // size: 20,
                  className:
                    index === activeChallenge
                      ? "text-white mr-3 h-8 w-8"
                      : "text-indigo-600 mr-3  h-8 w-8",
                })}
                <span className="font-medium text-left">{challenge.title}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KeyChallenge;
