import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/container";
import { format, parseISO } from "date-fns";
import CategoryLabel from "@/components/ui/categoryLabel";
import { notFound } from "next/navigation";
import { ClockIcon } from "@heroicons/react/24/outline";

interface PostProps {
  loading: boolean;
  post?: {
    slug: string;
    title: string;
    category: string;
    description: string;
    mainImage: { src: string; caption?: string };
    publishedAt: string;
    estReadingTime: number;
    body: {
      type: string;
      content?: string;
      src?: string;
      caption?: string;
    }[];
  };
}

export default function Post({ loading, post }: PostProps) {
  if (!loading && !post?.slug) {
    notFound();
  }

  const imageProps = post?.mainImage?.src
    ? {
        src: post.mainImage.src as string,
        caption: post.mainImage.caption,
      }
    : null;

  const category = post?.category ?? "Uncategorized";

  return (
    <Container className="py-10">
      <article className="mx-auto max-w-3xl">
        <header className="mb-10">
          <CategoryLabel
            cate={{
              title: category,
              slug: category?.toLowerCase(),
              color: "blue",
            }}
          />
          <h1 className="mt-2 mb-3 text-3xl font-bold leading-tight text-gray-900 lg:text-4xl">
            {post?.title}
          </h1>
          <div className="flex items-center text-gray-600">
            <time dateTime={post?.publishedAt}>
              {format(parseISO(post?.publishedAt || ""), "MMMM dd, yyyy")}
            </time>
            <span className="mx-2">•</span>
            <div className="flex items-center">
              <ClockIcon className="h-4 w-4 mr-1" />
              <span>{post?.estReadingTime || "5"} min read</span>
            </div>
          </div>
        </header>

        {imageProps && (
          <figure className="mb-10">
            <div className="aspect-video overflow-hidden rounded-lg">
              <Image
                src={imageProps.src}
                alt={post?.title || "Blog post image"}
                width={1200}
                height={675}
                className="object-cover"
              />
            </div>
            {imageProps.caption && (
              <figcaption className="mt-2 text-center text-sm text-gray-600">
                {imageProps.caption}
              </figcaption>
            )}
          </figure>
        )}

        <div className="prose prose-lg mx-auto">
          <p className="lead">{post?.description}</p>

          {post?.body?.map((element, index) => {
            switch (element.type) {
              case "subheading":
                return (
                  <h2 key={index} className="mt-8 mb-4 text-2xl font-semibold">
                    {element.content}
                  </h2>
                );
              case "quote":
                return (
                  <blockquote
                    key={index}
                    className="my-6 border-l-4 border-blue-500 pl-4 italic"
                  >
                    {element.content}
                  </blockquote>
                );
              case "image":
                return (
                  <figure key={index} className="my-8">
                    {element.src && (
                      <Image
                        src={element.src}
                        alt={element.caption || "Blog post image"}
                        width={800}
                        height={450}
                        className="rounded-lg"
                      />
                    )}
                    {element.caption && (
                      <figcaption className="mt-2 text-center text-sm text-gray-600">
                        {element.caption}
                      </figcaption>
                    )}
                  </figure>
                );
              case "paragraph":
                return <p key={index}>{element.content}</p>;
              default:
                return null;
            }
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/blogs/viewall"
            className="rounded-full  border border-indigo-600 px-6 py-3 text-sm font-medium text-indigo-800 hover:bg-blue-300 hover:text-indigo-700 transition duration-300"
          >
            ← Back to All Posts
          </Link>
        </div>
      </article>
    </Container>
  );
}
