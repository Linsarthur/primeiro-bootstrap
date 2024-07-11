import Menu from "./components/Menu.jsx"
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx";
import Cadastro from "./pages/Cadastro.jsx";
import Ajuda from "./pages/Ajuda.jsx";
import NotFound from "./pages/NotFound.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PoliticaDePrivacidade from "./pages/PoliticaDePrivacidade.jsx";
import NovaTarefa from "./pages/NovaTarefa.jsx";



//BrowseRouter é o componente essencial para conduzir o roteamento no navegador
//Indicamos o path (rota) e o elemento que será exibido na tela

function App() {
    return (
        <>
            <BrowserRouter>
                <Menu/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/cadastro" element={<Cadastro/>}/>
                    <Route path="/ajuda" element={<Ajuda/>}/>
                    <Route path="politicadeprivacidade" element={<PoliticaDePrivacidade/>}/>
                    <Route path="/novatarefa" element={<NovaTarefa/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Routes>
            </BrowserRouter>



        </>
    );
}

export default App;