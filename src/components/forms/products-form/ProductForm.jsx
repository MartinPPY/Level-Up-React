import { getFields } from "./fields"
import { useEffect, useRef, useState } from "react"
import { validateForm } from "./validaciones"
import Swal from "sweetalert2"
import { createProduct, getAllProducts, updateProduct } from "../../../services/product.service"
import { getAllCategories } from "../../../services/category.service"

export const ProductForm = ({ setProductos, formData, setFormData, editingProductCode, setEditingProductCode, setIsEditing, isEditing }) => {


  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [categories, setCategories] = useState([])
  const formRef = useRef(null)

  useEffect(() => {

    const getCategorias = async () => {
      const response = await getAllCategories()
      setCategories(response)
    }

    getCategorias()

  }, [])

  const fields = getFields(
    categories
  )


  const handleSubmit = async (e) => {
    e.preventDefault()

    console.log(formData)

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



    try {
      setLoading(true)

      if (!isEditing) {
        await createProduct({
          code: formData.codigo,
          name: formData.nombre,
          description: formData.descripcion,
          precio: formData.precio,
          stock: formData.stock,
          stockCritico: formData.stockCritico,
          image: formData.image,
          category: formData.categoria
        })

        Swal.fire("Exito", "Producto guardado correctamente", "success").then(async () => {
          setEditingProductCode(null)
          const productos = await getAllProducts()
          setProductos(productos)
          setLoading(false)

        })
      } else {
        await updateProduct(editingProductCode, {
          code: formData.codigo,
          name: formData.nombre,
          description: formData.descripcion,
          precio: formData.precio,
          stock: formData.stock,
          stockCritico: formData.stockCritico,
          image: formData.image,
          category: formData.categoria
        })
        Swal.fire("Exito", "Producto editado correctamente", "success").then(async () => {
          setEditingProductCode(null)
          const productos = await getAllProducts()
          setProductos(productos)
          setLoading(false)

        })

      }




    } catch (error) {
      console.error(error)
      Swal.fire("Error", "No se ha podido registrar el producto", "error")
    } finally {
      setFormData({})
      setIsEditing(false)
    }

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
            <select id={field.id} className="form-select" value={formData[field.id] ?? ""} onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}>
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
            <input type={field.type} id={field.id} required={field.required} value={formData[field.id] ?? ""} onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })} className="form-control" />
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



      <div className="col-lg-12 d-flex gap-2">
        <button type="submit" className="btn btn-dark" disabled={loading}>{loading ? "Cargando..." : "Guardar Cambios"}</button>
        {
          isEditing && <button type="button" className="btn btn-danger" onClick={() => {
            setIsEditing(false)
            setFormData({})
          }} >Cancelar</button>
        }

      </div>
    </form >
  )
}


