import { axiosInstance } from "../../../shared/api/axiosConfig";

export interface Breed {
  id: string;
  attributes: {
    name: string;
    description: string;
    life: {
      max: number;
      min: number;
    };
  };
}

// ¡Clave! Memoiza la promesa fuera del componente para evitar recrearla
let breedsPromise: Promise<Breed[]> | null = null;

export const getBreeds = (): Promise<Breed[]> => {
  if (!breedsPromise) {
    breedsPromise = axiosInstance
      .get("/breeds")
      .then((response) => response.data); // Asume que la API devuelve { data: Breed[] }
  }
  return breedsPromise;
};
