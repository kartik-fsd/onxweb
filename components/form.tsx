"use client";
import Link from "next/link";
import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    company: "",
    companyWebsite: "",
    projectDetails: "",
    acceptedPrivacyPolicy: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage(data.message);
        setFormData({
          fullName: "",
          phoneNumber: "",
          email: "",
          company: "",
          companyWebsite: "",
          projectDetails: "",
          acceptedPrivacyPolicy: false,
        });
      } else {
        setSubmitMessage(
          data.message || "An error occurred. Please try again later."
        );
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setSubmitMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-10 bg-white">
      <h2 className="text-xl font-semibold text-gray-800">Get in Touch</h2>
      <form onSubmit={handleSubmit}>
        <div className="mt-6 grid gap-4 lg:gap-6">
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label
                htmlFor="fullName"
                className="block mb-2 text-sm text-gray-700 font-medium"
              >
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="py-3 px-4 block w-full border border-gray-200 rounded-lg 
              text-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label
                htmlFor="phoneNumber"
                className="block mb-2 text-sm text-gray-700 font-medium"
              >
                Phone number
              </label>
              <input
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                className="py-3 px-4 block w-full border border-gray-200 rounded-lg 
              text-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>
          </div>
          {/* End Grid */}

          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm text-gray-700 font-medium"
            >
              Work Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleInputChange}
              autoComplete="email"
              className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            <div>
              <label
                htmlFor="company"
                className="block mb-2 text-sm text-gray-700 font-medium"
              >
                Company
              </label>
              <input
                type="text"
                name="company"
                id="company"
                value={formData.company}
                onChange={handleInputChange}
                className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>

            <div>
              <label
                htmlFor="companyWebsite"
                className="block mb-2 text-sm text-gray-700 font-medium"
              >
                Company Website
              </label>
              <input
                type="url"
                name="companyWebsite"
                id="companyWebsite"
                value={formData.companyWebsite}
                onChange={handleInputChange}
                className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
                required
              />
            </div>
          </div>
          {/* End Grid */}

          <div>
            <label
              htmlFor="projectDetails"
              className="block mb-2 text-sm text-gray-700 font-medium"
            >
              Project Details
            </label>
            <textarea
              id="projectDetails"
              name="projectDetails"
              rows={4}
              value={formData.projectDetails}
              onChange={handleInputChange}
              className="py-3 px-4 block w-full border border-gray-200 rounded-lg text-sm focus:border-indigo-500 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>
        </div>

        {/* Checkbox */}
        <div className="mt-3 flex">
          <div className="flex">
            <input
              id="acceptedPrivacyPolicy"
              name="acceptedPrivacyPolicy"
              type="checkbox"
              checked={formData.acceptedPrivacyPolicy}
              onChange={handleInputChange}
              className="shrink-0 mt-1.5 border border-gray-200 rounded text-blue-600 focus:ring-indigo-500 focus:outline-none"
              required
            />
          </div>
          <div className="ml-3">
            <label
              htmlFor="acceptedPrivacyPolicy"
              className="text-sm text-gray-600"
            >
              By submitting this form, I acknowledge the{" "}
              <Link
                className="text-blue-600 decoration-2 hover:underline font-medium"
                href="/privacy-policy"
              >
                Privacy policy
              </Link>
            </label>
          </div>
        </div>

        <div className="mt-6 grid">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send Inquiry"}
          </button>
        </div>

        {submitMessage && (
          <div className="mt-3 text-center">
            <p
              className={`text-sm ${
                submitMessage.includes("error")
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              {submitMessage}
            </p>
          </div>
        )}

        <div className="mt-3 text-center">
          <p className="text-sm text-gray-500">
            We&apos;ll get back to you in 1-2 business days.
          </p>
        </div>
      </form>
    </div>
  );
}

export default Form;
