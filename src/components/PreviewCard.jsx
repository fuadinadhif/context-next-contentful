"use client";

import Image from "next/image";
import Link from "next/link";

export default function PreviewCard({ recipe }) {
  return (
    <article className="min-w-40 flex-1 border border-black text-center transition hover:-translate-y-10">
      <Link href={`/recipes/${recipe.slug}`}>
        <div className="h-40">
          <Image
            src={`https:${recipe.thumbnail.fields.file.url}`}
            alt=""
            width={recipe.thumbnail.fields.file.details.image.width}
            height={recipe.thumbnail.fields.file.details.image.height}
            className="h-full w-full object-cover"
          />
        </div>
        <p className="px-4 py-2">{recipe.title}</p>
      </Link>
    </article>
  );
}
