import React,{useState} from "react"

export default function Renderizando() {

    const [login,setLogin] = useState(false)

    const loginSet = () => {
        setLogin(login)
    }

  return (
    <div>
        {login ?
            <>
                <p>"Esta pagina solo puedo verla por que estoy logueado" </p>
                <button onClick={loginSet}>Cerrar</button>
            </>
            :
            <>
             <p>"Inicia sesión para ver contenido privado"</p>
             <button onClick={loginSet}>Ingresar</button>
            </>
        }

    </div>
  )
}