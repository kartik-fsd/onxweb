import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import Form from "@/components/form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with ONX by Awign. We're here to answer your questions and provide support for all your business needs.",
  keywords: [
    "ONX",
    "OnxWork",
    "Awign",
    "contact",
    "support",
    "business services",
    "India",
    "Services marketplace",
  ],
  openGraph: {
    title: "Contact ONX by Awign",
    description:
      "Reach out to ONX by Awign for all your business inquiries and support needs.",
    url: "https://www.onxwork.com/contact",
    siteName: "ONX by Awign",
    images: [
      {
        url: "https://tm-integration-aws.s3.amazonaws.com/passbook.jpg", // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: "ONX by Awign Contact Page",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
const ContactUs = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white min-h-screen">
      <div className="max-w-7xl mx-auto px-8 py-16 sm:px-6 lg:px-14">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h1 className="text-4xl font-extrabold text-indigo-900 sm:text-5xl">
            Get in Touch
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Have questions or need assistance? We&apos;re here to help. Reach
            out to us or fill out the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: MapPin,
              title: "Address",
              content:
                "Awign Pvt. Ltd. 3rd & 4th Floor, HustleHub H1904, 1502, 19th Main Rd, 1st Sector, HSR Layout, Bengaluru, Karnataka 560102",
            },
            { icon: Phone, title: "Phone", content: "+91 8618624340" },
            { icon: Mail, title: "Email", content: "business@awign.com" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300 ease-in-out"
            >
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <item.icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="font-bold text-xl text-indigo-900">
                  {item.title}
                </h3>
              </div>
              <p className="text-gray-600">{item.content}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <Form />
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15555.36838811006!2d77.6449818!3d12.9178684!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae149d15fd071b%3A0x8a5e95f5c93eed0e!2sAwign%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1727767928149!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
