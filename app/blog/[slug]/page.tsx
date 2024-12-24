import { SlugPage } from "@/src/pages/slug";

export default async function Slug({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <SlugPage carId={(await params).slug} />;
}
