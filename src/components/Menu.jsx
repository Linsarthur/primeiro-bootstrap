import { Link, useNavigate } from "react-router-dom";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { logout } from "../firebase/auth";
import { useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";

// Link: este componente habilita o SPA (Single-Page Application)
// Obs: Se houver links externos utilize a tag <a />


function Menu() {
    const usuario = useContext(UsuarioContext)
    const navigate = useNavigate();
    
    function handleLogout() {
        logout().then(() => {
            navigate("/login")
        })
    }

    return (

        <header>
            <Navbar bg={"dark"} variant={"dark"} expand={"xxl"}>
                <Container fluid>
                    <Link to="/">
                        <img src="https://cdn.pixabay.com/photo/2017/09/29/00/30/checkmark-icon-2797531_640.png"
                            width="32" alt={"Imagem do home"} />
                    </Link>
                    <Navbar.Toggle /> {/*Botão para mostrar o nav*/}
                    <Navbar.Collapse>
                        <Nav className={"ms-auto"}>
                            {usuario && <Link className={"nav-link"} to="/tarefas">Tarefas</Link>}
                            {!usuario && <Link className={"nav-link"} to="/login">Login</Link>}
                            {!usuario && <Link className={"nav-link"} to="/cadastro">Cadastro</Link>}
                            <Link className={"nav-link"} to="/ajuda">Ajuda</Link>
                            {usuario && <span className="text-light nav-link">{usuario.display}</span>}
                            {usuario && <Button variant="outline-light" onClick={handleLogout}>Sair</Button>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>

    )
}

export default Menu;