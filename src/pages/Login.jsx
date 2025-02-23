import Rodape from "../components/Rodape.jsx";
import {Button} from "react-bootstrap";
import {useForm} from "react-hook-form";
import { entrarGoogle, loginUsuario } from "../firebase/auth.js";
import toast from "react-hot-toast";
import {  Navigate, useNavigate } from "react-router-dom";
import { UsuarioContext } from "../contexts/UsuarioContext.jsx";
import { useContext } from "react";

function Login() {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const navigate = useNavigate();

    const usuario = useContext(UsuarioContext);

    function entrar(data) {
        //data é um objeto com os dados do formulário
        loginUsuario(data.email, data.senha).then(() => {
            toast.success("Bem vindo(a)!")
            navigate("/tarefas")
        }).catch(()=>{
            toast.error("Email ou senha errado.")
        })
    }

    function handleEntrarGoogle () {
        entrarGoogle().then(()=> {
            toast.success("Bem vindo(a)!")
            navigate("/tarefas")
        })
        
    }
    if(usuario !== null){
        return <Navigate to="/tarefas"/>
    }

    return (
        <>
            <main className={"mt-3"}>
                <form className={"form-section"} onSubmit={handleSubmit(entrar)}>
                    <h1>Login</h1>
                    <hr/>
                    <div>
                        <label htmlFor={"email"}>Email</label>
                        <input type={"email"} id={"email"} className={"form-control"} 
                               {...register("email", {required: true})}
                        />
                        {errors.email && <small className={"invalid"}>Digite seu email!</small>}
                    </div>
                    <div>
                        <label htmlFor={"senha"}>Senha</label>
                        <input type={"password"} id={"senha"} className={"form-control"}
                               {...register("senha", {
                                   required: "A senha é obrigatória",
                                   minLength: {value: 6, message: "Mínimo de 6 caracteres"},
                                   
                               })}
                        />

                        {errors.senha && <small className={"invalid"}>{errors.senha.message}</small>}
                    </div>
                    <Button variant={"dark"} className={"mt-1 w-100"} type={"submit"}>Entrar</Button>
                    <Button variant={"danger"} className={"mt-1 w-100"} type={"button"} onClick={handleEntrarGoogle}>Entrar com o Google</Button>
                </form>
            </main>
            <Rodape/>
        </>
    )
}

export default Login