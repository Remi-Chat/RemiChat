import { type LucideIcon } from "lucide-react";

interface FeatureItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
  iconColor: string;
  bgColor: string;
}

export function FeatureItem({
  icon: Icon,
  title,
  description,
  iconColor,
  bgColor,
}: FeatureItemProps) {
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${bgColor}`}
      >
        <Icon className={`w-8 h-8 ${iconColor}`} />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-[#3B1E54]">{title}</h3>
      <p className="text-[#3B1E54]/70 max-w-sm">{description}</p>
    </div>
  );
}
