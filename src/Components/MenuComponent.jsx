import axios from 'axios'
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Global } from '../Global'

export default class MenuComponent extends Component {

    state = {
        hospitales: []
    }

    getHospitals = () => {
        axios.get(Global.apiHospital).then((response) => {
            this.setState({
                hospitales: response.data
            })
        })
    }

    componentDidMount() {
        this.getHospitals();
    }

    render() {
        return (
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/">
                        <img style={{width: "50px", aspectRatio: 1}} src="/img/logo.png" alt="" />
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/CreateHospital">Crear hospital</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/Hospitales">Hospitales</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/EjemploServicio">Ejemplo Service</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Hospitales
                                </a>
                                <ul className="dropdown-menu">
                                    {
                                        this.state.hospitales.map((hospital, i) => {
                                            return(<li key={i}><NavLink className="dropdown-item" to={"/Doctores/" + hospital.idHospital} >{hospital.nombre}</NavLink></li>)
                                        })
                                    }
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
