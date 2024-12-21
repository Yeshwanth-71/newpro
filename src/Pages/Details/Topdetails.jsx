import React from 'react';
import { useParams } from 'react-router-dom';
import { topRatedMovies } from '../../Data/topRatedMovies';
import Header from '../../Components/Header';
import { Row , Col } from 'react-bootstrap';

function MobDet() {
    const { id } = useParams();
    const item = topRatedMovies.find((e) => e.id === Number(id));
    
    return (
      
       
        <div className='any' style={{ backgroundColor: "black", minHeight: "200vh" }}>
            <Header /><br /><br />
            <Row>
            <Col md={6}>
            <div 
                className='mal d-flex' style={{ margin: "30px", display: "flex", flexDirection: "row", alignItems: "flex-start", gap: "20px", justifyContent: "flex-start",textAlign: "left",}}>
                <img src={item.image} alt={item.title} height="250px" style={{ borderRadius: "8px" }}/>
                <div>
                    <h3>Title: {item.title}</h3>
                    <h3>Rating: {item.rating}</h3>
                    <h3>Release Date: {item.releaseDate}</h3>
                    <h3> {item.genre}</h3>
                </div>
            </div>
            <div style={{ marginLeft: "30px", textAlign: "left" }}>
                <h3>Overview:</h3>
                <p style={{ maxWidth: "500px" }}>{item.overview}</p>
            </div>
            </Col>
          <Col md={6}>
          <img src={item.image1} alt={item.title} height="500px" style={{ borderRadius: "8px" }}/>
          </Col>
          </Row>
           
           
        </div>
        
    );
}

export default MobDet;
