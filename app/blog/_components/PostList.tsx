export default function PostList({
    slugs,
    className,
}: {
    slugs: string[];
    className?: string;
}) {
    return (
        <aside
            className={`bg-parchment-100 text-onyx-900 flex flex-col gap-2 rounded-xl p-4 ${className || ""}`}
        >
            <h1 className="text-2xl font-bold">Blog Posts</h1>
            <ul className="">
                {slugs.map((slug) => (
                    <li key={slug.toString()}>
                        <a href={`/blog/${slug.toString()}`}>{slug.toString()}</a>
                    </li>
                ))}
            </ul>
        </aside>
    );
}