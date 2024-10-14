import React from "react";
import { Metadata } from "next";
import { privacyData } from "@/data/privacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy - Onx By Awign Enterprises",
  description: "Privacy Policy for Onx By Awign Enterprises",
};

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-800 text-center">
            Privacy Policy
          </h1>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="border-4 border-dashed border-gray-200 rounded-lg p-4 bg-white">
              {privacyData.map((section, index) => (
                <div key={index} className="mb-8">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                    {section.title}
                  </h2>
                  <p>{section.description}</p>
                  {Array.isArray(section.content) ? (
                    <ul className="list-disc pl-5 space-y-2">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-gray-700">
                          {item}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-700">{section.content}</p>
                  )}
                  <p className="text-balance indent-2 mt-2">
                    {section.subdesc}
                  </p>
                  {section.contact && (
                    <div className="mt-4">
                      <p className="text-gray-700">
                        Name: {section.contact.name}
                      </p>
                      <p className="text-gray-700">
                        Email: {section.contact.email}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Onx By Awign Enterprises Private
            Limited. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
