import { Card} from "react-bootstrap";


function NotFound () {
    return (
        <main className={"mt-3"}>

            <Card>
                <Card.Title>Página não encontrada.</Card.Title>
                <Card.Text>Página não encontrada. 404 :x</Card.Text>
            </Card>

        </main>
    )
}

export default NotFound;