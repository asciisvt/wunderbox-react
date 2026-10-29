import MainNav from "@/app/_components/navigation/MainNav";
import { getPostSlugs, getPostBySlug } from "@/lib/BlogTools";

export default function Blog() {
  const slugs = getPostSlugs();

  return (
    <div className="font-nunito">
      <MainNav />
      <header className="flex min-h-svh items-center justify-center">
        <h1 className="font-fredoka text-parchment-100 text-[35vw] leading-[0.8] font-semibold tracking-tighter">
          blog
        </h1>
      </header>
      <main className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <PostList slugs={slugs} />
      </main>
    </div>
  );
}

function PostList({
  slugs,
  className,
}: {
  slugs: string[];
  className?: string;
}) {
  return (
    <aside
      className={`bg-parchment-100 text-onyx-900 m-8 flex flex-col gap-2 rounded-xl p-4 ${className || ""}`}
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
