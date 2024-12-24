import { Car } from "@/src/entities/car";
import Image from "next/image";
import Link from "next/link";

export async function BlogPage() {
  const response = await fetch(
    "https://674e6222635bad45618e70e6.mockapi.io/cars"
  );

  const cars: Car[] = await response.json();

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
      {cars &&
        cars.map((car, i) => (
          <div key={i}>
            <Link href={`/blog/${car.id}`}>#{car.id}</Link>
          </div>
        ))}
    </>
  );
}
