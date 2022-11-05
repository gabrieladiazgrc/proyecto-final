import React from 'react'
import { useState } from 'react'
import Mensaje from './Mensaje'
import BotonCerrar from '../img/cerrar.svg'
import { useEffect } from 'react'

export const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar}) => {
    
    const [mensaje, setMensaje] = useState('')
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    
    useEffect(() => {
        if( Object.keys(gastoEditar).length > 0) {
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
        }
    }, []);

    const ocultarModal = () => {

        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        }, 250);
    }

        const handleSubmit = e => {
            e.preventDefault();

            if ([nombre, cantidad, categoria].includes('')) {
                setMensaje('Todos los campos son obligatorios')

                setTimeout(() => {
                    setMensaje('')
                }, 3000)

                return;
            }

            guardarGasto({nombre, cantidad, categoria})
        }

    return (
        <div className='modal'>
            <div className='cerrar-modal'>
                <img
                src={BotonCerrar}
                alt='Botón cerrar ventana modal'
                onClick={ocultarModal}
                />
            </div>
            <form 
                onSubmit={handleSubmit}
                className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}
            >
                <legend>Nuevo gasto</legend>
                
                {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}

                <div className='campo'>
                    <label htmlFor='nombre'>Nombre del gasto:</label>
                    <input
                        id='nombre'
                        type='text'
                        placeholder='Añade el nombre del gasto...'
                        value={nombre}
                        onChange={ e => setNombre(e.target.value)}
                    />
                    <label htmlFor='cantidad'>Cantidad:</label>
                    <input
                        id='cantidad'
                        type='number'
                        placeholder='Añade la cantidad del gasto...'
                        value={cantidad}
                        onChange={ e => setCantidad(Number(e.target.value))}
                    />
                    <label htmlFor='categoria'>Categoría:</label>
                    <select 
                        id='categoria'
                        value={categoria}
                        onChange={ e => setCategoria(e.target.value)}
                    >
                        <option value=''>-- Seleccione --</option>
                        <option value='ahorro'>Ahorro</option>
                        <option value='comida'>Comida</option>
                        <option value='casa'>Gastos varios</option>
                        <option value='recreacion'>Recreación</option>
                        <option value='salud'>Salud</option>
                        <option value='suscripciones'>Suscripciones</option>
                    </select>
                </div>
                <input
                    type='submit'
                    value='Añadir gasto'
                />
            </form>
        </div>
    )
}

export default Modal