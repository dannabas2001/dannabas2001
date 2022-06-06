import React, { useEffect } from 'react'
import {Form , Button} from 'react-bootstrap'
import FormHook from '../Hooks/Form'
import { FondoForm } from '../Styles'
import axios from 'axios'
import { uploadFile } from '../helpers/uploadImg'
export default function FormCont() {
const [data, handleChange, reset]= FormHook({
name:"", 
categoria:"",
precio:"",
Descripción:"", 
img:"",
order:"Todos"

});
const handleImg = ({ target }) => {
  const file = target.files[0];
  console.log(file)}
useEffect(() => {
  

}, [])


  return (
    <><FondoForm>
      <Form style={{ backgroundColor: "#9e5281", padding:"5rem", borderRadius:"10px"}}>
        <Form.Group className="mb-3">
          <Form.Label style={{color:"white"}}>Nombre del Producto</Form.Label>
          <Form.Control type="text" placeholder="Nombre del Producto"name = "name" onChange={handleChange}  />
        </Form.Group>

        <Form.Group className="mb-3" >
          <Form.Label style={{color:"white"}}>Descripción del Producto</Form.Label>
          <Form.Control type="Text" placeholder="Describe el producto"  name="Descripción" onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label style={{color:"white"}}>Precio del Producto</Form.Label>
          <Form.Control type="Number" placeholder="Precio del producto" name="precio" onChange={handleChange}  />
        </Form.Group>
        <Form.Group className="mb-3" >
        <Form.Label style={{color:"white"}} >Categoria</Form.Label>
        <select  name="categoria" onChange={handleChange} > 
                        <option>Copas Menstruales</option>
                        <option>Productos de Cuidado</option>
        </select>
        </Form.Group>
        <input accept="image/*" name="img" style={{color:"white"}} type="file" onChange={handleImg} />
        
        <Button style={{backgroundColor:"green",border:"none", marginTop:"2rem"} } type="submit">
          Submit
        </Button>
      </Form>
      </FondoForm>
    </>
  )
}
