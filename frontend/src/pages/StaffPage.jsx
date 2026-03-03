import StatsCard from '../components/StatsCard'
import FormComponent from '../components/FormComponent'

export default function StaffPage() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Staff Management</h1>
        <p className="text-slate-400">Manage staff members and their specializations</p>
      </div>

      <div key="0" className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Staff Management</h1>
          <p className="text-slate-400">Manage your team and their specializations</p>
        </div>
        <div className="flex gap-2">
          <button className="btn-primary"><i className="fa-solid fa-user-plus mr-2"></i>Add Staff Member</button>
        </div>
      </div>

      <StatsCard key="1" data={[]} />

      <FormComponent key="2" title="Add Staff Member" fields={[{"name":"name","label":"Full Name","type":"text","required":true},{"name":"email","label":"Email","type":"email","required":true},{"name":"phone","label":"Phone","type":"tel","required":true},{"name":"specializations","label":"Specializations","type":"select","required":true,"options":["Haircut","Hair Coloring","Manicure","Pedicure","Facial","Eyebrow Threading","Hair Styling"]},{"name":"workingHours","label":"Working Hours","type":"text","required":true},{"name":"hourlyRate","label":"Hourly Rate","type":"currency","required":true},{"name":"status","label":"Status","type":"select","required":true,"options":["Active","Inactive","On Leave"]}]} />

      <div key="3" className="card">
        <h3 className="text-lg font-semibold mb-4">Staff Members</h3>
        <div className="space-y-3">
          
          <div className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg">
            <i className="fa-solid fa-circle text-blue-400"></i>
            <div>
              <p className="text-sm font-medium">undefined</p>
              <p className="text-xs text-slate-400">undefined</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-lg">
            <i className="fa-solid fa-circle text-blue-400"></i>
            <div>
              <p className="text-sm font-medium">undefined</p>
              <p className="text-xs text-slate-400">undefined</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
