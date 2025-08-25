import Image from "next/image";

interface CategoryCardProps {
  title: string;
  img: string;
}

export default function CategoryCard({ title, img }: CategoryCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:scale-105 transition">
      <Image src={img} alt={title} width={300} height={300} className="object-cover" />
      <div className="p-4 text-center font-semibold text-brown">{title}</div>
    </div>
  );
}
