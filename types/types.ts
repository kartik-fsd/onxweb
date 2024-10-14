export type BodyField =
    | { paragraph: string }
    | { image: { src: string; caption: string } }
    | { subheading: string }
    | { quote: string };

import { FieldError } from "react-hook-form";
export type TextAreaFieldProps = {
    label: string;
    register: any;
    name: string;
    placeholder: string;
    rows?: number;
    required?: boolean;
    errors?: FieldError;
};

export interface BlogFormData {
    title: string;
    slug: string;
    category: string;
    description: string;
    mainImage: {
        src: string;
        caption: string;
    };
    isFeature?: boolean;
    body: BodyField[];
    blog_read: number;
}

export interface BlogFormData {
    title: string;
    slug: string;
    category: string;
    description: string;
    src: string;
    caption: string;
    authorId?: string;
    isFeature?: boolean;
    body: BodyField[];
    blog_read: number;
}