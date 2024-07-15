import {Container, Spinner} from "react-bootstrap";

export default function Loader () {
    return(
        <Container>
            <Spinner variant="dark"/>
            <span className="ms-1">Carregando...</span>

        </Container>
    )
}