"use client";

import { use } from "react";
import { Car } from "../model/types";

interface CarItemProps {
  carPromise: Promise<Car>;
}

export function CarItem({ carPromise }: CarItemProps) {
  const car = use(carPromise);

  return (
    <>
      <h1>{car.name}</h1>
      <h2>{car.dist}</h2>
    </>
  );
}
