export default async function Docs({ params }) {
  const { slug } = await params;
  if (slug && slug.length === 2) {
    return (
      <h1>
        {slug[0]} özelliği için {slug[1]} konseptini görüntülüyorsunuz
      </h1>
    );
  }
  if (slug && slug.length === 1) {
    return <h1>{slug[0]} özelliği için dokümanları görüntülüyorsunuz</h1>;
  }
  return <h1>Docs Sayfası</h1>;
}
