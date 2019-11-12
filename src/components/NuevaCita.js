import React, { Component } from 'react'

class NuevaCita extends Component {
    state = {
        cita : {
            mascota: '',
            propietario: '',
            facha: '',
            hora: '',
            sintomas: ''
        },
        error: false        
    }


    // Cuando el usuario escribe en los input.
    handleChange = e => {
        this.setState({
            cita: {
                ...this.state.cita,
                [e.target.name] : e.target.value 
            }               
        })
    }

    // Cuando el usuario envia el formulario.
    handleSumit = e => {
        e.preventDefault();

        // Extraer valores desde el state
        const {mascota, propietario, fecha, hora, sintomas} = this.state.cita;

        // Validar que los campos esten llenos
        if(mascota==='' || propietario==='' ||fecha==='' || hora==='' ||sintomas===''){
            this.setState({
                error: true               
            });
            return;
        }

        // Agregar cita al state de App.

    }

    render() { 
        return (
            <div className="card mt-5 py-5">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">
                        Llena el formulario para crear una nueva cita
                    </h2>
                    <form>
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre Mascota"
                                name="mascota" oid
                                onChange={this.handleChange}
                                value={this.state.cita.mascota}                                
                                />
                            </div>
                        </div>
                        
                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Nombre Dueño</label>
                            <div className="col-sm-8 col-lg-10">
                                <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre Dueño de Mascota"
                                name="propietario"
                                onChange={this.handleChange}
                                value={this.state.cita.propietario}                                
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                type="date"
                                className="form-control"
                                name="fecha"
                                onChange={this.handleChange}
                                value={this.state.cita.fecha}                                
                                />
                            </div>
                            <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
                            <div className="col-sm-8 col-lg-4">
                                <input
                                type="time"
                                className="form-control"
                                name="hora"
                                onChange={this.handleChange}
                                value={this.state.cita.hora}                                
                                />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
                            <div className="col-sm-8 col-lg-10">
                                <textarea
                                    className="form-control"
                                    name="sintomas"
                                    placeholder="Describe los sintomas"
                                    onChange={this.handleChange}
                                    value={this.state.cita.sintomas}
                                >
                                </textarea>
                            </div>
                        </div>

                        <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Agregar nueva Cita"/>

                    </form>
                </div>
            </div>
        );
    }
}
 
export default NuevaCita;