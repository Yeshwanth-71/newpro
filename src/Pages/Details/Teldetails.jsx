import React from 'react';
import { useParams } from 'react-router-dom';
import { Telugu } from '../../Data/Telugu';
import Header from '../../Components/Header';
import { Row, Col, Container } from 'react-bootstrap';

function MobDet() {
    const { id } = useParams();
    const item = Telugu.find((e) => e.id === Number(id));

    return (
        <div className='any' style={{ backgroundColor: "black", minHeight: "200vh" }}>
            <Header /><br /><br />
            <Row>
                <Col md={6}>
                    <div className='mal d-flex' style={{ margin: "30px", display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "20px", justifyContent: "flex-start", textAlign: "left" }}>
                        <img src={item.image} alt={item.title} height="250px" style={{ borderRadius: "8px" }} />
                        <div>
                            <h3>Title: {item.title}</h3>
                            <h3>Rating: {item.rating}</h3>
                            <h3>Release Date: {item.releaseDate}</h3>
                            <h3>{item.genre}</h3>
                        </div>
                    </div>
                    <div style={{ marginLeft: "30px", textAlign: "left" }}>
                        <h3>Overview:</h3>
                        <p style={{ maxWidth: "500px" }}>{item.overview}</p>
                    </div>
                </Col>
                <Col md={6}>
                    <img src={item.image1} alt={item.title} height="auto" width="100%" style={{ borderRadius: "8px" }} />
                </Col>
            </Row><br /><br />

            <Container>
                <h2>Cast</h2>
                <Row>
                    <Col md={3}>
                        <img src={item.hero} alt={item.heroname} height="300px" style={{ borderRadius: "8px" }} />
                        <h4>{item.heroname}</h4>
                        <p> Character:{item.herochar}</p>
                    </Col>
                    <Col md={3}>
                        <img src={item.heroine} alt={item.heroname} height="300px" style={{ borderRadius: "8px" }} />
                        <h4> {item.hername}</h4>
                        <p>  Character:{item.herchar}</p>
                    </Col>
                    <Col md={3}>
                        <img src={item.Other} alt={item.heroname} height="300px" style={{ borderRadius: "8px" }} />
                        <h4> {item.othername}</h4>
                        <p>  Character:{item.otherchar}</p>
                    </Col>
                    <Col md={3}>
                        <img src={item.Director} alt={item.heroname} height="300px" style={{ borderRadius: "8px" }} />
                        <h4> {item.Dirname}</h4>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MobDet;
