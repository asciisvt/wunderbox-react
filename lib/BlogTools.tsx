import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();
const postsDirectory = path.join(process.cwd(), "app", "blog", "_posts");

export function getPostSlugs(): string[] {
  const slugs = fs.readdirSync(postsDirectory, {
    withFileTypes: false
  });

  let parsedSlugs = slugs.map(slug => slug.toString().replace(".md", ""));
  return parsedSlugs;
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, slug + ".md");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const htmlContent = md.render(content);

  return {
    data,
    content: htmlContent,
  };
}
