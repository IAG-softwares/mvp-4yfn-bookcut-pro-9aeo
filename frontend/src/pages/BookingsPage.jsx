import StatsCard from '../components/StatsCard'
import DataTable from '../components/DataTable'

export default function BookingsPage() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Bookings</h1>
        <p className="text-slate-400">Manage and view all salon appointments</p>
      </div>

      <div key="0" className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Bookings Management</h1>
          <p className="text-slate-400">View and manage all appointments</p>
        </div>
        <div className="flex gap-2">
          <button className="btn-primary"><i className="fa-solid fa-plus mr-2"></i>New Booking</button>
        </div>
      </div>

      <StatsCard key="1" data={[]} />

      <DataTable key="2" columns={[{"key":"customerName","label":"Customer","type":"text"},{"key":"service","label":"Service","type":"text"},{"key":"staff","label":"Staff","type":"text"},{"key":"appointmentDate","label":"Date","type":"date"},{"key":"appointmentTime","label":"Time","type":"time"},{"key":"price","label":"Price","type":"currency"},{"key":"status","label":"Status","type":"badge"}]} rows={[]} />
    </div>
  )
}
