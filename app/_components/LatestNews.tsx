import { Icon } from "@iconify-icon/react";
import { getPostSlugs, getPostBySlug } from "@/lib/BlogTools";

export default function LatestNews() {
  const slugs = getPostSlugs();

  return (
    <div
      id="development-logs"
      className="text-parchment-100 font-nunito mx-8 my-6 flex flex-col gap-4"
    >
      <div className="flex items-center justify-between">
        <h2 className="bg-parchment-100 text-onyx-900 flex items-center rounded-full px-8 py-2 text-3xl font-extrabold tracking-wide">
          <Icon
            icon="reicon:pen-writing-filled"
            className="text-rosy-copper-500 mr-4 inline-block"
          ></Icon>
          development logs
        </h2>
        <hr className="border-parchment-100 flex-1 border-2" />
        <a
          className="text-parchment-100 bg-rosy-copper-500 rounded-full px-8 py-2 text-xl font-bold"
          href="/blog"
        >
          view all posts
        </a>
      </div>
      <div className="grid grid-cols-6 gap-2">
        {slugs.map((slug) => (
          <NewsItem key={slug} slug={slug} />
        ))}
      </div>
    </div>
  );
}

function NewsItem({ slug }: { slug: string }) {
  const { data, content } = getPostBySlug(slug);
  return (
    <a
      href={`/blog/${slug}`}
      className="bg-onyx-800 flex flex-col rounded-xl p-4"
    >
      <div className="flex flex-row justify-between gap-4">
        <p className="font-bold">{data.category}</p>
        <p className="text-rosy-copper-500">/</p>
        <p className="text-parchment-100 italic">{data.date}</p>
      </div>
      <div className="aspect-video overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mt-4 flex flex-col gap-2">
        <h3 className="text-xl font-bold">{data.title}</h3>
        <p className="text-parchment-100">{data.description}</p>
      </div>
    </a>
  );
}
