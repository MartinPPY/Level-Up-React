import { getFields } from "./fields"
import { useState } from "react"

export const ProductForm = () => {

  const [formData, setFormData] = useState({})
  const fields = getFields()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <form onSubmit={handleSubmit}>
      {fields.map(field => (
        field.type === "select" ? (
          <div key={field.id} className="mb-3">
            <label htmlFor={field.id} className="form-label">
              {field.label}
            </label>
            <select id={field.id} className="form-select" value={formData[field.id]} onChange={(e) => setFormData({...formData, [field.id]: e.target.value})}>
              {field.options.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <div key={field.id} className="mb-3">
            <label htmlFor={field.id} className="form-label">
              {field.label}
            </label>
            <input type={field.type} id={field.id} placeholder={field.placeholder} required={field.required} onChange={(e) => setFormData({...formData, [field.id]: e.target.value})} className="form-control" />
          </div>
        )
      ))}
      <button type="submit" className="btn btn-dark">Agregar Producto</button>
    </form>
  )
}


