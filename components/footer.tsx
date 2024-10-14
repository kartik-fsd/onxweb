import React from "react";
import Link from "next/link";
import Onx from "@/public/images/onx";

function Footer() {
  const services = [
    { name: "Installations", href: "/services/installation" },
    { name: "Onboarding", href: "/services/onboardings" },
    // { name: "Technician Deployment", href: "/services/technician-deployment" },
    // { name: "Warehouse Staffing", href: "/services/warehouse-staffing" },
  ];

  const industries = [
    { name: "E-commerce", href: "/industry/ecommerce" },
    { name: "BFSI", href: "/industry/bfsi" },
    { name: "Mobility", href: "/industry/mobility" },
    { name: "Hospitality", href: "/industry/hospitality" },
    { name: "Logistics", href: "/industry/logistics" },
  ];

  const companyLinks = [
    //  { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    //  { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blogs" },
  ];

  return (
    <footer className="bg-white border-t shadow-sm shadow-slate-300">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <Onx />
              <span className="sr-only">ONX By Awign</span>
            </Link>
            <p className="mt-2 text-md text-gray-600">
              India&apos;s Leading B2B Service Marketplace
            </p>
            <address className="mt-4 not-italic text-sm text-gray-500">
              Awign Pvt. Ltd. 3rd & 4th Floor,
              <br />
              HustleHub H1904, 1502, 19th Main Rd,
              <br />
              1st Sector, HSR Layout, Bengaluru,
              <br />
              Karnataka 560102
            </address>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Services
              </h2>
              <ul className="text-gray-500 font-medium">
                {services.map((service) => (
                  <li key={service.name} className="mb-4">
                    <Link href={service.href} className="hover:underline">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Industries
              </h2>
              <ul className="text-gray-500 font-medium">
                {industries.map((industry) => (
                  <li key={industry.name} className="mb-4">
                    <Link href={industry.href} className="hover:underline">
                      {industry.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Company
              </h2>
              <ul className="text-gray-500 font-medium">
                {companyLinks.map((link) => (
                  <li key={link.name} className="mb-4">
                    <Link href={link.href} className="hover:underline">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase">
                Legal
              </h2>
              <ul className="text-gray-500 font-medium">
                <li className="mb-4">
                  <Link href="/privacy-policy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-4">
                  <Link href="/terms-conditions" className="hover:underline">
                    Terms &amp; Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center">
            © {new Date().getFullYear()} ONX By Awign. All Rights Reserved.
          </span>
          {/* <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <a
              href="https://twitter.com/ONXbyAwign"
              className="text-gray-500 hover:text-gray-900"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 17"
              >
                <path
                  fillRule="evenodd"
                  d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter page</span>
            </a>
            <a
              href="https://www.linkedin.com/company/onxbyawign"
              className="text-gray-500 hover:text-gray-900"
            >
              <svg
                className="w-4 h-4"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 0a10 10 0 1 0 10 10A10 10 0 0 0 10 0zM7.3 14.3H5.2V7.7h2.1v6.6zm-1-7.5a1.2 1.2 0 1 1 1.2-1.2 1.2 1.2 0 0 1-1.2 1.2zm8.7 7.5h-2.1v-3.2c0-.8 0-1.8-1.1-1.8s-1.3.9-1.3 1.8v3.2h-2.1V7.7h2v.9h.1a2.2 2.2 0 0 1 2-1.1c2.1 0 2.5 1.4 2.5 3.2v3.6z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">LinkedIn page</span>
            </a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
