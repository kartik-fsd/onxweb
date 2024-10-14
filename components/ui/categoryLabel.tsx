import Link from "next/link";
import Label from "./lable";

interface Category {
  title: string;
  slug: string;
  color?: string;
}

interface CategoryLabelProps {
  cate: Category; // Ensuring it's an object of Category objects
  nomargin?: boolean;
}

const allowedColors = ["green", "indigo", "orange", "purple", "pink"] as const;
type AllowedColor = (typeof allowedColors)[number];

function isAllowedColor(color: string | undefined): color is AllowedColor {
  return allowedColors.includes(color as AllowedColor);
}

export default function CategoryLabel({
  cate,
  nomargin = false,
}: CategoryLabelProps) {
  return (
    <div className="flex gap-3">
      <Link href={`/category/${cate?.slug}`}>
        <Label
          nomargin={nomargin}
          color={isAllowedColor(cate?.color) ? cate.color : undefined}
        >
          {cate?.title}
        </Label>
      </Link>
    </div>
  );
}
