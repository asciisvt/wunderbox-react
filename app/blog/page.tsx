import MainNav from "@/app/_components/navigation/MainNav";
import PostList from "./_components/PostList";
import LatestPost from "./_components/LatestPost";
import { getPostSlugs } from "@/lib/BlogTools";

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
      <main className="grid grid-cols-4 gap-1 mx-8 my-4">
        <PostList slugs={slugs} className="col-span-1" />
        {slugs.length > 0 && <LatestPost slug={slugs[0]} className="col-span-3" />}
      </main>
    </div>
  );
}

