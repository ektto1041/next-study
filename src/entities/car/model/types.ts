export interface Car {
  id: string;
  name: string;
  dist: number;
}

export type CarForm = Omit<Car, "id">;
