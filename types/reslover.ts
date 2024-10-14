import { Resolver } from "react-hook-form";
import { BlogFormData } from "./types";




const customResolver: Resolver<BlogFormData> = async (values) => {
    const errors: any = {};

    if (!values.title) {
        errors.title = {
            type: "required",
            message: "Title is required",
        };
    }

    if (!values.slug) {
        errors.slug = {
            type: "required",
            message: "Slug is required",
        };
    }

    if (!values.category) {
        errors.category = {
            type: "required",
            message: "Category is required",
        };
    }

    if (!values.description) {
        errors.description = {
            type: "required",
            message: "Description is required",
        };
    }
    if (!values.src) {
        if (!errors.mainImage) errors.mainImage = {};
        errors.mainImage.src = {
            type: "required",
            message: "Image is required",
        };
    }

    if (!values.caption) {
        if (!errors.mainImage) errors.mainImage = {};
        errors.mainImage.caption = {
            type: "required",
            message: "Caption is required",
        };
    }
    if (!values.blog_read) {
        errors.blog_read = {
            type: "required",
            message: "Estimted time is required",
        }
    }
    return {
        values,
        errors,
    };
};

export default customResolver;
