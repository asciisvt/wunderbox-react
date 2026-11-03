import { getPostBySlug } from "@/lib/BlogTools";

export default function LatestPost({
    slug,
    className,
}: {
    slug: string;
    className?: string;
}) {
    const { data, content } = getPostBySlug(slug);

    return (
        <article className={`bg-parchment-100 text-onyx-900 flex flex-col gap-2 rounded-xl p-4 ${className || ""}`}>
            <h2 className="text-2xl font-bold">{data.title}</h2>
            <p>{data.description}</p>
            <a href={`/blog/${slug}`}>Read more</a>
        </article>
    );
}