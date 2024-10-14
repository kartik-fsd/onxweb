"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "@/components/ui/inputField";
import DynamicBodyField from "@/components/ui/dynamicSelect";
import TextAreaField from "@/components/ui/textArea";
import { BlogFormData, BodyField } from "@/types/types";
import { showToast, Toast } from "@/components/ui/toast";
import customResolver from "@/types/reslover";

const AdminPage = () => {
  const {
    register,
    handleSubmit,
    unregister,
    reset,
    formState: { errors },
  } = useForm<BlogFormData>({
    resolver: customResolver,
  });
  const [body, setBody] = useState<BodyField[]>([]);
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const addBodyField = (type: "paragraph" | "image" | "heading" | "quote") => {
    const newField: BodyField =
      type === "image"
        ? { image: { src: "", caption: "" } }
        : type === "paragraph"
        ? { paragraph: "" }
        : type === "heading"
        ? { subheading: "" }
        : { quote: "" };

    setBody((prevBody) => [...prevBody, newField]);
  };

  const removeBodyField = (index: number) => {
    unregister(`body.${index}` as const);
    setBody((prevBody) => prevBody.filter((_, i) => i !== index));
  };

  const handleSuccess = () => {
    showToast.success("Blog created successfully!");
    setIsSubmitting(false);
    reset();
    setBody([]);
  };

  const handleError = () => {
    showToast.error("An error occurred while creating the blog.");
    setIsSubmitting(false);
  };

  const onSubmit = async (data: BlogFormData) => {
    // Typing data as BlogFormData
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      response.ok ? handleSuccess() : handleError();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (error) {
      console.error("An error occurred:", error);
      handleError();
    }
  };

  const handleCancel = () => {
    reset();
    setBody([]);
    setShowErrorPopup(false);
  };

  return (
    <div className="p-10 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-10">
        <h1 className="text-3xl font-bold mb-10 text-gray-800 text-center">
          New Blog
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid gap-6 md:grid-cols-2">
            {/* Blog image and description */}
            <InputField
              label="Title"
              register={register}
              name="title"
              placeholder="ONX Blog Title"
              required={true}
              errors={errors.title}
            />
            <InputField
              label="Slug"
              register={register}
              name="slug"
              placeholder="ONX-Blog-Title"
              required={true}
              errors={errors.slug}
            />
          </div>
          <InputField
            label="Category"
            register={register}
            name="category"
            placeholder="Category"
            required={true}
            errors={errors.category}
          />
          <TextAreaField
            label="Description"
            register={register}
            name="description"
            placeholder="Description"
            required={true}
            rows={4}
            errors={errors.description}
          />

          {/* Main blog image */}
          <h2 className="text-lg font-semibold mb-4 text-gray-700">
            Main Image
            <span className="text-red-500"> *</span>
          </h2>
          <InputField
            label="Main Image URL"
            register={register}
            name="src"
            placeholder="Main Image URL"
            required={true}
            errors={errors?.src}
          />
          <InputField
            label="Main Image Caption"
            register={register}
            name="caption"
            placeholder="Main Image Caption"
            required={true}
            errors={errors?.caption}
          />

          {/* Add extra paragraph image or quote */}

          <label className="block mb-3 text-lg font-semibold text-gray-700 required">
            Add Content Type:
          </label>
          <div className="flex items-center gap-4 !mt-4">
            <select
              onChange={(e) =>
                addBodyField(e.target.value as "image" | "paragraph" | "quote")
              }
              className="p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            >
              <option value="none">Select field</option>
              <option value="heading">Sub heading</option>
              <option value="paragraph">Paragraph</option>
              <option value="image">Image</option>
              <option value="quote">Quote</option>
            </select>
          </div>

          {body.map((field, index) => (
            <DynamicBodyField
              key={index}
              field={field}
              index={index}
              register={register}
              removeBodyField={removeBodyField}
              errors={errors?.body?.[index]} // Pass errors for specific body field
            />
          ))}

          {/* IS featured */}
          <label className="inline-flex items-center me-5 cursor-pointer">
            <input
              {...register("isFeature")}
              type="checkbox"
              name="isFeature"
              className="sr-only peer"
              aria-label="Is Feature"
            />
            <div
              className="relative w-11 h-6 bg-gray-200 rounded-full peer  
    peer-focus:ring-4 peer-focus:ring-orange-300  peer-checked:after:translate-x-full 
    rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] 
    after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border 
    after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-orange-500"
            />
            <span className="ms-3 text-lg font-semibold text-gray-700 ">
              Want your blog featured?
            </span>
          </label>

          {/* Read time */}
          <>
            <h2 className="text-lg font-semibold mb-4 text-gray-700">
              Estimated Read Time
              <span className="text-red-500"> *</span>
            </h2>
            <InputField
              label="Estimated Read Time"
              register={register}
              name="blog_read"
              placeholder="Estimated Read Time"
              required={true}
              errors={errors?.blog_read}
              type="number"
            />
          </>
          <div className="flex gap-6 mt-10">
            <button
              type="button"
              className="border border-red-600 hover:bg-red-100 text-red-900 font-semibold py-3 px-8 rounded-lg shadow-lg transition"
              onClick={() => setShowErrorPopup(true)}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-orange-600 hover:bg-orange-500"
              } text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition`}
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </div>
        </form>
      </div>

      {showErrorPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
            <h2 className="text-lg font-bold mb-4 text-yellow-600">
              Warning..!
            </h2>
            <p className="mb-4">
              Your changes will be discarded, and the data will not be saved.
            </p>
            <div className="flex justify-center gap-6 mt-5">
              <button
                onClick={() => setShowErrorPopup(false)}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={handleCancel}
                className="border border-red-600 text-red-600 hover:bg-red-200 hover:text-red-700 font-semibold py-2 px-4 rounded-lg transition-colors duration-200"
              >
                Clear
              </button>
            </div>
          </div>
        </div>
      )}
      <Toast />
    </div>
  );
};

export default AdminPage;
