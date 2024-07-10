import {Button, Card, Container, Tab, Tabs} from "react-bootstrap";
import "../assets/Home.css"
import Rodape from "../components/Rodape.jsx";

function Home() {
    return (
        <>
        <main className={"ms-3 me-3"}>
            <Tabs defaultActiveKey="profile"
            id="home"
            className="mt-3">
                <Tab bg="dark" title="Home" eventKey="Home"></Tab>
                <Tab title="profile" eventKey="Profile"></Tab>
                <Tab title="Contact" eventKey="Contact"></Tab>


            </Tabs>





            <h1>Home</h1>
            <Container className={"container-cards"}>
                <Card className={"cards"}>
                    <Card.Img className={"cards-foto"} variant="top" src="./Onepiece.jpg"/>
                    <Card.Body>
                        <Card.Title>One piece</Card.Title>
                        <Card.Text>
                            One piece é um anime sobre um pirada que estica que luta contra a opressão do governo
                            mundial em busca da liberdade absoluta.
                        </Card.Text>
                        <Button variant={"primary"}>Assistir</Button>
                    </Card.Body>
                </Card>

                <Card className={"cards"}>
                    <Card.Img className={"cards-foto"} variant="top" src="./narutin.jpg"/>
                    <Card.Body>
                        <Card.Title>Naruto</Card.Title>
                        <Card.Text>
                            Naruto retrata a vida de um garoto que cresceu com um demônio dentro do seu corpo. Querendo ser o maior ninja de sua vila ele vai contra tudo e todos que o dizem que não será ninguém.
                        </Card.Text>
                        <Button variant={"primary"}>Assistir</Button>
                    </Card.Body>
                </Card>


                <Card className={"cards"}>
                    <Card.Img className={"cards-foto"} variant="top" src="./dbz.jpg"/>
                    <Card.Body>
                        <Card.Title>Dragon Ball</Card.Title>
                        <Card.Text>
                            A série segue as aventuras do protagonista, Son Goku, desde sua infância até a idade adulta enquanto ele treina artes marciais e explora o mundo em busca de sete esferas conhecidas como as Esferas do Dragão, que convocam um dragão que concede um desejo quando reunidas.
                        </Card.Text>
                        <Button variant={"primary"}>Assistir</Button>
                    </Card.Body>
                </Card>

                <Card className={"cards"}>
                    <Card.Img className={"cards-foto"} variant="top" src="./bleach.jpg"/>
                    <Card.Body>
                        <Card.Title>Bleach</Card.Title>
                        <Card.Text>
                            O jovem Ichigo é surpreendido com indesejadas habilidades de ceifeiro de almas e quer devolver os poderes. Mas deve executar algumas tarefas antes.
                        </Card.Text>
                        <Button variant={"primary"}>Assistir</Button>
                    </Card.Body>
                </Card>

                <Card className={"cards"}>
                    <Card.Img className={"cards-foto"} variant="top" src="./cavaleiros.jpg"/>
                    <Card.Body>
                        <Card.Title>Cavaleiros do zodíaco</Card.Title>
                        <Card.Text>
                            Seiya, um obstinado adolescente de rua, passa seu tempo lutando por dinheiro enquanto procura por sua irmã sequestrada. Quando uma de suas lutas inadvertidamente desperta poderes místicos que ele nunca soube que tinha, Seiya se vê lançado em um mundo de santos guerreiros, treinamento mágico antigo e uma deusa reencarnada que precisa de sua proteção.
                        </Card.Text>
                        <Button variant={"primary"}>Assistir</Button>
                    </Card.Body>
                </Card>

            </Container>
        </main>
        <Rodape/>
        </>
    )
}

export default Home