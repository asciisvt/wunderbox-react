import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-onyx-900 flex min-h-screen flex-col items-center justify-center text-white">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  );
}
