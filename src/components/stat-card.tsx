interface StatCardProps {
  value: string
  label: string
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="flex flex-col items-center p-4 bg-[#D4BEE4]/20 rounded-lg">
      <div className="text-3xl font-bold mb-2 text-[#3B1E54]">{value}</div>
      <div className="text-sm text-[#3B1E54]/80">{label}</div>
    </div>
  )
}

