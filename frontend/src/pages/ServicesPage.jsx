import FormComponent from '../components/FormComponent'
import DataTable from '../components/DataTable'

export default function ServicesPage() {
  return (
    <div className="space-y-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Services</h1>
        <p className="text-slate-400">Manage salon services and pricing</p>
      </div>

      <div key="0" className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold">Services Management</h1>
          <p className="text-slate-400">Configure your salon services and pricing</p>
        </div>
        <div className="flex gap-2">
          <button className="btn-primary"><i className="fa-solid fa-plus mr-2"></i>Add Service</button>
        </div>
      </div>

      <FormComponent key="1" title="Add New Service" fields={[{"name":"name","label":"Service Name","type":"text","required":true},{"name":"description","label":"Description","type":"textarea","required":false},{"name":"duration","label":"Duration (minutes)","type":"number","required":true},{"name":"price","label":"Price","type":"currency","required":true},{"name":"category","label":"Category","type":"select","required":true,"options":["Hair Services","Nail Services","Facial Services","Styling"]},{"name":"skillRequired","label":"Skill Required","type":"select","required":true,"options":["Haircut","Hair Coloring","Manicure","Pedicure","Facial","Eyebrow Threading","Hair Styling"]},{"name":"active","label":"Active","type":"select","required":true,"options":["Yes","No"]}]} />

      <DataTable key="2" columns={[{"key":"name","label":"Service","type":"text"},{"key":"category","label":"Category","type":"text"},{"key":"duration","label":"Duration","type":"text"},{"key":"price","label":"Price","type":"currency"},{"key":"skillRequired","label":"Skill Required","type":"text"},{"key":"active","label":"Status","type":"badge"}]} rows={[]} />
    </div>
  )
}
