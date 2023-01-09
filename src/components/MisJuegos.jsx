import React from 'react';
import { useEffect } from 'react';
import { useReducer } from 'react';
import { JuegoReducer } from '../reducers/JuegoReducer';

const init = () =>{
    return JSON.parse(localStorage.getItem("Juegos")) || [];
}

export const MisJuegos = () => {



    const [juegos, dispatch] = useReducer(JuegoReducer, [], init);

    useEffect(() =>{
        localStorage.setItem("juegos", JSON.stringify(juegos))
    },[juegos])

    const conseguirDatosForm = e =>{
        e.preventDefault();

        let juego = {
            id: new Date().getTime(),
            titulo: e.target.titulo.value,
            descripcion: e.target.descripcion.value
        };

        console.log(juego);

        const accion = {
            type:"crear",
            payload: juego
        };
        dispatch(accion);

        console.log(juegos)

    }

    const borramelo = id =>{
        const action = {
            type:"borrar",
            payload:id
        };
        dispatch(action)
    }

    const editar =(e,id) =>{
        console.log(e.target.value,"editar",id)

        let juego={
            id,
            titulo:e.target.value,
            descripcion:e.target.value
        };

        const action = {
            type: "editar",
            payload: juego
        };
        dispatch(action);

    }


  return (
    <div>

        <h1>Estos son mis videojuegos</h1>

        <p>Número de videojuegos :{juegos.length}</p>

        <ul>
            {
                juegos.map(juego =>(
                    <li key={juego.id}>
                        {juego.titulo}
                        &nbsp;<button onClick={ e =>borramelo(juego.id)}>X</button>
                        <input type="text" onBlur={e => editar(e, juego.id)}/>
                        
                    </li>
                ))
            }
        </ul>

        <h3>Agregar Juego</h3>

        <form onSubmit={conseguirDatosForm}>
            <input type="texto" name="titulo" placeholder='Titulo' />
            <textarea name="descripcion" placeholder='Descripción'></textarea>
            <button type='submit' value="Guardar">Guardar</button>
        </form>


    </div>
  )
}
