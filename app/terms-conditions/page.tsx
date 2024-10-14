"use client";
import React from "react";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { termsData } from "@/data/termsCondition";

const TermsAndConditionsPage = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-700">
        Terms and Conditions
      </h1>
      <div className="space-y-4">
        {termsData.map((section, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <button
              className="w-full text-left p-4 bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
              onClick={() => toggleSection(section.title)}
            >
              <span className="font-semibold">{section.title}</span>
              {expandedSection === section.title ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </button>
            {expandedSection === section.title && (
              <div className="p-4 bg-white">
                <p>{section.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsAndConditionsPage;
