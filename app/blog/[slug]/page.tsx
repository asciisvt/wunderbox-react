import { getPostSlugs, getPostBySlug } from "@/lib/BlogTools";


export default async function Post(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const { data } = getPostBySlug(slug);

  return (
    <div className="bg-parchment-100 text-onyx-900 text-2xl font-nunito m-8 rounded-2xl px-2 py-4">
      <h1>Post Title: {data.title}</h1>
      <p>Post Author: {data.author}</p>
      <p>Post Date: {data.date}</p>
      <p>Post Category: {data.category}</p>
      <img src={data.image} alt={data.title} className="h-[50%] w-[50%] object-cover" />
      {/* <div dangerouslySetInnerHTML={{ __html: data.content }}></div> */}
    </div>
  );
}

// Needed to generate static paths for Next.js to pre-render blog posts at build time
export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}
