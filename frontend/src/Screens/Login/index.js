import { useState } from "react"
import Authenticated from "../../routes/Authenticated"
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    const navigate = useNavigate();

    const userAuthenticated = Authenticated()

    if (userAuthenticated){
        return <Navigate to='/'/>
    }

    
    function Autenticar() {
        
        Authenticated(usuario, senha, navigate)
    }
    
    
    return(

        <div>
            
            <input value={usuario} type="text" name="usuario" id="user" placeholder="Usuário" onChange={(e) => setUsuario(e.target.value)}/>
            <input value={senha} type="text" name="senha" id="pass" placeholder="Senha" onChange={(e) => setSenha(e.target.value)}/>

            <button onClick={Autenticar}>Logar</button>

        </div>
    )
}