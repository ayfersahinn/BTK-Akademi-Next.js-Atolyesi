export default async function Yorumlar({ params }) {
  const { productID } = await params;
  return (
    <div>
      <h1>{productID} Ürünün Yorumları</h1>
      <ul>
        <li>Review 1: Harika ürün</li>
        <li>Review 2: Tavsiye edilir</li>
        <li>Review 3: Göründüğü gibi geldi</li>
      </ul>
    </div>
  );
}
