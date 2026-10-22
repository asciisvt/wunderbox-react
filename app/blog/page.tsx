import MainNav from "../_components/navigation/MainNav";
import { getPostSlugs, getPostBySlug } from "../../lib/BlogTools";

export default function Blog() {
  const slugs = getPostSlugs();
  const posts = slugs.map((slug) => getPostBySlug(slug));

  return (
    <div>
      <MainNav />
      <header className="grid min-h-svh place-items-center">
        <h1 className="font-fredoka text-parchment-100 text-[35vw] leading-[0.8] font-semibold tracking-tighter">
          blog
        </h1>
      </header>
      <main>
        <div className="bg-parchment-100 m-8 rounded-2xl px-2 py-4">
          {posts.map((post, index) => (
            <div key={index}>
              <h2>{post.data.title}</h2>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
