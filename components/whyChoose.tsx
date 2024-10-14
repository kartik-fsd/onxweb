"use client";
import React, { useState, useEffect, useCallback } from "react";
import { ChevronRight, LucideIcon } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { Reason } from "@/data/whychoose";

interface Stat {
  value: number;
  unit: string;
  prefix: string;
}

interface WhyChooseUsProps {
  title: string;
  description: string;
  reasons: Reason[];
}

const AnimatedStat: React.FC<Stat> = ({ value, unit, prefix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setCount((prevCount) => {
        const newCount = prevCount + increment;
        return newCount >= value ? value : newCount;
      });

      if (currentStep === steps) {
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold text-white">
      {prefix}
      {Math.round(count).toLocaleString()}{" "}
      <span className="text-xl sm:text-2xl lg:text-3xl font-normal">
        {unit}
      </span>
    </div>
  );
};

const WhyChooseUs: React.FC<WhyChooseUsProps> = ({
  title,
  description,
  reasons,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleItemClick = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const handleItemHover = useCallback((index: number | null) => {
    setHoveredIndex(index);
  }, []);

  return (
    <section className="w-full mx-auto py-8 px-16 bg-gradient-to-br from-indigo-100 to-purple-100">
      <h2 className="text-5xl font-bold text-center mb-4 text-indigo-900">
        {title}
      </h2>
      <p className="text-xl text-center mb-12 text-gray-600">{description}</p>

      <div className="flex flex-col lg:flex-row  gap-8">
        <div className="lg:w-1/3 space-y-4">
          {reasons.map((reason, index) => {
            const IconComponent = LucideIcons[reason.icon] as LucideIcon;

            return (
              <div
                key={index}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                  index === activeIndex
                    ? `bg-gradient-to-r ${reason.color} text-white`
                    : "bg-white hover:bg-gray-50"
                }`}
                onClick={() => handleItemClick(index)}
                onMouseEnter={() => handleItemHover(index)}
                onMouseLeave={() => handleItemHover(null)}
              >
                <div className="flex items-center">
                  <div
                    className={`p-2 rounded-full ${
                      index === activeIndex
                        ? "bg-white bg-opacity-20"
                        : "bg-gray-100"
                    } mr-4`}
                  >
                    <IconComponent
                      className={`h-6 w-6 ${
                        index === activeIndex
                          ? "text-white"
                          : `text-${reason.color.split("-")[1]}`
                      }`}
                    />
                  </div>
                  <h3
                    className={`text-lg font-semibold ${
                      index === activeIndex ? "text-white" : "text-gray-800"
                    }`}
                  >
                    {reason.title}
                  </h3>
                  {(index === activeIndex || index === hoveredIndex) && (
                    <ChevronRight
                      className={`ml-auto h-5 w-5 ${
                        index === activeIndex
                          ? "text-white"
                          : `text-${reason.color.split("-")[1]}`
                      }`}
                    />
                  )}
                </div>
              </div>
            );
          })}
        </div>

        <div className="lg:w-2/3">
          <div
            className={`bg-gradient-to-br ${reasons[activeIndex].color} rounded-xl p-6 sm:p-8 shadow-lg transition-all duration-500`}
          >
            <div className="flex flex-col sm:flex-row  items-center mb-6">
              <div className="p-2 sm:p-3 bg-white bg-opacity-20 rounded-full mr-4 mb-4 sm:mb-0">
                {React.createElement(
                  LucideIcons[reasons[activeIndex].icon] as LucideIcon,
                  {
                    className: "h-8 w-8 sm:h-10 sm:w-10 text-white",
                  }
                )}
              </div>
              <h3 className="text-xl sm:text-3xl font-bold text-white">
                {reasons[activeIndex].title}
              </h3>
            </div>
            <p className="text-lg sm:text-xl text-white mb-6 sm:mb-4">
              {reasons[activeIndex].description}
            </p>
            <AnimatedStat {...reasons[activeIndex].stat} />
            <ul className="mt-6 sm:mt-4 space-y-2 sm:space-y-3">
              {reasons[activeIndex].details.map((detail, idx) => (
                <li
                  key={idx}
                  className="flex items-start text-white text-base sm:text-lg"
                >
                  <span className="mr-2 text-white">•</span>
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
