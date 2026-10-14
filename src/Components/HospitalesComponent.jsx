import React, { Component } from 'react'
import ServiceHosptitales from '../services/ServiceHospitales';

export default class HospitalesComponent extends Component {

    service = new ServiceHosptitales();

    state = {
        hospitales: []
    }

    getHospitales = async () => {
        /*this.service.hospitalesPromise.then((hospitales) => {
            this.setState({
                hospitales: hospitales
            })
        });*/
        this.service.getHospitalesPromise().then((hospitales) => {
            this.setState({
                hospitales: hospitales
            })
        });
        /*this.setState({
            hospitales: await this.service.getHospitalesPromise()
        })*/
    }

    componentDidMount() {
        this.getHospitales();
    }

  render() {
    return (
      <div className='container'>
        <br />
        <h1>Hospitales</h1>
        <br />
        <div className='grid-col4 gap1'>
            {
                this.state.hospitales.map((hospital, i) => {
                    return(
                        <div key={i} className="card" style={{width: "18rem"}}>
                            <div className="card-body">
                                <h5 className="card-title">{hospital.nombre}</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">{hospital.direccion}</h6>
                                <p className="card-text">tel: {hospital.telefono}</p>
                                <p className="card-text">#Camas: {hospital.camas}</p>
                                <a href={"/Doctores/" + hospital.idHospital} className="card-link">Ver hospital</a>
                            </div>
                        </div>
                    )
                })
            }
        </div>
      </div>
    )
  }
}
