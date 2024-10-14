import React from "react";
import { BodyField } from "@/types/types";
import { FieldErrors, UseFormRegister } from "react-hook-form";

type DynamicBodyFieldProps = {
  field: BodyField;
  index: number;
  register: UseFormRegister<any>;
  removeBodyField: (index: number) => void;
  errors?: FieldErrors<BodyField>;
};

const DynamicBodyField: React.FC<DynamicBodyFieldProps> = ({
  field,
  index,
  register,
  removeBodyField,
  errors,
}) => {
  // Helper function to safely access errors
  const getError = (fieldName: string) => {
    const error = (errors as any)?.[index]?.[fieldName]?.message;
    return error;
  };
  return (
    <>
      <div className="relative mt-8 p-6 bg-white border border-gray-200 rounded-md shadow-sm transition-shadow duration-200 ease-in-out">
        {/* Paragraph Field */}
        {"paragraph" in field && (
          <>
            <textarea
              {...register(`body[${index}].paragraph`)}
              className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-200 ease-in-out resize-none placeholder-gray-400"
              placeholder="Enter paragraph content..."
              rows={4}
            />
            {getError("paragraph") && (
              <p className="text-red-500 text-sm mt-1">
                {getError("paragraph")}
              </p>
            )}
          </>
        )}

        {/* Image Field */}
        {"image" in field && (
          <>
            <input
              {...register(`body[${index}].image.src`)}
              className="w-full mt-4 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-200 ease-in-out placeholder-gray-400"
              placeholder="Image URL"
            />
            {getError("image.src") && (
              <p className="text-red-500 text-sm mt-1">
                {getError("image.src")}
              </p>
            )}
            <input
              {...register(`body[${index}].image.caption`)}
              className="w-full mt-4 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-200 ease-in-out placeholder-gray-400"
              placeholder="Image Caption"
            />
            {getError("image.caption") && (
              <p className="text-red-500 text-sm mt-1">
                {getError("image.caption")}
              </p>
            )}
          </>
        )}

        {/* Quote Field */}
        {"quote" in field && (
          <>
            <textarea
              {...register(`body[${index}].quote`)}
              className="w-full p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-200 ease-in-out resize-none italic placeholder-gray-400"
              placeholder="Enter quote content..."
              rows={3}
            />
            {getError("quote") && (
              <p className="text-red-500 text-sm mt-1">{getError("quote")}</p>
            )}
          </>
        )}

        {/* Sub heading  */}
        {"subheading" in field && (
          <>
            <input
              {...register(`body[${index}].subheading`)}
              className="w-full mt-4 p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-200 ease-in-out placeholder-gray-400"
              placeholder="Sub heading"
            />
            {getError("subheading") && (
              <p className="text-red-500 text-sm mt-1">
                {getError("subheading")}
              </p>
            )}
          </>
        )}
        <button
          type="button"
          onClick={() => removeBodyField(index)}
          className="mt-4 text-sm bg-red-100 text-red-500 hover:bg-red-200 font-semibold py-1 px-3 rounded-md transition duration-150 ease-in-out"
        >
          Remove
        </button>
      </div>
    </>
  );
};

export default DynamicBodyField;
