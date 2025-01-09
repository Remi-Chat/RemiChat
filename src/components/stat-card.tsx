import Image from "next/image";

interface ImageStatCardProps {
  imageUrl: string;
  value: string;
  label: string;
}

export function ImageStatCard({ imageUrl, value, label }: ImageStatCardProps) {
  return (
    <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-lg">
      <Image
        src={imageUrl}
        alt={label}
        fill
        className="object-cover"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <div className="absolute inset-x-0 bottom-0 flex flex-col items-center justify-end p-4 bg-gradient-to-t from-black/60 to-transparent h-1/2">
        <div className="text-3xl font-bold mb-2 text-[#EEEEEE]">{value}</div>
        <div className="text-sm text-[#EEEEEE]/80">{label}</div>
      </div>
    </div>
  );
}
