import React, { Component } from 'react'
import ServiceEjemplo from '../services/ServiceEjemplo'

export default class EjemploServiceComponent extends Component {

    service = new ServiceEjemplo();

    state = {
        message1: "",
        message2: "",
        comics: []
    }

    getData = () => {
        this.setState({
            message1: this.service.getSaludo(),
            message2: this.service.getDia(),
            comics: this.service.getComics()
        })
    }

    componentDidMount() {
        this.getData();
    }

  render() {
    return (
      <div className='container'>
        <br />
        <h1>EjemploServiceComponent</h1>
        {
            this.state.message1.length > 0 &&
            <div>
                <h1 className='text-success'>{this.state.message1}</h1>
                <h1 className='text-info'>{this.state.message2}</h1>
                <div className='grid-col4 gap1'>
                    {
                        this.state.comics.map((comic, i) => {
                            return(
                                <div key={i} classname="card" style={{width: "18rem"}}>
                                    <img src={comic.imagen} style={{width: "100%"}} classname="card-img-top" alt=""/>
                                    <div classname="card-body">
                                        <h5 classname="card-title">{comic.titulo}</h5>
                                        <p classname="card-text">{comic.descripción}</p>
                                        <a href={"/Comic/" + i} classname="btn btn-primary">Ver cómic</a>
                                    </div>
                                </div>

                                /*
                                <div class="card" style="width: 18rem;">
                                    <svg aria-label="Placeholder: Image cap" class="bd-placeholder-img card-img-top" height="180" preserveAspectRatio="xMidYMid slice" role="img" width="100%" xmlns="http://www.w3.org/2000/svg"><title>Placeholder</title><rect width="100%" height="100%" fill="#868e96"></rect><text x="50%" y="50%" fill="#dee2e6" dy=".3em">Image cap</text></svg>
                                    <div class="card-body">
                                        <h5 class="card-title">Card title</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                                        <a href="#" class="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                                */
                            )
                        })
                    }
                </div>
            </div>
        }
      </div>
    )
  }
}
