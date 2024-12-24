import { Car, CarItem } from "@entities/car";
import { Suspense } from "react";

interface SlugPageProps {
  carId: string;
}

export function SlugPage({ carId }: SlugPageProps) {
  const car: Promise<Car> = fetch(
    `https://674e6222635bad45618e70e6.mockapi.io/cars/${carId}`
  ).then((response) => response.json());

  return (
    <>
      <Suspense fallback={<h1>{carId} Car 정보 가져오는 중...</h1>}>
        <CarItem carPromise={car} />
      </Suspense>
    </>
  );
}
