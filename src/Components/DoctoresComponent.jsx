import React, { Component } from 'react'
import DetallesDoctor from './DettallesDoctor';
import ServiceHosptitales from '../services/ServiceHospitales';
import { Global } from '../Global';
import axios from 'axios';

export default class DoctoresComponent extends Component {

  doctoresService = new ServiceHosptitales();

  counter = 0;

  state = {
    doctores: [],
    doctorDettales: null
  }

  loadDoctores = () => {
    this.doctoresService.getDoctoresByIdHospital(this.props.idHospital).then((doctores) => {
      this.setState({
        doctores: doctores 
      });
    })
  }

  getDetallesDoctorById = (id) => {
    axios.get(Global.apiDoctores + "/" + id).then((response) => {
      this.setState({
        doctorDettales: response.data
      });
    })
  }

  componentDidMount() {
    this.loadDoctores();
  }

  componentDidUpdate = (oldProps) => {
    if(oldProps.idHospital !== this.props.idHospital){
      this.loadDoctores();
      this.setState({
        doctorDettales: null
      })
    }
  }

  render() {
    return (
      <div className='container'>
        <h1>Doctores del hospital {this.props.idHospital}</h1>
        {
          this.state.doctores.length > 0 &&
          <table className='table'>
            <thead>
              <tr>
                {
                Object.keys(this.state.doctores[0]).map((clave) => {
                    return(<td key={this.counter++}>{clave}</td>)
                })
                }
                <td>Detalles</td>
              </tr>
            </thead>
            <tbody>
                {
                  this.state.doctores.map((doctor) => {
                    let result = []
                    for (const value of Object.values(doctor)) {
                      result.push(<td key={this.counter++}>{value}</td>);
                    }
                    result.push(<td key={this.counter++}><DetallesDoctor idDoc={doctor.idDoctor} getDetallesDoctorById={this.getDetallesDoctorById} /></td>);
                    return(<tr key={this.counter++}>{result}</tr>)
                  })
                }
            </tbody>
          </table>
        }
        {
          this.state.doctorDettales !== null &&
          <table className='table'>
            <thead>
              <tr>
                {
                 Object.keys(this.state.doctores[0]).map((clave) => {
                    return(<td key={this.counter++}>{clave}</td>)
                 })
                }
              </tr>
            </thead>
            <tbody>
                  <tr>
                    {
                      Object.values(this.state.doctorDettales).map((value) => {
                        return(<td key={this.counter++}>{value}</td>)
                      })
                    }
                  </tr>
            </tbody>
          </table>
        }
      </div>
    )
  }
}
