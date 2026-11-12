import MainNav from "@/app/_components/navigation/MainNav";
import { getPostSlugs } from "@/lib/BlogTools";
import PostList from "./_components/PostList";

export default function Blog() {
  const slugs = getPostSlugs();

  return (
    <div className="font-nunito text-parchment-100 overflow-hidden">
      <MainNav />
      <main className="relative">
        <header className="border-onyx-900 bg-banana-cream-500 after:bg-rosy-copper-500 text-rosy-copper-500 relative border-b-4 px-6 pt-16 pb-12 after:absolute after:top-10 after:-left-3 after:-z-10 after:h-full after:w-full after:rotate-2 after:content-[''] sm:px-10 lg:px-16 lg:pt-24 lg:pb-16">
          <div className="relative mx-auto max-w-7xl">
            <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="font-oswald text-lg font-bold tracking-[0.2em] uppercase">
                  Ideas, updates &amp; pretty much everything.
                </p>
                <h1 className="font-fredoka mt-2 text-[clamp(5rem,16vw,13rem)] leading-[0.78] font-semibold tracking-tighter">
                  the blog<span className="text-onyx-900">.</span>
                </h1>
              </div>
              <p className="border-rosy-copper-500 max-w-xs border-l-4 pl-4 text-base leading-relaxed font-bold md:mb-2">
                Behind the scenes for our projects and updates at
                <span className="bg-rosy-copper-500 text-parchment-100 mx-1 px-0.5">
                  <a href="/">wunderbox.games</a>
                </span>
                . Follow along, one post at a time.
              </p>
            </div>
          </div>
        </header>

        <section
          aria-labelledby="timeline-heading"
          className="mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16 lg:py-24"
        >
          <div className="border-parchment-100 mb-12 flex flex-wrap items-end justify-between gap-5 border-b-2 pb-6">
            <div>
              <p className="font-oswald text-md font-bold tracking-[0.2em] uppercase">
                The archive / newest first
              </p>
              <h2
                id="timeline-heading"
                className="font-fredoka mt-2 text-4xl font-semibold tracking-tight sm:text-5xl"
              >
                the story so far
                <span className="text-rosy-copper-500">.</span>
              </h2>
            </div>
            <span className="border-parchment-100 border-2 px-3 py-1 text-xs font-extrabold tracking-widest uppercase">
              {slugs.length} {slugs.length === 1 ? "post" : "posts"}
            </span>
          </div>
          <PostList slugs={slugs} />
        </section>
      </main>
    </div>
  );
}
