import fs from "fs";
import path from "path";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";

const md = new MarkdownIt();
const postsDirectory = path.join(process.cwd(), "app", "blog", "_posts");
const slugs = () => {
  return fs.readdirSync(postsDirectory, {
    withFileTypes: false,
  }).map((slug) => slug.toString().replace(".md", ""));
};

export function getPostSlugs(): string[] {
  return slugs();
}

export function getPostBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, slug + ".md");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  const htmlContent = md.render(content);

  if (!data.description) {
    data.description = content.slice(0, 100) + "...";
  }

  if (!data.image) {
    data.image = "/images/default-blog-image.png";
  }

  return {
    data,
    content: htmlContent,
  };
}

export function getPostContentBySlug(slug: string) {
  const fullPath = path.join(postsDirectory, slug + ".md");
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { content } = matter(fileContents);
  return md.render(content);
}