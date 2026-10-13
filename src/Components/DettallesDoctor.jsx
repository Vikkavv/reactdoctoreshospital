import React, { Component } from 'react'

export default class DetallesDoctor extends Component {

    sendFormInfo = (e) => {
      e.preventDefault();
      this.props.getDetallesDoctorById(this.props.idDoc);  
    }

  render() {
    return (
      <>
        <form onSubmit={this.sendFormInfo}>
            <button type='submit'>Detalles...</button>
        </form>
      </>
    )
  }
}
