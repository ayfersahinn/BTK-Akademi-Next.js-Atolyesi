import { notFound } from "next/navigation";
export default async function YorumDetay({ params }) {
  const { productID, reviewID } = await params;
  if (parseInt(reviewID) > 1000) {
    notFound();
  }
  return (
    <div>
      <h1>Yorum: {reviewID}</h1>
      <h1>Ürün: {productID}</h1>
    </div>
  );
}
