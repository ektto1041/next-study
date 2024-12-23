import Link from "next/link";

export function BlogPage() {
  return (
    <>
      <h1>Blog Page</h1>
      <Link href={`/blog/3`}>#3</Link>
    </>
  );
}
