import { getFields } from "./fields"
import { useRef, useState } from "react"
import { validateForm } from "./validaciones"
import Swal from "sweetalert2"

export const ProductForm = () => {

  const [formData, setFormData] = useState({})
  const [errors, setErrors] = useState({})
  const formRef = useRef(null)


  const fields = getFields()


  const handleSubmit = (e) => {
    e.preventDefault()

    const errors = validateForm(formData)
    if (Object.keys(errors).length > 0) {
      setErrors(errors)
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, corrige los errores en el formulario',
      })
      return
    }

    Swal.fire({
      icon: 'success',
      title: 'Exito',
      text: 'El producto se agrego correctamente',
      showConfirmButton: false,
      timer: 1500
    })
    setFormData({})
    setErrors({})
    formRef.current.reset()
  }

  return (
    <form onSubmit={handleSubmit} ref={formRef} className="row">
      {fields.map(field => (
        field.type === "select" ? (
          <div key={field.id} className="mb-3 col-lg-4 p-2">
            <label htmlFor={field.id} className="form-label d-flex gap-2">
              {field.label}
              {field.required && <span className="text-danger">*</span>}
            </label>
            <select id={field.id} className="form-select" value={formData[field.id]} onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}>
              {field.options.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <div key={field.id} className="mb-3 col-lg-4 p-2">
            <label htmlFor={field.id} className="form-label d-flex gap-2">
              {field.label}
              {field.required && <span className="text-danger">*</span>}
            </label>
            <input type={field.type} id={field.id} required={field.required} onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })} className="form-control" />
          </div>
        )
      ))}


      {errors && Object.keys(errors).length > 0 && (
        <div className="alert alert-danger">
          <ul>
            {Object.values(errors).map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}



      <div className="col-lg-12">
        <button type="submit" className="btn btn-dark">Agregar Producto</button>
      </div>
    </form >
  )
}


