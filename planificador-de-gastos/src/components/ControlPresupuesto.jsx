import React from 'react'

export const ControlPresupuesto = ({presupuesto}) => {

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('es-MX', {
            style: 'currency',
            currency: 'MXN'
        })
    }

    return (
        <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
            <div>
                <p>Gráfica aquí</p>
            </div>
            <div className='contenido-presupuesto'>
                <p>
                    <span>Presupuesto: </span>{formatearCantidad(presupuesto)}
                </p>

                <p>
                    <span>Disponible: </span>{formatearCantidad(0)}
                </p>

                <p>
                    <span>Presupuesto: </span>{formatearCantidad(0)}
                </p>
            </div>
        </div>
    )
}
