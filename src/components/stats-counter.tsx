import { Users, DollarSign } from "lucide-react";
import NumberTicker from "./ui/number-ticker";

interface StatsCounterProps {
  signups: number;
  donations: number;
}

export function StatsCounter({ signups, donations }: StatsCounterProps) {
  return (
    <div className="flex flex-row items-center gap-8 py-8">
      {/* Signups Counter */}
      <div className="flex items-center gap-6">
        <div className="w-12 h-12 rounded-full bg-[#D4BEE4] flex items-center justify-center">
          <Users className="w-6 h-6 text-[#3B1E54]" />
        </div>
        <div className="flex flex-col">
          <span className="text-3xl font-bold text-[#3B1E54]">
            <NumberTicker value={signups} />
          </span>
          <span className="text-sm text-gray-500">Total Signups</span>
        </div>
      </div>

      {/* Divider */}
      <div className="hidden sm:block w-px h-16 bg-gray-200" />

      {/* Donations Counter */}
      <div className="flex items-center gap-6">
        <div className="w-12 h-12 rounded-full bg-[#9B7EBD] flex items-center justify-center">
          <DollarSign className="w-6 h-6 text-white" />
        </div>
        <div className="flex flex-col">
          <span className="text-3xl font-bold text-[#3B1E54]">
            <NumberTicker value={donations} />
          </span>
          <span className="text-sm text-gray-500">Total Donations</span>
        </div>
      </div>
    </div>
  );
}
