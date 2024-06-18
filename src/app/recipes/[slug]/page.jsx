import DetailContainer from "@/components/DetailContainer";

export default function Page({ params }) {
  return <DetailContainer slug={params.slug} />;
}
