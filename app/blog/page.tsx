import MainNav from "../_components/navigation/MainNav";
import { getPostSlugs, getPostBySlug } from "../../lib/BlogTools";

function PostList({ slugs }: { slugs: string[] | NonSharedBuffer[] }) {
  return (
    <ul>
      {slugs.map((slug) => (
        <li key={slug.toString()}>
          <a href={`/blog/${slug.toString()}`}>{slug.toString()}</a>
        </li>
      ))}
    </ul>
  );
}

export default function Blog() {
  const slugs = getPostSlugs();

  return (
    <div>
      <MainNav />
      <header className="grid min-h-svh place-items-center">
        <h1 className="font-fredoka text-parchment-100 text-[35vw] leading-[0.8] font-semibold tracking-tighter">
          blog
        </h1>
      </header>
      <main>
        <PostList slugs={slugs} />
      </main>
    </div>
  );
}
