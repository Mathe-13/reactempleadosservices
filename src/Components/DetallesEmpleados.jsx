import React, { Component } from 'react'

export default class DetallesEmpleados extends Component {
  state = {
    empleado: null
  }

  findEmpleado = () => {

  }

  componentDidMount = () => {

  }

  //componentDidUpdate = (oldProps) =>{

  //}


  render() {
    return (
      <div>
        <h1>DetallesEmpleados</h1>
        {
          this.state.empleado &&
          (<ul className='list group'>
            <li className='list group-item'>

            </li>

          </ul>)
        }

      </div>
    )
  }
}
