import Image from "next/image";
import Link from "next/link";

export function BlogPage() {
  return (
    <>
      <h1>Blog Page</h1>
      <Image
        src="https://item.kakaocdn.net/do/493188dee481260d5c89790036be0e66113e2bd2b7407c8202a97d2241a96625"
        alt="AmuImage"
        width={210}
        height={210}
        placeholder="blur"
        blurDataURL="/image-placeholder.png"
      />
      <Link href={`/blog/3`}>#3</Link>
    </>
  );
}
