// components/InputField.tsx
import React from "react";
import { FieldError } from "react-hook-form";

type InputFieldProps = {
  label: string;
  register: any;
  name: string;
  placeholder: string;
  required?: boolean;
  errors?: FieldError;
  type?: string;
};

const InputField: React.FC<InputFieldProps> = ({
  label,
  register,
  name,
  placeholder,
  required = false,
  errors,
  type = "text",
}) => (
  <div>
    <input
      {...register(name, {
        required: required ? `${label} is required` : false,
      })}
      className={`w-full p-4 m-2 border ${
        errors ? "border-red-500" : "border-gray-300"
      } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition`}
      placeholder={placeholder}
      aria-label={label}
      type={type}
    />
    {errors && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
  </div>
);

export default InputField;
