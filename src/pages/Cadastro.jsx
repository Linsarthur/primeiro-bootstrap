import Rodape from "../components/Rodape.jsx";
import {Button, Toast} from "react-bootstrap";
import {useForm} from "react-hook-form";
import toast from "react-hot-toast";
import { criarUsuario, entrarGoogle } from "../firebase/auth.js";
import { useNavigate } from "react-router-dom";


function Cadastro() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const navigate = useNavigate()
        
    function cadastrar (data) {
        criarUsuario(data.nome, data.email, data.senha).then(() => {
            toast.success(`Bem vindo(a) ${data.nome}`)
            navigate("/tarefas")
        }) .catch((error) => {
            toast.error("Um erro aconteceu!" + error.code)
        })
    }

    function handleEntrarGoogle() {
        entrarGoogle().then(() => {
            toast.success("Bem vindo(a)!");
            navigate("/tarefas")
        }).catch(() =>{
            toast.error("Impossível de logar")
        })
      }

    return (
        <>
            <main className={"mt-3"}>
                <form className={'form-section'} onSubmit={handleSubmit(cadastrar)}>
                    <h1>Cadastro</h1>
                    <hr/>
                    <div>
                        <label htmlFor={"nome"}>Nome</label>
                        <input type={"text"} id={"nome"} className={"form-control"}
                        {...register("nome", {required:true, maxLength:150})}
                            />
                        {errors.nome && <small className={"invalid"}>Digite seu nome!</small>}
                    </div>
                    <div>
                        <label htmlFor={"email"}>Email</label>
                        <input type={"email"} id={"email"} className={"form-control"}
                        {...register("email", {required:true, })}
                        />
                        {errors.email && <small className={"invalid"}>Digite seu email!</small>}
                    </div>

                    <div>
                        <label htmlFor={"senha"}>Senha</label>
                        <input type={"password"} id={"senha"} className={"form-control"}
                        {...register("senha", {required:true, minLength:8, maxLength:64})}
                        />
                        {errors.senha && <small className={"invalid"}>Digite seu senha!</small>}

                    </div>
                    <Button variant={"dark"} className={"mt-1 w-100"} type={"submit"}>Cadastrar</Button>
                    <Button onClick={handleEntrarGoogle} variant={"danger"} className={"mt-1 w-100"} type={"button"}>Entrar com google</Button>
                </form>

            </main>
            <Rodape/>
        </>

    )
}

export default Cadastro;