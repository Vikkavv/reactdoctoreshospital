import axios from 'axios';
import React, { Component } from 'react'
import { Global } from '../Global';
import { Navigate } from 'react-router-dom';
import ServiceHosptitales from '../services/ServiceHospitales';

export default class CreateHospitales extends Component {

  service = new ServiceHosptitales();

  nombreInputRef = React.createRef();
  direccionInputRef = React.createRef();
  telefonoInputRef = React.createRef();
  camasInputRef = React.createRef();

  state = {
    message: "",
    status: false
  }

  sendCreateHospitalInfo = (e) => {
    e.preventDefault();
    let hospital = {
      idHospital: 0,
      nombre: this.nombreInputRef.current.value,
      direccion: this.direccionInputRef.current.value,
      telefono: this.telefonoInputRef.current.value,
      camas: this.camasInputRef.current.value
    }
    this.service.insertHospital(hospital).then((res) => {
      this.setState({
        message: res.status,
        status: true
      })
    });
  }

  render() {
    return (
      <div className='container flex flex-wrap align-content-center flex-direction-column'>
        {
          this.state.status &&
          <Navigate to="/Hospitales"/>
        }
        <h1 className='w-fitContent'>CreateHospitales</h1>
        <form className='w-fitContent' onSubmit={this.sendCreateHospitalInfo}>
          <label htmlFor="nombre">Nombre</label><br />
          <input type="text" name="nombre" id="nombre" required ref={this.nombreInputRef}/><br />

          <label htmlFor="direccion">Dirección</label><br />
          <input type="text" name="direccion" id="direccion" required ref={this.direccionInputRef}/><br />

          <label htmlFor="telefono">Numero de teléfono</label><br />
          <input type="tel" name="telefono" id="telefono" required ref={this.telefonoInputRef}/><br />

          <label htmlFor="camas">Numero de camas</label><br />
          <input type="number" name="camas" id="camas" ref={this.camasInputRef}/><br /><br />


          <button className='btn btn-outline-success' type='submit' >Crear hospital</button><br />
        </form>
        <h1 className='text-success'>{this.state.message}</h1>
      </div>
    )
  }
}
