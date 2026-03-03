import StatsCard from '../components/StatsCard'

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Dashboard</h1>
        <p className="text-slate-400">Overview of salon performance and key metrics</p>
      </div>

      <div key="0" className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">BookCut Pro Dashboard</h1>
          <p className="text-slate-400">Manage your salon bookings efficiently</p>
        </div>
        
      </div>

      <StatsCard key="1" data={[]} />

      <div key="2" className="card">
        <p className="text-slate-400">Component: card</p>
      </div>
    </div>
  )
}
