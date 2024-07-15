import {Link} from "react-router-dom";
import {Container, Nav, Navbar} from "react-bootstrap";

// Link: este componente habilita o SPA (Single-Page Application)
// Obs: Se houver links externos utilize a tag <a />


function Menu() {
    return (

        <header>
            <Navbar bg={"dark"} variant={"dark"} expand={"xxl"}>
                <Container fluid>
                    <Link to="/">
                        <img src="https://cdn.pixabay.com/photo/2017/09/29/00/30/checkmark-icon-2797531_640.png"
                             width="32" alt={"Imagem do home"}/>
                    </Link>
                    <Navbar.Toggle/> {/*Botão para mostrar o nav*/}
                    <Navbar.Collapse>
                        <Nav className={"ms-auto"}>
                            <Link className={"nav-link"} to="/tarefas">Tarefas</Link>
                            <Link className={"nav-link"} to="/login">Login</Link>
                            <Link className={"nav-link"} to="/cadastro">Cadastro</Link>
                            <Link className={"nav-link"} to="/ajuda">Ajuda</Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>

    )
}

export default Menu;