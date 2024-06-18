"use client";

import { useContext } from "react";
import { RecipesContext } from "@/contexts/RecipesContext";

import ItemCard from "./PreviewCard";

export default function PreviewContainer() {
  const recipes = useContext(RecipesContext);

  return (
    <section className="mx-auto flex min-h-screen max-w-2xl flex-wrap content-center items-center gap-8 p-6">
      {recipes.map((recipe) => (
        <ItemCard key={recipe.sys.id} recipe={recipe.fields} />
      ))}
    </section>
  );
}
