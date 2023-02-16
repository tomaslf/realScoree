import './ItemListContainer.css'
import { useEffect, useState } from "react";
import { ItemList } from '../ItemList/ItemList';
import Carousel from 'react-bootstrap/Carousel';
import { useParams } from 'react-router-dom';
import { Card, Placeholder } from 'react-bootstrap';



const ItemListContainer = () => {
    const [resultados, setResultados] = useState([]);
    const { competition } = useParams();




    const getResults = () => {
        let url;
        if (competition) {
            url = (`https://www.scorebat.com/video-api/v3/competition/${competition}/?token=MjkxMTRfMTY2NzA1NzgyNF80NDEwYmY1ZmI0MWMwMmVlZDBmMGNhM2E2YTc2Y2VlZDA1YTYwNTU5`)
        } else {
            url = ("https://www.scorebat.com/video-api/v3/feed/?token=MjkxMTRfMTY2NzA1NzgyNF80NDEwYmY1ZmI0MWMwMmVlZDBmMGNhM2E2YTc2Y2VlZDA1YTYwNTU5")
        }
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setResultados(data.response)
                console.log(data.response)
            })
    }




    useEffect(() => {
        getResults();
    }, [competition])

    const [loader, setLoader] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoader(false)

        }, 5000);
    }, [])


    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        style={{ height: "400px" }}
                        className="d-block w-100"
                        src="../ligas1.jpg"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: "400px" }}
                        className="d-block w-100"
                        src="../ligas2.jpg"
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        style={{ height: "400px" }}
                        className="d-block w-100"
                        src="../aposta.jpg"
                        alt="Second slide"
                    />

                </Carousel.Item>

            </Carousel>
            {(loader) ?
                <div id='cardLoader'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Placeholder as={Card.Title} animation="glow">
                                <Placeholder xs={6} />
                            </Placeholder>
                            <Placeholder as={Card.Text} animation="glow">
                                <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                <Placeholder xs={6} /> <Placeholder xs={8} />
                            </Placeholder>
                            <Placeholder.Button variant="secondary" xs={6} />
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Placeholder as={Card.Title} animation="glow">
                                <Placeholder xs={6} />
                            </Placeholder>
                            <Placeholder as={Card.Text} animation="glow">
                                <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                <Placeholder xs={6} /> <Placeholder xs={8} />
                            </Placeholder>
                            <Placeholder.Button variant="secondary" xs={6} />
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Placeholder as={Card.Title} animation="glow">
                                <Placeholder xs={6} />
                            </Placeholder>
                            <Placeholder as={Card.Text} animation="glow">
                                <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                <Placeholder xs={6} /> <Placeholder xs={8} />
                            </Placeholder>
                            <Placeholder.Button variant="secondary" xs={6} />
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Body>
                            <Placeholder as={Card.Title} animation="glow">
                                <Placeholder xs={6} />
                            </Placeholder>
                            <Placeholder as={Card.Text} animation="glow">
                                <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                                <Placeholder xs={6} /> <Placeholder xs={8} />
                            </Placeholder>
                            <Placeholder.Button variant="secondary" xs={6} />
                        </Card.Body>
                    </Card>
                    </div>


                :
                <ItemList lista={resultados} />}

        </div>
    )
}

export default ItemListContainer