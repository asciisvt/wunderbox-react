import Image from "next/image";
import Link from "next/link";
import { getPostBySlug } from "@/lib/BlogTools";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "2-digit",
  year: "numeric",
  timeZone: "UTC",
});

export default function PostList({ slugs }: { slugs: string[] }) {
  const posts = slugs
    .map((slug) => {
      const { data } = getPostBySlug(slug);
      const date = new Date(data.date);
      return { slug, data, date };
    })
    .sort((a, b) => {
      const aTime = a.date.getTime();
      const bTime = b.date.getTime();
      return (
        (Number.isNaN(bTime) ? -Infinity : bTime) -
        (Number.isNaN(aTime) ? -Infinity : aTime)
      );
    });

  if (posts.length === 0) {
    return (
      <p className="border-parchment-100 border-2 p-6 text-lg font-bold">
        No posts yet. Check back soon.
      </p>
    );
  }

  return (
    <ol className="before:bg-parchment-100 relative before:absolute before:top-2 before:bottom-0 before:left-[9px] before:w-1 md:before:left-1/2 md:before:-translate-x-1/2">
      {posts.map(({ slug, data, date }, index) => (
        <li
          key={slug}
          className="relative grid grid-cols-1 gap-4 pb-14 pl-9 last:pb-0 md:grid-cols-2 md:gap-0 md:pb-20 md:pl-0"
        >
          <span
            aria-hidden="true"
            className="border-parchment-100 bg-rosy-copper-500 absolute top-2 left-0 z-10 h-[22px] w-[22px] border-4 md:left-1/2 md:-translate-x-1/2"
          />
          <div className="md:pr-12 md:text-right lg:pr-16">
            <p className="text-rosy-copper-400 text-xs font-extrabold tracking-[0.2em] uppercase">
              Entry {String(index + 1).padStart(2, "0")}
            </p>
            <time
              dateTime={
                Number.isNaN(date.getTime()) ? undefined : date.toISOString()
              }
              className="font-oswald mt-1 block text-2xl font-bold tracking-wide uppercase sm:text-3xl"
            >
              {Number.isNaN(date.getTime())
                ? String(data.date || "Date unknown")
                : dateFormatter.format(date)}
            </time>
          </div>

          <article className="md:pl-12 lg:pl-16">
            <Link
              href={`/blog/${slug}`}
              className="group border-onyx-900 bg-parchment-100 text-onyx-900 focus-visible:outline-banana-cream-400 block border-4 shadow-[10px_14px_0_var(--color-rosy-copper-500)] transition-transform hover:-translate-y-1 focus-visible:outline-4 focus-visible:outline-offset-8"
            >
              <div className="border-onyx-900 bg-parchment-200 relative aspect-[2/1] border-b-4">
                <div className="absolute inset-0 overflow-hidden bg-black/10">
                  <Image
                    src={data.image}
                    alt=""
                    fill
                    unoptimized
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <span className="border-onyx-900 bg-banana-cream-400 absolute -bottom-3 left-3 -rotate-6 border-2 px-3 py-1 text-xs font-extrabold tracking-widest uppercase">
                  {data.category}
                </span>
              </div>
              <div className="p-5 sm:p-7">
                <h3 className="font-fredoka text-2xl leading-tight font-semibold sm:text-3xl">
                  {data.title}
                </h3>
                <p className="text-onyx-700 mt-3 text-base leading-relaxed font-semibold">
                  {data.description}
                </p>
                <span className="border-rosy-copper-500 mt-6 inline-flex items-center gap-2 border-b-2 pb-1 text-sm font-extrabold tracking-wide uppercase">
                  Read the story <span aria-hidden="true">↗</span>
                </span>
              </div>
            </Link>
          </article>
        </li>
      ))}
    </ol>
  );
}
