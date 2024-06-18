"use client";

import { createContext, useState, useEffect } from "react";
import { createClient } from "contentful";

export const RecipesContext = createContext([]);

export default function RecipesProvider({ children }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    async function fetchRecipes() {
      try {
        const client = createClient({
          space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID,
          accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN,
        });
        const data = await client.getEntries({ content_type: "recipe" });
        setRecipes(data.items);
      } catch (error) {
        console.error(error);
      }
    }

    fetchRecipes();
  }, []);

  return (
    <RecipesContext.Provider value={recipes}>
      {children}
    </RecipesContext.Provider>
  );
}
