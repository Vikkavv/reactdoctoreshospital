import React, { Component } from 'react'
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom'
import HomeComponent from './HomeComponent'
import NotFound404 from './NotFound404';
import MenuComponent from './MenuComponent';
import DoctoresComponent from './DoctoresComponent';
import CreateHospitales from './CreateHospital';
import HospitalesComponent from './HospitalesComponent';
import EjemploServiceComponent from './EjemploServiceComponent';

export default class Router extends Component {
  render() {

    function RouteParam(props){
        let params = useParams();
        let paramsString = Object.keys(params);
        let object = {}
        object[paramsString[0]] = params[paramsString[0]];
        let element = React.cloneElement(props.element,
            object
        );
        return(element);
    }


    return (
      <BrowserRouter>
        <MenuComponent/>
        <Routes>
            <Route path='/' element={<HomeComponent/>} />
            <Route path='/Createhospital' element={<CreateHospitales/>} />
            <Route path='/Hospitales' element={<HospitalesComponent/>} />
            <Route path='/EjemploServicio' element={<EjemploServiceComponent/>} />
            <Route path='/Doctores/:idHospital' element={<RouteParam element={<DoctoresComponent/>}/>}/>
            

            <Route path='*' element={<NotFound404/>} />
        </Routes>
      </BrowserRouter>
    )
  }
}
