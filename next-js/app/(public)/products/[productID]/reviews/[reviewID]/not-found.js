"use client";
import { usePathname } from "next/navigation";
export default function YorumBulunamadı() {
  const pathname = usePathname();
  const productId = pathname.split("/")[2];
  const reviewId = pathname.split("/")[4];
  return (
    <div>
      <h1 className="text-2xl text-red-600">
        {reviewId} nolu yorum bulunamadı
      </h1>
      <p>{productId} için inceleme mevcut değil.</p>
    </div>
  );
}
