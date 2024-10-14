import React from "react";
import Image from "next/image";
export default function CommitmentToExcellence() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-indigo-900 sm:text-4xl">
            Committed to Excellence
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Our ISO certifications demonstrate our dedication to quality and
            security in workforce management.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap justify-center items-center gap-8">
          <Image
            src={
              "https://tm-integration-aws.s3.ap-south-1.amazonaws.com/ISO9001.webp"
            }
            alt="ISO 9001:2015 Certification"
            width={150}
            height={150}
            className="object-contain"
          />
          <Image
            src={
              "https://tm-integration-aws.s3.ap-south-1.amazonaws.com/ISO27001.webp"
            }
            alt="ISO/IEC 27001:2013 Certification"
            width={150}
            height={150}
            className="object-contain"
          />
        </div>
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-700">
            ONX is certified for Quality Management (ISO 9001:2015) and
            Information Security Management (ISO/IEC 27001:2013), ensuring
            top-tier service and data protection for our clients.
          </p>
        </div>
      </div>
    </div>
  );
}
