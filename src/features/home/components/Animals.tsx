"use client";

import { use } from "react";
import { getBreeds, type Breed } from "../api";

const Animals = () => {
  const userData = use(getBreeds());

  return (
    <section>
      <h1>Animals</h1>
      <ul>
        {userData.map((animal: Breed) => (
          <li key={animal.id}>{animal.attributes.name}</li>
        ))}
      </ul>
    </section>
  );
};

export default Animals;
