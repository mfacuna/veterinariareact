import React from 'react';
import Cita from './Cita';
import PropTypes from 'prop-types';

const ListaCitas = ({citas, eliminarCita}) =>{
    
    const mensajeCitas = Object.keys(citas).length === 0 ? 'No hay citas ingresadas' : 'Citas Ingresadas:';
    
    return (
        <div className="card mt-3 py-3">
            <div className="card-body">
                <h2 className="card-title text-center mb-3">{mensajeCitas}</h2>
                <div className="lista-citas">
                    {citas.map(cita => (
                        <Cita
                            key = {cita.id}
                            cita = {cita}
                            eliminarCita = {eliminarCita}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
};

ListaCitas.propTypes = {
    citas : PropTypes.array.isRequired,
    eliminarCita : PropTypes.func.isRequired
}
 
export default ListaCitas;