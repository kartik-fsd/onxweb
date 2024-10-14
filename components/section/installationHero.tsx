import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

function HeroInstallation() {
  return (
    <div className="relative bg-gradient-to-br from-indigo-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-indigo-900 mb-4">
            Expert Installation Services for{" "}
            <span className="text-indigo-600">B2B Companies</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            India&apos;s #1 Field Service Platform for Seamless Installation
            Solutions Across Industries
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {["SaaS & Tech", "E-commerce", "Telecom", "FinTech"].map(
              (industry) => (
                <span
                  key={industry}
                  className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {industry}
                </span>
              )
            )}
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <Link
              href="#contactform"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition"
            >
              Share Your Specifications
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </Link>
            {/* <Link
              href="/case-studies"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50 transition"
            >
              View Case Studies
            </Link> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { stat: "60%", desc: "Faster Insatllation" },
              { stat: "40%", desc: "Cost Reduction" },
              { stat: "98%", desc: "Client Satisfaction" },
            ].map((item) => (
              <div
                key={item.desc}
                className="flex items-center justify-center bg-white p-4 rounded-lg shadow-sm"
              >
                <CheckCircle className="text-green-500 mr-2" />
                <div>
                  <p className="text-2xl font-bold text-indigo-900">
                    {item.stat}
                  </p>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroInstallation;
