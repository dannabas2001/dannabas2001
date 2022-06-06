import React from 'react';
import {Table, Button} from 'react-bootstrap';
import { ContTabla } from '../Styles';

export default function Products() {
  return (
    <ContTabla><Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Nombre</th>
        <th>Categoría</th>
        <th>Precio</th>
        <th>Descripción</th>
        <th>Imagen</th>
        <th>Eliminar</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>Mark</td>
        <td>Otto</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td>@mdo</td>
        <td><Button variant="danger">Eliminar</Button></td>
      </tr>
      <tr>
        <td>2</td>
        <td>Jacob</td>
        <td>Thornton</td>
        <td>@fat</td>
      </tr>
      <tr>
        <td>3</td>
        <td colSpan={2}>Larry the Bird</td>
        <td>@twitter</td>
      </tr>
    </tbody>
  </Table></ContTabla>
  )
}
