export default async function UrunDetay({ params }) {
  const { productID } = await params;
  return (
    <h1 className="text-2xl">{productID} Numaralı Ürünün Detay Sayfası</h1>
  );
}
