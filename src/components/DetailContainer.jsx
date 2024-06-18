"use client";

import { useContext, useEffect, useState } from "react";
import { createClient } from "contentful";
import Link from "next/link";

import { RecipesContext } from "@/contexts/RecipesContext";

export default function DetailContainer({ slug }) {
  const recipes = useContext(RecipesContext);
  const recipeID = recipes.find((recipe) => recipe.fields.slug === slug)?.sys
    .id;

  const [recipe, setRecipe] = useState([]);

  useEffect(() => {
    async function fetchRecipe(id) {
      try {
        const client = createClient({
          space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
          accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
        });
        const data = await client.getEntry(id);
        setRecipe(data.fields);
      } catch (error) {
        console.error(error);
      }
    }

    fetchRecipe(recipeID);
  }, [recipeID]);

  const { title, cookingTime, description } = recipe;
  return (
    <section className="mx-auto flex min-h-screen max-w-2xl flex-col justify-center p-6">
      <Link
        href={"/"}
        className="flex w-fit items-center gap-3 border border-black pl-3 pr-4"
      >
        <span className="rotate-180 text-2xl">➜</span>
        <span>Home</span>
      </Link>
      <h1 className="mt-6 text-7xl font-bold">{title}</h1>
      <p className="mt-4 text-lg font-bold">
        <span className="text-3xl">⏳</span> {cookingTime} minutes to make
      </p>
      <p className="mt-2">{description}</p>
    </section>
  );
}
