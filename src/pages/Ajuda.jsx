import {
    Accordion,
    Alert,
    Button,
    CardFooter,
    Container
} from "react-bootstrap";
import Rodape from "../components/Rodape.jsx";

function Ajuda() {
    return (
        <>
            <main className={"mt-3"}>
                <Container fluid>
                    <h1>Ajuda</h1>
                    <hr/>
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Sobre o nosso sistema</Accordion.Header>
                            <Accordion.Body> MyTask é um sistema para gerenciamento de tarefas pessoas. Nessa aplicação
                                você pode gerenciar todos os seus afazeres. </Accordion.Body>
                        </Accordion.Item>
                        <br/>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Sobre a Empresa</Accordion.Header>
                            <Accordion.Body>
                                Essa empresa envolve soluções focadas em produtividade e bem-estar.
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion>
                    <Button variant="dark" className="me-1 mt-1">Entre em contato</Button>

                    <Button variant="outline-danger" className="me-1 mt-1">Reportar erro</Button>
                    <Alert variant="warning">Atenção! Estamos em manutenção</Alert>
                </Container>

            </main>
                <CardFooter>
                <Rodape/>
                </CardFooter>
        </>
    )
}

export default Ajuda