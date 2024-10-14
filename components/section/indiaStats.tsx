"use client";
import React, { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Users,
  CheckCircle,
  BarChart3,
  MapPin,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Dynamically import the map component to reduce initial bundle size
// Dynamically import the map components
const ComposableMap = dynamic(
  () => import("react-simple-maps").then((mod) => mod.ComposableMap),
  { ssr: false }
);
const Geographies = dynamic(
  () => import("react-simple-maps").then((mod) => mod.Geographies),
  { ssr: false }
);
const Geography = dynamic(
  () => import("react-simple-maps").then((mod) => mod.Geography),
  { ssr: false }
);
const Marker = dynamic(
  () => import("react-simple-maps").then((mod) => mod.Marker),
  { ssr: false }
);

// Define types
interface CityData {
  name: string;
  coordinates: [number, number];
  tasks: number;
  completed: number;
  workers: number;
}

interface StatData {
  title: string;
  value: number;
  icon: React.ElementType;
  color: string;
}

// Constants hyd  , pune , japiput , noida ,
const TIER_1_CITIES: CityData[] = [
  {
    name: "Mumbai",
    coordinates: [72.8777, 19.076],
    tasks: 1500,
    completed: 1200,
    workers: 5000,
  },
  {
    name: "Delhi",
    coordinates: [77.1025, 28.7041],
    tasks: 2000,
    completed: 1800,
    workers: 6500,
  },
  {
    name: "Bengaluru",
    coordinates: [77.5946, 12.9716],
    tasks: 1800,
    completed: 1600,
    workers: 5500,
  },
  {
    name: "Chennai",
    coordinates: [80.2707, 13.0827],
    tasks: 1200,
    completed: 1000,
    workers: 4000,
  },
  {
    name: "Kolkata",
    coordinates: [88.3639, 22.5726],
    tasks: 1000,
    completed: 850,
    workers: 3500,
  },
  {
    name: "Hyderabad",
    coordinates: [78.4867, 17.385],
    tasks: 1700,
    completed: 1500,
    workers: 5200,
  },
  {
    name: "Jaipur",
    coordinates: [75.7873, 26.9124],
    tasks: 900,
    completed: 750,
    workers: 3100,
  },
  {
    name: "Nasik",
    coordinates: [73.7898, 19.9975],
    tasks: 600,
    completed: 500,
    workers: 2000,
  },
  {
    name: "Noida",
    coordinates: [77.391, 28.5355],
    tasks: 1100,
    completed: 950,
    workers: 3300,
  },
  {
    name: "Pune",
    coordinates: [73.8567, 18.5204],
    tasks: 1300,
    completed: 1100,
    workers: 4500,
  },
];

const STATS: StatData[] = [
  { title: "Active Taskers", value: 20000, icon: Users, color: "blue" },
  {
    title: "Tasks Completed",
    value: 20000000,
    icon: BarChart3,
    color: "green",
  },
  { title: "Pincodes Presence", value: 12000, icon: MapPin, color: "orange" },
  {
    title: "Enterprises Served",
    value: 200,
    icon: CheckCircle,
    color: "indigo",
  },
];

// Utility functions
const formatNumber = (num: number): string => {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
  return num.toString();
};

const CardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Components
const StatCard: React.FC<StatData> = ({ title, value, icon: Icon, color }) => (
  <motion.div
    variants={CardVariants}
    initial="hidden"
    animate="visible"
    transition={{ duration: 0.5 }}
    className={cn(
      "bg-white p-4 rounded-lg shadow-md border-l-4",
      `border-${color}-500`
    )}
  >
    <div className="flex justify-between items-center mb-2">
      <Icon className={`text-${color}-500 mr-1`} size={24} aria-hidden="true" />
      <span className={cn(`text-${color}-800`, "text-sm font-medium")}>
        {title}
      </span>
    </div>
    <div className="text-2xl font-bold text-gray-700" aria-live="polite">
      {formatNumber(value)}
      {"+"}
    </div>
  </motion.div>
);

const CityInsights: React.FC<{ city: CityData }> = ({ city }) => (
  <motion.div
    variants={CardVariants}
    initial="hidden"
    animate="visible"
    transition={{ duration: 0.5, delay: 0.2 }}
    className="bg-white p-6 rounded-lg shadow-md border border-gray-200"
  >
    <div className="flex items-center justify-between mb-4">
      <div className="flex items-center">
        <MapPin className="text-blue-500 mr-2" size={24} aria-hidden="true" />
        <h4 className="text-xl font-semibold text-indigo-800">
          {city.name} Insights
        </h4>
      </div>
      <span className="text-sm font-medium text-blue-500 bg-blue-50 px-2 py-1 rounded">
        Tier 1 City
      </span>
    </div>

    <div className="grid grid-cols-2 gap-4 mb-4">
      {[
        {
          label: "Total Tasks",
          value: city.tasks,
          icon: BarChart3,
          color: "blue",
        },
        {
          label: "Completed",
          value: city.completed,
          icon: CheckCircle,
          color: "green",
        },
        { label: "Workers", value: city.workers, icon: Users, color: "orange" },
        {
          label: "Completion Rate",
          value: `${((city.completed / city.tasks) * 100).toFixed(1)}%`,
          icon: ArrowUpRight,
          color: "indigo",
        },
      ].map((item, index) => (
        <div key={index} className="flex flex-col">
          <div className="flex items-center text-gray-600 mb-1">
            <item.icon
              className={`text-${item.color}-500 mr-1`}
              size={16}
              aria-hidden="true"
            />
            <span className="text-sm">{item.label}</span>
          </div>
          <span className="text-lg font-semibold text-indigo-800 p-1">
            {typeof item.value === "number"
              ? item.value.toLocaleString()
              : item.value}
          </span>
        </div>
      ))}
    </div>

    <div className="mt-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-600">
          Task Completion Progress
        </span>
        <span className="text-sm font-medium text-blue-500">
          {((city.completed / city.tasks) * 100).toFixed(1)}%
        </span>
      </div>
      <div className="bg-gray-200 h-2 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${(city.completed / city.tasks) * 100}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="bg-blue-500 h-full"
        />
      </div>
    </div>
  </motion.div>
);

export const IndiaMap: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState<CityData | null>(null);
  const [tooltipContent, setTooltipContent] = useState("");

  const memoizedMap = useMemo(
    () => (
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 1000,
          center: [78.9629, 22.5937],
        }}
        className="w-full h-[400px] sm:h-[500px] md:h-[620px]"
      >
        <Geographies
          geography={"https://tm-integration-aws.s3.amazonaws.com/india.json"}
        >
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#4F46E5"
                stroke="#312E81"
                strokeWidth={0.5}
                style={{
                  default: { fill: "#4F46E5" },
                  hover: { fill: "#312E81" },
                }}
              />
            ))
          }
        </Geographies>
        {TIER_1_CITIES.map((city) => (
          <Marker key={city.name} coordinates={city.coordinates}>
            <circle
              r={8}
              fill="#F97316"
              stroke="#fff"
              strokeWidth={2}
              className="cursor-pointer transition-all duration-300 ease-in-out hover:r-10"
              onMouseEnter={() => {
                setTooltipContent(`
                <div class="p-2">
                  <h5 class="font-bold text-lg">${city.name}</h5>
                  <p>Total Tasks: ${city.tasks.toLocaleString()}</p>
                  <p>Completed: ${city.completed.toLocaleString()}</p>
                  <p>Workers: ${city.workers.toLocaleString()}</p>
                </div>
              `);
              }}
              onMouseLeave={() => setTooltipContent("")}
              onClick={() => setSelectedCity(city)}
              data-tooltip-id="city-tooltip"
            />
          </Marker>
        ))}
      </ComposableMap>
    ),
    []
  );

  return (
    <section
      className="w-full min-h-screen bg-gradient-to-br from-indigo-100 to-orange-100 p-4 sm:p-8"
      id="onx-stats"
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-indigo-800 mb-2">
        Empowering India&apos;s Businesses with ONX
      </h2>
      <h3 className="text-md sm:text-lg md:text-xl font-semibold font-sans text-center text-gray-600 mb-8">
        Your Partner for Seamless Onboarding & Installation Solutions
      </h3>

      <div className="flex flex-col lg:flex-row items-start justify-center gap-8">
        <div className="w-full lg:w-2/3 p-4">{memoizedMap}</div>

        <div className="w-full lg:w-1/3 space-y-6">
          <div className="grid grid-cols-2 gap-4">
            {STATS.map((item, index) => (
              <StatCard key={index} {...item} />
            ))}
          </div>

          {selectedCity && <CityInsights city={selectedCity} />}
        </div>
      </div>
      <Tooltip id="city-tooltip" html={tooltipContent} />
    </section>
  );
};

export default IndiaMap;
