import {Badge, Button, Card, Container} from "react-bootstrap";
import {Link, Navigate, useNavigate} from "react-router-dom";
import {deleteTarefa, getTarefas, getTarefasUsuario} from "../firebase/tarefas.js";
import {useContext, useEffect, useState} from "react";
import Loader from "../components/Loader.jsx";
import toast from "react-hot-toast";
import { UsuarioContext } from "../contexts/UsuarioContext.jsx"


export default function Tarefas() {
    
    const [tarefas, setTarefas] = useState(null);
    //recuperamos a informação do usuário (se está logado ou não) 
    const usuario = useContext(UsuarioContext);

    const navigate = useNavigate();

    function carregarDados() {
        if(usuario){
            getTarefasUsuario(usuario.uid).then((resultados) => {
                setTarefas(resultados);
            });
        }
    }
    function deletarTarefa (id){
        const deletar = confirm("Tem certeza?")
        if (deletar){
            deleteTarefa(id).then (() => {
                toast.success("Removido com sucesso.")
                carregarDados()
            }).catch(() => {
                toast.error("Não consegui excluir!")
            })
        }
    }
    // Executar uma função quando o componente é renderizado a primeira vez.
    useEffect(() => {
        carregarDados()
    }, []);


    //se o usuário não estiver logado
    if(usuario === null){
        //navegar para a outra página
        return <Navigate to="/login"/>
    }
    return (
        <main>
            <Container>
                <h1>Suas tarefas</h1>
                <hr/>
                <Link className="btn btn-dark" to="/tarefas/adicionar">Adicionar tarefas</Link>
                {
                    tarefas ? <section className="mt-2">
                        {tarefas.map((tarefa) => {
                            return <Card key={tarefa.id}>
                                <Card.Body>
                                    <Card.Title>{tarefa.titulo}</Card.Title>
                                    <Card.Text>{tarefa.descricao}</Card.Text>
                                    <div className="mb-2">
                                        {
                                            tarefa.concluido ? <Badge bg="success">Concluído</Badge> : <Badge bg="warning">Pendente</Badge>
                                        }
                                        <Badge bg="dark">{tarefa.categoria}</Badge>
                                        <Badge bg="dark">{new Date(tarefa.dataConclusao).toLocaleDateString()}</Badge>
                                    </div>
                                    <Button variant="dark" onClick={() => {
                                        navigate(`/tarefas/editar/${tarefa.id}`);
                                    }}>Editar</Button>
                                    <Button variant="danger" onClick={() => deletarTarefa(tarefa.id)}>Excluir</Button>
                                </Card.Body>

                            </Card>
                        })}
                    </section> : <Loader/>
                }
            </Container>


        </main>
    );
}

