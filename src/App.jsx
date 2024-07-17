import Menu from "./components/Menu.jsx"
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Ajuda from "./pages/Ajuda.jsx";
import NotFound from "./pages/NotFound.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PoliticaDePrivacidade from "./pages/PoliticaDePrivacidade.jsx";
import NovaTarefa from "./pages/NovaTarefa.jsx";
import Tarefas from "./pages/Tarefas.jsx";
import { Toaster } from "react-hot-toast";
import EditarTarefa from "./pages/EditarTarefa.jsx";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config.js";
import { UsuarioContext } from "./contexts/UsuarioContext.jsx";





//BrowseRouter é o componente essencial para conduzir o roteamento no navegador
//Indicamos o path (rota) e o elemento que será exibido na tela

function App() {
    //O estado do usuario indica se ele está logado ou não na aplicação
    // null = deslogado
    const [usuarioLogado, setUsuariologado] = useState(null);

    useEffect(() => {
        //Monitora / detecta o usuário conectado/desconectado.
        onAuthStateChanged(auth, (user) => {
            //user é nulo = usuário deslogou
            //se tem objeto = usuário logou
            setUsuariologado(user)
        })
    }, [])
    //usuario.provider é  o elemento que irá compartilha um valor/ dado para os componentes filhos da aplicação
   
    return (
        <>

            <UsuarioContext.Provider value={usuarioLogado}>
                <BrowserRouter>
                    <Menu />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/cadastro" element={<Cadastro />} />
                        <Route path="/ajuda" element={<Ajuda />} />
                        <Route path="/politicadeprivacidade" element={<PoliticaDePrivacidade />} />
                        <Route path="/tarefas" element={<Tarefas />} />
                        <Route path="/tarefas/adicionar" element={<NovaTarefa />} />
                        <Route path="/tarefas/editar/:id" element={<EditarTarefa />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </BrowserRouter>
                <Toaster position="bottom-right" />
            </UsuarioContext.Provider>
        </>
    );
}

export default App;