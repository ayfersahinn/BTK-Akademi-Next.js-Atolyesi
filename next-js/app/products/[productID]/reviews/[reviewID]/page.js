export default async function YorumDetay({ params }) {
  const { productID, reviewID } = await params;
  return (
    <div>
      <h1>Yorum: {reviewID}</h1>
      <h1>Product: {productID}</h1>
    </div>
  );
}
